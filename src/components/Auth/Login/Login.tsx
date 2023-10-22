import FormBox from '@/components/UI/Form/FormBox';
import classes from './Login.module.scss';
import { useFormik } from 'formik';
import Button from '@/components/UI/Buttons/Button';
import Input from '@/components/UI/Form/Input';
import { LoginSchema } from '../../../utils/validation';

interface LoginProps {
	onFormChange: (number: number) => void;
}

const Login: React.FC<LoginProps> = ({ onFormChange }) => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: LoginSchema,

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

			<p>
				No account? <span onClick={() => onFormChange(1)}>create one</span>
			</p>
		</FormBox>
	);
};

export default Login;
