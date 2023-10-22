import Image from 'next/image';
import classes from './Auth.module.scss';
import { useState } from 'react';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import Start from './Start/Start';

const Auth = () => {
	const [currentForm, setCurrentForm] = useState(0);

	const setFormHandler = (number: number) => setCurrentForm(number);

	return (
		<section className={classes.auth}>
			{' '}
			<div className={classes.box}>
				{currentForm === 0 && <Start onFormChange={setFormHandler} />}
				{currentForm === 1 && <Signup onFormChange={setFormHandler} />}
				{currentForm === 2 && <Login onFormChange={setFormHandler} />}
				<div className={classes.image}>
					<Image
						src="/assets/ilustrations/login.JPG"
						alt="Ilustration of woman and man probably logging into account on phone form background"
						layout="fill"
					/>
				</div>
			</div>
		</section>
	);
};

export default Auth;
