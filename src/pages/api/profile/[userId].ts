import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../utils/models/user';
import { connectToDatabase } from '../utils/lib/connectToDatabase';
import { Task } from '../utils/models/task';
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		const userId = req.query.userId;

		await connectToDatabase();

		let user;
		try {
			user = await User.findById(userId).select('-password').populate('tasks');
		} catch (err) {
			return res.status(500).json({
				message: 'Could not find user, please try again later',
			});
		}
		const transformedTasks = user.tasks.map((task: any) => {
			const plainObject = task.toObject({ getters: true });
			return plainObject;
		});
		res.status(200).json({
			message: 'czesc',
			user,
			tasks: transformedTasks,
		});
	}
}
