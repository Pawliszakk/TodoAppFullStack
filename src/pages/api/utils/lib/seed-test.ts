import { Task } from '../models/task';
import { User } from '../models/user';
import { connectToDatabase } from './connectToDatabase';
import bcrypt from 'bcryptjs';

export const seed = async (
	password: string,
	user: string,
	database: string
) => {
	await connectToDatabase(password, user, database);

	console.log('latwo');
	try {
		await Task.deleteMany({});
	} catch (err) {
		console.log(err);
	}

	try {
		await User.deleteMany({});
	} catch (err) {
		console.log(err);
	}

	const userPassword = 'TestPassword1!';

	let hashedPassword;
	try {
		hashedPassword = await bcrypt.hash(userPassword, 12);
	} catch (err) {
		console.log(err);
	}

	const userToCreate = new User({
		name: 'test',
		email: 'test@example.com',
		password: hashedPassword,
		avatar: '/assets/avatars/avatar2.jpg',
		points: 0,
		date: '21-07-2023',
		tasks: [],
	});

	try {
		await userToCreate.save();
	} catch (err) {
		console.log(err);
	}
};
