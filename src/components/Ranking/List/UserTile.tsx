import Image from 'next/image';
import classes from './UserTile.module.scss';
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
	const icons = [
		<GiPodiumWinner key="winner" />,
		<GiPodiumSecond key="Second" />,
		<GiPodiumThird key="Third" />,
	];
	const currentIcon = icons[index];

	return (
		<SlideAnimation className={classes.user} list>
			{' '}
			<div className={classes.image}>
				<Image
					src={avatar}
					alt={`Profile Avatar of ${name}`}
					width={238}
					height={238}
				/>
			</div>
			<div className={classes.content}>
				<h3>
					{name} {currentIcon}
				</h3>
				<p>Points: {points}</p>
				<p className={classes.date}>On TaskPro since: {date}</p>
			</div>
		</SlideAnimation>
	);
};

export default UserTile;
