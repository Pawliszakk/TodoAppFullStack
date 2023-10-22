import FormBox from '@/components/UI/Form/FormBox';
import classes from './Login.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@/components/UI/Buttons/Button';
import Input from '@/components/UI/Form/Input';

const Login = () => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email('Invalid email address')
				.required('Please enter your email address'),
			password: Yup.string()
				.min(8, 'Incorrect password')
				.max(20, 'Incorrect password')
				.required('Please enter your password'),
		}),

		onSubmit: (values) => console.log(values),
	});

	return (
		<FormBox>
			<h2>Login</h2>
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
				<Button type="submit"> Login</Button>
			</form>

			<p>No account? Create one</p>
		</FormBox>
	);
};

export default Login;
