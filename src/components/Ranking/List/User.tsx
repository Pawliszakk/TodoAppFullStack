import Image from 'next/image';
import classes from './User.module.scss';
import { User } from '@/types/app';
import SlideAnimation from '@/components/UI/Animations/SlideAnimation';

const UserTile: React.FC<User> = ({ name, date, points, avatar }) => {
	return (
		<SlideAnimation className={classes.user} list>
			{' '}
			<div className={classes.image}>
				<Image
					src={avatar}
					alt="ZDJECIE USERA O NAZWIE : <NAZWA USERA>"
					layout="fill"
				/>
			</div>
			<div className={classes.content}>
				<h3>{name}</h3>
				<p>Points: {points}</p>
				<p className={classes.date}>On Taskify since: {date}</p>
			</div>
		</SlideAnimation>
	);
};

export default UserTile;
