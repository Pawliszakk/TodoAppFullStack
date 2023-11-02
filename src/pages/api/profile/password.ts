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
		const { userId, newPassword } = req.body;
		checkAuth(req, res);

		const passwordIsValid = newPassword.length >= 8 && newPassword.length <= 20;
		if (!passwordIsValid) {
			return res
				.status(400)
				.json({ message: 'Invalid input data. Please try again' });
		}

		let user;

		let hashedPassword;
		try {
			hashedPassword = await bcrypt.hash(newPassword, 12);
		} catch (err) {
			res.status(500).json({
				message: 'Cannot change your password, please try again later',
			});
		}
		await connectToDatabase();

		try {
			user = await User.findByIdAndUpdate(userId, { password: hashedPassword });
		} catch (err) {
			return res.status(500).json({
				message: 'Could not find user, please try again later',
			});
		}
		res.status(200).json({ message: 'Changed your password successfully' });
	}
}
