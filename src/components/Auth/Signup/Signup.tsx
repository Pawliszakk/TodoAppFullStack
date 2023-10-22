import FormBox from '@/components/UI/Form/FormBox';
import classes from './Signup.module.scss';
import Button from '@/components/UI/Buttons/Button';

interface LoginProps {
	onFormChange: (number: number) => void;
}

const Signup: React.FC<LoginProps> = ({ onFormChange }) => {
	return (
		<FormBox>
			<h2>Sign Up</h2>
			<p>Create an account for free</p>

			<Button type="submit">Sign Up</Button>

			<p>
				Already a user? <span onClick={() => onFormChange(2)}>Login</span>
			</p>
		</FormBox>
	);
};

export default Signup;
