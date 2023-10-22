import FormBox from '@/components/UI/Form/FormBox';
import classes from './Login.module.scss';
import { useFormik } from 'formik';
import Button from '@/components/UI/Buttons/Button';

const Login = () => {
	const formik = useFormik({
		initialValues: {
			email: '123123',
			password: '',
		},
		onSubmit: (values) => console.log(values),
	});

	console.log(formik.values);
	return (
		<FormBox>
			<h2>Login</h2>
			<p>Welcome back! Login with your credentials</p>

			<form onSubmit={formik.handleSubmit}>
				<label htmlFor="email">E:mail</label>
				<input
					name="email"
					id="email"
					type="text"
					onChange={formik.handleChange}
					value={formik.values.email}
				/>
				<label htmlFor="password">Password</label>
				<input
					name="password"
					id="password"
					type="password"
					onChange={formik.handleChange}
					value={formik.values.password}
				/>
				<Button type="submit"> Login</Button>
			</form>

			<p>No account? Create one</p>
		</FormBox>
	);
};

export default Login;
