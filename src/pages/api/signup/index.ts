import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../models/user';
import { v4 as uuidv4 } from 'uuid';
import { connectToDatabase } from '../lib/connectToDatabase';
import { HttpError } from '../lib/HttpError';
import { getDate } from '../lib/getDate';

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
		const passwordIsValid = password.length >= 8 && password.length <= 20;

		if (!nameIsValid || !emailIsValid || !passwordIsValid) {
			return res
				.status(400)
				.json({ message: 'Invalid input data. Please try again' });
		}
		const createdUser = new User({
			name,
			email,
			password,
			avatar,
			points: '0',
			id: uuidv4(),
			date: getDate(),
			tasks: 'Potem sie zateguje',
		});
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

		try {
			const result = await createdUser.save();
			return res.status(201).json({ message: 'User Created Successfully' });
		} catch (err) {
			return res
				.status(500)
				.json({ message: 'Cannot create a user, please try again later' });
		}
	}
}
