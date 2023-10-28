import { useState, useContext } from 'react';
import { useFormik } from 'formik';
import { LoginSchema } from '../../../utils/validation';

import FormBox from '@/components/UI/Form/FormBox';
import Button from '@/components/UI/Buttons/Button';
import Input from '@/components/UI/Form/Input';
import SectionTitle from '@/components/UI/Section/SectionTitle';
import Spinner from '@/components/UI/LoadingSpinner/Spinner';
import { AuthContext } from '@/context/auth-context';
import { useRouter } from 'next/router';

interface LoginProps {
	onFormChange: (number: number) => void;
}

const Login: React.FC<LoginProps> = ({ onFormChange }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [reqMessage, setReqMessage] = useState('');

	const authCtx = useContext(AuthContext);

	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: LoginSchema,

		onSubmit: async (values) => {
			setIsLoading(true);
			const loginBody = values;

			const res = await fetch('/api/login', {
				method: 'POST',
				body: JSON.stringify(loginBody),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const resData = await res.json();

			if (!res.ok) {
				setIsLoading(false);
				setReqMessage(
					resData.message || 'Cannot log you in, please try again later'
				);
			} else {
			}
			setIsLoading(false);
			setReqMessage(resData.message);
			authCtx.login(resData.userId, resData.token, resData.userAvatar);
			router.push('/');
		},
	});

	return (
		<FormBox>
			<SectionTitle>Login</SectionTitle>
			<p>Welcome back! Login with your credentials</p>

			<form onSubmit={formik.handleSubmit}>
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
				{isLoading ? <Spinner /> : <Button type="submit"> Login</Button>}
				{reqMessage && <p>{reqMessage}</p>}
			</form>

			<p>
				No account? <span onClick={() => onFormChange(1)}>create one</span>
			</p>
		</FormBox>
	);
};

export default Login;
