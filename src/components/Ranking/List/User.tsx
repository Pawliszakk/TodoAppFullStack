import Image from 'next/image';
import classes from './User.module.scss';
import { User } from '@/types/app';
import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
import { GiPodiumWinner, GiPodiumSecond, GiPodiumThird } from 'react-icons/gi';

const UserTile: React.FC<User & { index: number }> = ({
	name,
	date,
	points,
	avatar,
	index,
}) => {
	const icons = [<GiPodiumWinner />, <GiPodiumSecond />, <GiPodiumThird />];
	const currentIcon = icons[index];

	return (
		<SlideAnimation key={index} className={classes.user} list>
			{' '}
			<div className={classes.image}>
				<Image src={avatar} alt={`Profile Avatar of ${name}`} layout="fill" />
			</div>
			<div className={classes.content}>
				<h3>
					{name} {currentIcon}
				</h3>
				<p>Points: {points}</p>
				<p className={classes.date}>On Taskify since: {date}</p>
			</div>
		</SlideAnimation>
	);
};

export default UserTile;
