import Image from 'next/image';
import classes from './User.module.scss';
import { User } from '@/types/app';

const UserTile: React.FC<User> = ({ name, date, points, avatar }) => {
	return (
		<li className={classes.user}>
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
		</li>
	);
};

export default UserTile;
