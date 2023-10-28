import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	category: { type: String, required: true },
	importance: { type: String, required: true },
	author: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
	date: { type: String, required: true },
	active: { type: Boolean, required: true },
});

export const Task = mongoose.models.Task || mongoose.model('Task', TaskSchema);
