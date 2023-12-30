import { Task } from '../models/task';
import { User } from '../models/user';
import { connectToDatabase } from './connectToDatabase';

export const seed = async () => {
	await connectToDatabase(); 

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
