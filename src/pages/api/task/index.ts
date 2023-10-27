import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../lib/connectToDatabase';
import { v4 as uuidv4 } from 'uuid';
import { HttpError } from '../lib/HttpError';
import { Task } from '../models/task';
import mongoose from 'mongoose';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'GET') {
		const db = connectToDatabase();

		let result;
		try {
			result = await Task.find({});
			const tasksToSend: any[] = [];
			result.map((r) => {
				tasksToSend.push({
					id: r.id,
					title: r.title,
					description: r.description,
					category: r.category,
					importance: r.importance,
					author: r.author,
					date: r.date,
					active: r.active,
				});
			});

			res
				.status(200)
				.json({ message: 'Tasks fetched successfully', tasks: tasksToSend });
		} catch (err) {
			return HttpError('Failed to fetch tasks', 500);
		}
	}

	if (req.method === 'POST') {
		const { title, description, category, importance, author, date, active } =
			req.body;

		const createdTask = new Task({
			title,
			description,
			category,
			importance,
			author,
			id: uuidv4(),
			date,
			active,
		});
		await connectToDatabase();

		try {
			const result = await createdTask.save();
			return res.status(200).json({
				message: 'Successfully created Your Task',
			});
		} catch (err) {
			return HttpError('Could not create your task', 500);
		}
	}
	if (req.method === 'DELETE') {
		const { id } = req.body;
		const db = connectToDatabase();

		try {
			const result = await Task.findOneAndDelete({ id });
			return res.status(200).json({ message: 'Your task has been deleted' });
		} catch (err) {
			return HttpError('Could not delete your task', 500);
		}
	}
	if (req.method === 'PATCH') {
		const { id } = req.body;
		const db = connectToDatabase();

		try {
			const result = await Task.findOneAndUpdate({ id }, { active: false });
			return res
				.status(200)
				.json({ message: 'Your task has finished, congratulations' });
		} catch (err) {
			return HttpError('Could not delete your task', 500);
		}
	}
}
