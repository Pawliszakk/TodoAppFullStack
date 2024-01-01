import { useState, useContext } from 'react';
import { useFormik } from 'formik';
import { LoginSchema } from '../../../utils/validation';
import { AuthContext } from '@/context/auth-context';
import { Toaster, toast } from 'sonner';

import FormBox from '@/components/UI/Form/FormBox';
import Button from '@/components/UI/Buttons/Button';
import Input from '@/components/UI/Form/Input';
import SectionTitle from '@/components/UI/Section/SectionTitle';
import Spinner from '@/components/UI/LoadingSpinner/Spinner';

interface LoginProps {
	onFormChange: (number: number) => void;
}

const Login: React.FC<LoginProps> = ({ onFormChange }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [reqMessage, setReqMessage] = useState('');

	const authCtx = useContext(AuthContext);

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
			const { message, userId, token, userAvatar } = await res.json();
			if (!res.ok) {
				setIsLoading(false);
				toast.error(message || 'Cannot log you in, please try again later');

				setReqMessage(message || 'Cannot log you in, please try again later');
			} else {
				setIsLoading(false);
				setReqMessage(message);
				authCtx.login(userId, token, userAvatar);
				toast.success('You have been logged in successfully');
			}
		},
	});

	const { touched, errors, getFieldProps, handleSubmit } = formik;

	const isError =
		(touched.email && errors.email) || (touched.password && errors.password);
	return (
		<FormBox>
			<SectionTitle dataCy='login-title'>Login</SectionTitle>
			<Toaster position="top-center" richColors />

			<p>Welcome back! Login with your credentials</p>

			<form onSubmit={handleSubmit} data-testid="login-form">
				<Input
					label="E-mail"
					name="email"
					type="email"
					placeholder="Please enter your email..."
					error={errors.email}
					touched={touched.email}
					field={getFieldProps('email')}
					testId="email-input"
					dataCy="email-input"
				/>

				<Input
					label="Password"
					name="password"
					type="password"
					placeholder="Please enter your password..."
					error={errors.password}
					touched={touched.password}
					field={getFieldProps('password')}
					testId="password-input"
					dataCy="password-input"
				/>
				{isLoading ? (
					<Spinner />
				) : (
					<Button type="submit" disabled={!!isError} dataCy="submit-login">
						Login
					</Button>
				)}
				{reqMessage && <p>{reqMessage}</p>}
			</form>

			<p data-testid="create-account">
				No account?{' '}
				<span
					data-testid="create-span"
					data-cy="create-span"
					onClick={() => onFormChange(1)}
				>
					create one
				</span>
			</p>
		</FormBox>
	);
};

export default Login;
