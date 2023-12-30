import mongoose from 'mongoose';
import { HttpError } from './HttpError';

export const connectToDatabase = async (
	pass?: string,
	user?: string,
	database?: string
) => {
	let password = process.env.DB_PASSWORD;
	let userName = process.env.DB_USER;
	let dbName = process.env.DB_NAME;

	if (pass && user && database) {
		password = pass;
		userName = user;
		dbName = database;
	}

	const URL = `mongodb+srv://${userName}:${password}@cluster0.fvub0dj.mongodb.net/${dbName}?retryWrites=true&w=majority`;
	console.log(password, userName, dbName, URL);
	let db;
	try {
		db = await mongoose.connect(URL);
	} catch (err) {
		throw HttpError('Connecting to database Failed', 500);
	}
	return db;
};
