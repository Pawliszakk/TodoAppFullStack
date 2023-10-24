import Image from 'next/image';
import classes from './User.module.scss';

interface UserProps {
	avatar: string;
	name: string;
	date: string;
	points: number;
}

const User = () => {
	return (
		<li className={classes.user}>
			<div className={classes.image}>
				<Image
					src="/assets/avatars/avatar1.jpg"
					alt="ZDJECIE USERA O NAZWIE : <NAZWA USERA>"
					layout="fill"
				/>
			</div>
			<div className={classes.content}>
				<h3>USER 1</h3>
				<p>Points: 246</p>
				<p className={classes.date}>On Taskify since: October 2023</p>
			</div>
		</li>
	);
};

export default User;
