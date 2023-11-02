import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../utils/models/user';
import { connectToDatabase } from '../utils/lib/connectToDatabase';
import { getDate } from '../utils/lib/getDate';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		const { name, email, password, avatar } = req.body;

		const nameIsValid = name.length >= 5 && name.length <= 20;
		const emailIsValid = email.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
		const passwordIsValid =
			password.length >= 8 &&
			password.length <= 20 &&
			/[A-Z]/.test(password) &&
			/[0-9]/.test(password) &&
			/[^A-Za-z0-9]/.test(password);

		let avatarIsValid;
		for (let i = 1; i <= 15; i++) {
			const expectedValue = `/assets/avatars/avatar${i}.jpg`;
			if (avatar === expectedValue) {
				avatarIsValid = true;
				break;
			}
		}

		if (!nameIsValid || !emailIsValid || !passwordIsValid || !avatarIsValid) {
			return res
				.status(400)
				.json({ message: 'Invalid input data. Please try again' });
		}

		await connectToDatabase();

		let user;
		try {
			user = await User.findOne({ email });
		} catch (err) {
			return res
				.status(500)
				.json({ message: 'Cannot create a user, please try again later' });
		}

		if (user) {
			return res
				.status(409)
				.json({ message: `Account for ${email} already exists` });
		}

		let hashedPassword;
		try {
			hashedPassword = await bcrypt.hash(password, 12);
		} catch (err) {
			res
				.status(500)
				.json({ message: 'Cannot create a user, please try again later' });
		}
		const createdUser = new User({
			name,
			email,
			password: hashedPassword,
			avatar,
			points: 0,
			date: getDate(),
			tasks: [],
		});

		try {
			const result = await createdUser.save();
		} catch (err) {
			return res
				.status(500)
				.json({ message: 'Cannot create a user, please try again later' });
		}
		let token;
		try {
			token = jwt.sign(
				{ userId: createdUser.id, email: createdUser.email },
				`${process.env.JWT_KEY}`,
				{ expiresIn: '1h' }
			);
		} catch (err) {
			return res
				.status(500)
				.json({ message: 'Cannot create a user, please try again later' });
		}
		return res.status(201).json({
			message: 'User has been created successfully',
			userId: createdUser.id,
			userAvatar: createdUser.avatar,
			email: createdUser.email,
			token,
		});
	}
}
