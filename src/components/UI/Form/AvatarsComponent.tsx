import { useContext, useState } from 'react';
import Image from 'next/image';
import ThemeContext from '@/context/theme-context';
import { getAvatars } from '@/data/data';

import classes from './AvatarsComponent.module.scss';

interface AvatarsProps {
	onAvatarChange: (avatar: string) => void;
	currentAvatar: string;
}

const AvatarsComponent: React.FC<AvatarsProps> = ({
	onAvatarChange,
	currentAvatar,
}) => {
	const [isMen, setIsMen] = useState(false);

	const { isDark } = useContext(ThemeContext);

	const menAvatarsHandler = () => {
		setIsMen(true);
		onAvatarChange('/assets/avatars/avatar1.jpg');
	};
	const womenAvatarsHandler = () => {
		setIsMen(false);
		onAvatarChange('/assets/avatars/avatar2.jpg');
	};
	const Avatars = getAvatars(isDark);

	const currentAvatarsByGender = Avatars.filter(
		(a) => a.gender === (isMen ? 'Man' : 'Woman')
	);

	const handleAvatarChange = (source: string) => {
		let avatarSrc = !isDark ? source.replace('-dark.jpg', '.jpg') : source;

		onAvatarChange(avatarSrc);
	};

	return (
		<div className={classes.avatar}>
			<p>Choose your avatar</p>
			<div className={classes.buttons}>
				<button
					type="button"
					onClick={menAvatarsHandler}
					className={isMen ? classes.active : undefined}
					data-cy="men-button"
				>
					Men
				</button>
				<button
					type="button"
					onClick={womenAvatarsHandler}
					className={!isMen ? classes.active : undefined}
					data-cy="women-button"
				>
					Women
				</button>
			</div>
			<div>
				{currentAvatarsByGender.map((a, i) => (
					<div
						key={i}
						className={`${classes.tile} ${
							a.src.replace('-dark.jpg', '.jpg') === currentAvatar
								? classes.active
								: null
						}`}
						onClick={() => handleAvatarChange(a.src)}
						data-cy={`avatar-${i}`}
					>
						<Image src={a.src} alt="Avatar of a user" width={60} height={60} />
					</div>
				))}
			</div>
		</div>
	);
};

export default AvatarsComponent;
