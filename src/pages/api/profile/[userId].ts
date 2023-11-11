import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../utils/models/user';
import { connectToDatabase } from '../utils/lib/connectToDatabase';
import mongoose from 'mongoose';
import { checkAuth } from '../utils/lib/checkAuth';
import bcrypt from 'bcryptjs';

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

		checkAuth(req, res);
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
			message: 'Successfully fetched your data',
			user,
			tasks: transformedTasks,
		});
	}

	if (req.method === 'PATCH') {
		const userId = req.query.userId;

		checkAuth(req, res);
		const { name, avatar } = req.body;
		const isNameValid = name.trim().length >= 5 && name.trim().length <= 20;
		let isAvatarValid;

		for (let i = 1; i <= 15; i++) {
			const expectedValue = `/assets/avatars/avatar${i}.jpg`;
			if (avatar === expectedValue) {
				isAvatarValid = true;
				break;
			}
		}
		if (!isNameValid || !isAvatarValid) {
			return res
				.status(400)
				.json({ message: 'Invalid input data. Please try again' });
		}

		await connectToDatabase();
		let user;
		try {
			user = await User.findByIdAndUpdate(userId, { avatar, name });
		} catch (err) {
			return res.status(500).json({
				message: 'Could not edit your settings, please try again later',
			});
		}
		res
			.status(200)
			.json({ message: 'Successfully edited your profile settings', user });
	}
	if (req.method === 'DELETE') {
		const userId = req.query.userId;
		const { password } = req.body;
		checkAuth(req, res);

		let user;
		try {
			user = await User.findById(userId).populate('tasks');
		} catch (err) {
			res.status(500).json({
				message: 'Cannot delete your account, please try again later',
			});
		}

		if (!user) {
			res.status(500).json({
				message: 'Cannot delete your account, please try again later',
			});
		}

		let isPasswordValid = false;
		try {
			isPasswordValid = await bcrypt.compare(password, user.password);
		} catch (err) {
			res.status(500).json({
				message: 'Cannot delete your account, please try again later',
			});
		}
		if (!isPasswordValid) {
			res
				.status(401)
				.json({ message: 'Your password is not correct, please try again' });
		}
		try {
			const sess = await mongoose.startSession();
			sess.startTransaction();
			await user.deleteOne({ session: sess });
			const taskIds: any = user.tasks.map((task: any) => task._id);
			await Task.deleteMany({ _id: { $in: taskIds } }).session(sess);
			await sess.commitTransaction();
		} catch (err) {
			res.status(500).json({
				message: 'Cannot delete your account, please try again later',
			});
		}

		res.status(200).json({ message: 'Your account has been deleted.' });
	}
}
