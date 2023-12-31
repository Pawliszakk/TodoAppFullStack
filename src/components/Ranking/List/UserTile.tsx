import { useContext } from 'react';
import Image from 'next/image';
import { User } from '@/types/app';
import ThemeContext from '@/context/theme-context';

import classes from './UserTile.module.scss';
import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
import { GiPodiumWinner, GiPodiumSecond, GiPodiumThird } from 'react-icons/gi';

const UserTile: React.FC<User & { index: number }> = ({
	name,
	date,
	points,
	avatar,
	index,
}) => {
	const { isDark } = useContext(ThemeContext);

	const icons = [
		<GiPodiumWinner key="Winner" data-testid="winner-test" />,
		<GiPodiumSecond key="Second" data-testid="second-test" />,
		<GiPodiumThird key="Third" data-testid="third-test" />,
	];
	const currentIcon = icons[index];
	let avatarImage;
	if (!isDark) {
		avatarImage = avatar.replace('.jpg', '-dark.jpg');
	} else {
		avatarImage = avatar;
	}

	return (
		<SlideAnimation
			className={`${classes.user} ${isDark ? classes.light : null} `}
			list
			dataCy="user-tile"
		>
			{' '}
			<div className={classes.image}>
				<Image
					src={avatarImage}
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
