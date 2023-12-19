import { useContext, useState } from 'react';
import Image from 'next/image';
import ThemeContext from '@/context/theme-context';

import classes from './Auth.module.scss';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import Start from './Start/Start';
import SlideAnimation from '../UI/Animations/SlideAnimation';

const Auth = () => {
	const [currentForm, setCurrentForm] = useState(0);

	const { isDark } = useContext(ThemeContext);

	const setFormHandler = (number: number) => setCurrentForm(number);

	const imageSrc = isDark
		? '/assets/ilustrations/login.jpg'
		: '/assets/ilustrations/login-dark.jpg';

	return (
		<section className={classes.auth}>
			{' '}
			<div className={classes.box}>
				<SlideAnimation>
					{currentForm === 0 && <Start onFormChange={setFormHandler} />}
					{currentForm === 1 && <Signup onFormChange={setFormHandler} />}
					{currentForm === 2 && <Login onFormChange={setFormHandler} />}
				</SlideAnimation>
				<SlideAnimation left className={classes.image}>
					<Image
						src={imageSrc}
						alt="Ilustration of woman and man probably logging into account on phone form background"
						width={550}
						height={550}
						priority={true}
					/>
				</SlideAnimation>
			</div>
		</section>
	);
};

export default Auth;
