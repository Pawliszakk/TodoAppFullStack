import FormBox from '@/components/UI/Form/FormBox';
import classes from './Signup.module.scss';
import Button from '@/components/UI/Buttons/Button';
import { useFormik } from 'formik';
import { SignupSchema } from '../../../utils/validation';
import Input from '@/components/UI/Form/Input';
import { motion } from 'framer-motion';
import { useState } from 'react';

type Avatar = {
	src: string;
	gender: 'Woman' | 'Man';
};

const avatarArray: Avatar[] = [
	{ src: '/assets/avatars/avatar1', gender: 'Man' },
	{ src: '/assets/avatars/avatar2', gender: 'Woman' },
	{ src: '/assets/avatars/avatar3', gender: 'Woman' },
	{ src: '/assets/avatars/avatar4', gender: 'Man' },
	{ src: '/assets/avatars/avatar5', gender: 'Woman' },
	{ src: '/assets/avatars/avatar6', gender: 'Woman' },
	{ src: '/assets/avatars/avatar7', gender: 'Man' },
	{ src: '/assets/avatars/avatar8', gender: 'Woman' },
	{ src: '/assets/avatars/avatar9', gender: 'Woman' },
	{ src: '/assets/avatars/avatar10', gender: 'Woman' },
	{ src: '/assets/avatars/avatar11', gender: 'Man' },
	{ src: '/assets/avatars/avatar12', gender: 'Woman' },
	{ src: '/assets/avatars/avatar13', gender: 'Man' },
	{ src: '/assets/avatars/avatar14', gender: 'Man' },
	{ src: '/assets/avatars/avatar15', gender: 'Man' },
];

interface LoginProps {
	onFormChange: (number: number) => void;
}

const Signup: React.FC<LoginProps> = ({ onFormChange }) => {
	const [isMen, setIsMen] = useState(false);

	const avatars = avatarArray.filter(
		(a) => a.gender === (isMen ? 'Man' : 'Woman')
	);

	const formik = useFormik({
		initialValues: { name: '', email: '', password: '' },
		validationSchema: SignupSchema,
		onSubmit: (values) => console.log(values),
	});

	return (
		<FormBox>
			<h2>Sign Up</h2>
			<p>Create an account for free</p>

			<form onSubmit={formik.handleSubmit}>
				<Input
					label="Username"
					name="name"
					type="text"
					placeholder="Please enter your name..."
					error={formik.errors.name}
					touched={formik.touched.name}
					field={formik.getFieldProps('name')}
				/>
				<Input
					label="E-mail"
					name="email"
					type="email"
					placeholder="Please enter your email..."
					error={formik.errors.email}
					touched={formik.touched.email}
					field={formik.getFieldProps('email')}
				/>
				<Input
					label="Password"
					name="password"
					type="password"
					placeholder="Please enter your password..."
					error={formik.errors.password}
					touched={formik.touched.password}
					field={formik.getFieldProps('password')}
				/>
				<div className={classes.avatar}>
					<p>Choose your avatar</p>
					<div className={classes.buttons}>
						<button type="button" onClick={() => setIsMen(true)}>
							Men
						</button>
						<button type="button" onClick={() => setIsMen(false)}>
							Women
						</button>
					</div>
					<div className={classes.avatars}>
						<p>{isMen ? <p>Men</p> : <p>Women</p>}</p>
					</div>
				</div>
				<Button type="submit">Sign Up</Button>
			</form>

			<p>
				Already a user? <span onClick={() => onFormChange(2)}>Login</span>
			</p>
		</FormBox>
	);
};

export default Signup;
