import * as Yup from 'yup';

export const LoginSchema = Yup.object({
	email: Yup.string()
		.email('Invalid email address')
		.required('Please enter your email address'),
	password: Yup.string()
		.min(8, 'Incorrect password')
		.max(20, 'Incorrect password')
		.required('Please enter your password'),
});
export const SignupSchema = Yup.object({
	name: Yup.string()
		.min(5, 'Your name must have minimum 5 characters')
		.max(20, 'Your name must have maximum 20 characters')
		.required('Please enter your name'),
	email: Yup.string()
		.email('Invalid email address')
		.required('Please enter your email address'),
	password: Yup.string()
		.min(8, 'Your Password must have minimum 8 characters')
		.max(20, 'Your Password must have maximum of 20 characters')
		.required('Please enter your password'),
});

export const AddingTaskSchema = Yup.object({
	title: Yup.string()
		.min(5, 'Your Task Title must have minimum 5 characters')
		.max(30, 'Your name must have maximum 30 characters'),
	description: Yup.string()
		.min(10, 'Your Task description must have minimum 10 characters')
		.max(50, 'Your name must have maximum 50 characters'),
});
