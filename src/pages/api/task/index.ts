import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../utils/lib/connectToDatabase';
import { Task } from '../utils/models/task';
import { getDate } from '../utils/lib/getDate';
import { User } from '../utils/models/user';
import mongoose from 'mongoose';
import { checkAuth } from '../utils/lib/checkAuth';
import { checkTask } from '../utils/lib/checkTask';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		const { title, description, category, importance, author } = req.body;

		checkAuth(req, res);

		const isTaskValid = checkTask(req, res);
		if (!isTaskValid) {
			return res
				.status(400)
				.json({ message: 'Invalid data. Please try again' });
		}
		await connectToDatabase();
		let user;
		try {
			user = await User.findById(author);
		} catch (err) {
			return res.status(500).json({ message: 'Cannot create your task' });
		}
		if (!user) {
			return res.status(500).json({ message: 'Cannot create your task' });
		}

		const createdTask = new Task({
			title,
			description,
			category,
			importance,
			author,
			date: getDate(),
			active: true,
		});

		try {
			const sess = await mongoose.startSession();
			sess.startTransaction();
			await createdTask.save({ session: sess });
			user.tasks.push(createdTask._id);
			await user.save({ session: sess });
			await sess.commitTransaction();
		} catch (err) {
			return res.status(500).json({ message: 'Cannot create your task' });
		}
		res.status(201).json({ message: 'Successfully created your task' });
	}
	if (req.method === 'DELETE') {
		const { id, author } = req.body;

		checkAuth(req, res);

		await connectToDatabase();
		let task;
		try {
			task = await Task.findById(id).populate('author');
		} catch (err) {
			return res.status(500).json({ message: 'Could not delete your task' });
		}

		if (task.author.id !== author) {
			return res.status(403).json({ message: 'Could not delete task' });
		}

		try {
			const sess = await mongoose.startSession();
			sess.startTransaction();
			await task.deleteOne({ session: sess });
			task.author.tasks.pull(task);
			await task.author.save({ session: sess });
			await sess.commitTransaction();
		} catch (err) {
			return res.status(500).json({ message: 'Could not delete task' });
		}
		return res.status(200).json({ message: 'Successfully deleted your task' });
	}
	if (req.method === 'PATCH') {
		const { id, author } = req.body;

		checkAuth(req, res);

		await connectToDatabase();

		let user;
		try {
			user = await User.findById(author).populate('tasks');
		} catch (err) {
			return res.status(500).json({ message: 'Could not finish your task' });
		}

		const taskToUpdate = user.tasks.find(
			(task: any) => task._id.toString() === id
		);

		if (!taskToUpdate) {
			return res.status(422).json({ message: 'Cannot find your task' });
		}
		if (!taskToUpdate.active) {
			return res.status(422).json({
				message: 'Cannot finish your task, because task is already finished',
			});
		}
		user.points += 10;
		taskToUpdate.active = false;

		try {
			const sess = await mongoose.startSession();
			sess.startTransaction();
			await user.save();
			await taskToUpdate.save();
			await sess.commitTransaction();
		} catch (err) {
			return res.status(500).json({
				message: 'Could not finish your task, please try again later',
			});
		}
		return res
			.status(200)
			.json({ message: 'Your task has been finished successfully' });
	}
}
