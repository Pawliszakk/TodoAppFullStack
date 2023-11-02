import { useState, useContext } from 'react';
import { useFormik } from 'formik';
import { SignupSchema, checkAvatarValidity } from '../../../utils/validation';

import FormBox from '@/components/UI/Form/FormBox';
import Button from '@/components/UI/Buttons/Button';
import Input from '@/components/UI/Form/Input';
import SectionTitle from '@/components/UI/Section/SectionTitle';
import AvatarsComponent from '../../UI/Form/AvatarsComponent';
import Spinner from '@/components/UI/LoadingSpinner/Spinner';
import { AuthContext } from '@/context/auth-context';
import { useRouter } from 'next/router';

interface LoginProps {
	onFormChange: (number: number) => void;
}

const Signup: React.FC<LoginProps> = ({ onFormChange }) => {
	const [avatar, setAvatar] = useState('/assets/avatars/avatar2.jpg');
	const [isLoading, setIsLoading] = useState(false);
	const [reqMessage, setReqMessage] = useState('');

	const router = useRouter();
	const authCtx = useContext(AuthContext);

	const avatarChangeHandler = (avatar: string) => setAvatar(avatar);

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			avatar: '/assets/avatars/avatar1.jpg',
		},
		validationSchema: SignupSchema,
		onSubmit: async (values) => {
			setIsLoading(true);

			const isAvatarValid = checkAvatarValidity(avatar);

			if (!isAvatarValid) {
				setIsLoading(false);
				setReqMessage('Invalid Data');
				return;
			}
			values.avatar = avatar;

			const res = await fetch('/api/signup', {
				method: 'POST',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const resData = await res.json();

			if (!res.ok) {
				setIsLoading(false);
				setReqMessage(
					resData.message || 'Cannot sign you in, please try again later'
				);
			} else {
				setIsLoading(false);
				setReqMessage(resData.message);
				authCtx.login(resData.userId, resData.token, resData.userAvatar);
				router.push('/');
			}
		},
	});

	return (
		<FormBox>
			<SectionTitle>Sign Up</SectionTitle>
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

				<AvatarsComponent
					onAvatarChange={avatarChangeHandler}
					currentAvatar={avatar}
				/>
				{isLoading ? <Spinner /> : <Button type="submit">Sign Up</Button>}
				{reqMessage && <p>{reqMessage}</p>}
			</form>

			<p>
				Already a user? <span onClick={() => onFormChange(2)}>Login</span>
			</p>
		</FormBox>
	);
};

export default Signup;
