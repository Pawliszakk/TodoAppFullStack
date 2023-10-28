import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../utils/models/user';
import { connectToDatabase } from '../utils/lib/connectToDatabase';
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		const userId = req.query.userId;

		await connectToDatabase();

		let user;
		try {
			user = await User.findById(userId).populate('tasks');
		} catch (err) {
			console.log(err.message);
			return res.status(500).json({
				message: 'Could not find user, please try again later',
			});
		}
		res.status(200).json({ message: 'czesc', user });
	}
}
