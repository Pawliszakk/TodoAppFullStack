import { Task } from '../models/task';
import { User } from '../models/user';
import { connectToDatabase } from './connectToDatabase';

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
};
