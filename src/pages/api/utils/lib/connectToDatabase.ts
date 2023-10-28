import mongoose from 'mongoose';
import { HttpError } from './HttpError';

export const connectToDatabase = async () => {
	const password = process.env.DB_PASSWORD;
	const userName = process.env.DB_USER;
	const dbName = process.env.DB_NAME;
	const URL = `mongodb+srv://${userName}:${password}@cluster0.fvub0dj.mongodb.net/${dbName}?retryWrites=true&w=majority`;

	let db;
	try {
		db = await mongoose.connect(URL);
	} catch (err) {
		throw HttpError('Connecting to database Failed', 500);
	}
	return db;
};
