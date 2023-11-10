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
		.max(20, 'Your Password must have a maximum of 20 characters')
		.matches(
			/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).*$/,
			'Your Password must contain at least one uppercase letter, one number, and one special character'
		)
		.required('Please enter your password'),
});

export const AddingTaskSchema = Yup.object({
	title: Yup.string()
		.min(5, 'Your Task Title must have minimum 5 characters')
		.max(30, 'Your name must have maximum 30 characters')
		.required('Please enter Title'),
	description: Yup.string()
		.min(10, 'Your Task description must have minimum 10 characters')
		.max(50, 'Your name must have maximum 50 characters')
		.required('Please enter a description'),
	category: Yup.string()
		.required('Choose a category of your new Task')
		.notOneOf([''], 'Please select a category'),
	importance: Yup.string()
		.required('Choose importance of your new Task')
		.notOneOf([''], 'Please select level of importance'),
});

export const ChangeSettingsSchema = Yup.object({
	name: Yup.string()
		.min(5, 'Your name must have minimum 5 characters')
		.max(20, 'Your name must have maximum 20 characters')
		.required('Please enter your name'),
	avatar: Yup.string().required('Please choose your avatar'),
});

export const ChangePasswordSchema = Yup.object({
	newPassword: Yup.string()
		.min(8, 'Your Password must have minimum 8 characters')
		.max(20, 'Your Password must have a maximum of 20 characters')
		.matches(
			/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).*$/,
			'Your Password must contain at least one uppercase letter, one number, and one special character'
		)
		.notOneOf(
			[Yup.ref('oldPassword'), null],
			'New password cannot be the same as the old password'
		)
		.required('Please enter your password'),
	checkNewPassword: Yup.string()
		.oneOf(
			[Yup.ref('newPassword'), null],
			'Password does not match new password'
		)
		.required('Please enter your password'),
});

export const deleteAccountValidation = Yup.object({
	password: Yup.string()
		.min(8, 'Your Password must have minimum 8 characters')
		.max(20, 'Your Password must have a maximum of 20 characters')
		.matches(
			/^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).*$/,
			'Your Password must contain at least one uppercase letter, one number, and one special character'
		)
		.required('Please enter your password'),
});

export const checkAvatarValidity = (avatar) => {
	let isAvatarValid;
	for (let i = 1; i <= 15; i++) {
		const expectedValue = `/assets/avatars/avatar${i}.jpg`;
		if (avatar === expectedValue) {
			isAvatarValid = true;
			break;
		}
	}
	return isAvatarValid;
};
