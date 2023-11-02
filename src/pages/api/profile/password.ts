import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../utils/models/user';
import { connectToDatabase } from '../utils/lib/connectToDatabase';
import { checkAuth } from '../utils/lib/checkAuth';
import bcrypt from 'bcryptjs';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'PATCH') {
		const { userId, oldPassword, newPassword } = req.body;
		checkAuth(req, res);

		const passwordIsValid =
			newPassword.length >= 8 &&
			newPassword.length <= 20 &&
			/[A-Z]/.test(newPassword) &&
			/[0-9]/.test(newPassword) &&
			/[^A-Za-z0-9]/.test(newPassword);

		const oldPasswordIsValid =
			oldPassword.length >= 8 && oldPassword.length <= 20;
		if (!passwordIsValid || !oldPasswordIsValid) {
			return res
				.status(400)
				.json({ message: 'Invalid input data. Please try again' });
		}
		if (oldPassword === newPassword) {
			return res
				.status(400)
				.json({ message: 'Your old password is the same as new password' });
		}
		await connectToDatabase();

		let user;
		try {
			user = await User.findById(userId);
		} catch (err) {
			res.status(500).json({
				message: 'Cannot change your password, please try again later',
			});
		}

		let isPasswordValid = false;
		try {
			isPasswordValid = await bcrypt.compare(oldPassword, user.password);
		} catch (err) {
			res.status(422).json({
				message:
					'Cannot log you in, something went wrong, please try again later',
			});
		}

		if (!isPasswordValid) {
			return res.status(409).json({
				message: `Your old password is not valid, please try again`,
			});
		}

		let hashedPassword;
		try {
			hashedPassword = await bcrypt.hash(newPassword, 12);
		} catch (err) {
			res.status(500).json({
				message: 'Cannot change your password, please try again later',
			});
		}

		try {
			user.password = hashedPassword;
			user.save();
		} catch (err) {
			return res.status(500).json({
				message: 'Could not find user, please try again later',
			});
		}

		res.status(200).json({ message: 'Changed your password successfully' });
	}
}
