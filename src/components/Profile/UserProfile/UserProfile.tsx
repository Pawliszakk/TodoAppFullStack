import Image from 'next/image';
import classes from './UserProfile.module.scss';
import { User } from '@/types/app';

const UserProfile: React.FC<User> = ({ name, date, points, avatar }) => {
	return (
		<section className={classes.userProfile}>
			<div className={classes.user}>
				<h2>Welcome {name}!</h2>
				<div className={classes.image}>
					<Image src={avatar} alt={`Avatar photo of ${name}`} layout="fill" />
				</div>
				<p>Task Points: {points}</p>
				<p className={classes.date}>On Taskify since: {date}</p>
			</div>
		</section>
	);
};

export default UserProfile;