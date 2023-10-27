import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	avatar: { type: String, required: true },
	points: { type: String, required: true },
	id: { type: String, required: true },
	date: { type: String, required: true },
	tasks: { type: String, required: true },
});

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
