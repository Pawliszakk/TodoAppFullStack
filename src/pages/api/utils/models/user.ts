import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	avatar: { type: String, required: true },
	points: { type: Number, required: true },
	date: { type: String, required: true },
	tasks: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Task' }],
});

export const User = mongoose.models.User || mongoose.model('User', UserSchema);
