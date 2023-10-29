import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../utils/models/user';
import { connectToDatabase } from '../utils/lib/connectToDatabase';
import mongoose from 'mongoose';
// import { Task } from '../utils/models/task';

const TaskSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	category: { type: String, required: true },
	importance: { type: String, required: true },
	author: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
	date: { type: String, required: true },
	active: { type: Boolean, required: true },
});

const Task = mongoose.models.Task || mongoose.model('Task', TaskSchema);

//TASK MODEL IS ONLY HERE BECAUSE OF ERROR 'SCHEMA WAS NOT REGISTERED' ONWARDS TO MAKE IT ANOTHER WAY SOON

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
