import { useContext } from 'react';
import Image from 'next/image';
import ThemeContext from '@/context/theme-context';

import classes from './Start.module.scss';
import Button from '@/components/UI/Buttons/Button';
import FormBox from '@/components/UI/Form/FormBox';
import SectionTitle from '@/components/UI/Section/SectionTitle';

interface StartProps {
	onFormChange: (number: number) => void;
}

const Start: React.FC<StartProps> = ({ onFormChange }) => {
	const { isDark } = useContext(ThemeContext);

	const imageSrc = isDark
		? '/assets/ilustrations/auth.jpg'
		: '/assets/ilustrations/auth-dark.jpg';

	return (
		<FormBox>
			{' '}
			<SectionTitle>Hello There!</SectionTitle>
			<p>
				Creating an account or logging in will unlock the full capabilities of
				this application
			</p>
			<div className={classes.image}>
				<Image
					src={imageSrc}
					alt="woman authenticating, on phone background"
					width={300}
					height={300}
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
