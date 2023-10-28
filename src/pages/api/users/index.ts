import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../utils/lib/connectToDatabase';
import { User } from '../utils/models/user';

type UserToSend = {
	avatar: string;
	name: string;
	date: string;
	points: number;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		await connectToDatabase();

		try {
			const users = await User.find({}).sort({ points: -1 }).limit(10);

			const usersToSend: UserToSend[] = [];
			users.map((u) => {
				usersToSend.push({
					avatar: u.avatar,
					name: u.name,
					date: u.date,
					points: u.points,
				});
			});

			res.status(200).json({
				message: 'Successfully fetched best users',
				users: usersToSend,
			});
		} catch (err) {
			res.status(500).json({ message: 'Failed to fetch users' });
		}
	}
}
