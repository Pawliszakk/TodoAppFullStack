import classes from './Auth.module.scss';
import { useState } from 'react';

const Auth = () => {
	const [currentForm, setCurrentForm] = useState(0);

	return (
		<div className={classes.box}>
			<div className={classes.form}></div>
			<div className={classes.image}>
				<img src="/assets/ilustrations/login.jpg" alt="" />
			</div>
		</div>
	);
};

export default Auth;
