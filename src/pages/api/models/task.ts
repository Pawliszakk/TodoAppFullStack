import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	category: { type: String, required: true },
	importance: { type: String, required: true },
	id: { type: String, required: true },
	author: { type: String, required: true },
	date: { type: String, required: true },
	active: { type: Boolean, required: true },
});

export const Task = mongoose.models.Task || mongoose.model('Task', TaskSchema);
