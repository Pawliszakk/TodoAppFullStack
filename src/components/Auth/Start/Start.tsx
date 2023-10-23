import Image from 'next/image';
import classes from './Start.module.scss';
import Button from '@/components/UI/Buttons/Button';
import FormBox from '@/components/UI/Form/FormBox';

interface StartProps {
	onFormChange: (number: number) => void;
}

const Start: React.FC<StartProps> = ({ onFormChange }) => {
	return (
		<FormBox>
			{' '}
			<h2>Hello There!</h2>
			<p>
				Creating an account or logging in will unlock the full capabilities of
				this application
			</p>
			<div className={classes.image}>
				<Image
					src="/assets/ilustrations/auth.jpg"
					alt="woman authenticating, on phone background"
					layout="fill"
				/>{' '}
			</div>
			<div className={classes.buttons}>
				<Button className={classes.btn} onClick={() => onFormChange(2)}>
					Login
				</Button>
				<Button className={classes.btn} onClick={() => onFormChange(1)}>
					SignUp
				</Button>
			</div>
		</FormBox>
	);
};

export default Start;