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
