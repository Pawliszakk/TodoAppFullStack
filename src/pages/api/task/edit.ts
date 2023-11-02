import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../utils/lib/connectToDatabase';
import { checkAuth } from '../utils/lib/checkAuth';
import { Task } from '../utils/models/task';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'PATCH') {
		const { id, author, title, description, category, importance } = req.body;

		checkAuth(req, res);

		await connectToDatabase();

		let task;
		try {
			task = await Task.findById(id);
		} catch (err) {
			return res.status(500).json({ message: 'Cannot update your task' });
		}

		if (task.author.toString() !== author || !task) {
			return res.status(409).json({ message: 'Cannot update your task' });
		}

		const updateFields = { title, description, category, importance };

		try {
			task = await Task.updateOne({ _id: id }, updateFields);
		} catch (err) {
			res.status(500).json({ message: 'Cannot edit your task' });
		}
		res.status(200).json({ message: 'Successfully edited your task' });
	}
}
