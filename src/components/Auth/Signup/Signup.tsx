import FormBox from '@/components/UI/Form/FormBox';
import classes from './Signup.module.scss';
import Button from '@/components/UI/Buttons/Button';
const Signup = () => {
	return (
		<FormBox>
			<h2>Sign Up</h2>
			<p>Create an account for free</p>

			<Button type="submit">Sign Up</Button>

			<p>Already a user? Login</p>
		</FormBox>
	);
};

export default Signup;
