import { useState } from 'react';
import { Avatars } from '@/data/data';
import classes from './AvatarsComponent.module.scss';
import Image from 'next/image';

interface AvatarsProps {
	onAvatarChange: (avatar: string) => void;
	currentAvatar: string;
}

const AvatarsComponent: React.FC<AvatarsProps> = ({
	onAvatarChange,
	currentAvatar,
}) => {
	const [isMen, setIsMen] = useState(false);

	const menAvatarsHandler = () => {
		setIsMen(true);
		onAvatarChange('/assets/avatars/avatar1.jpg');
	};
	const womenAvatarsHandler = () => {
		setIsMen(false);
		onAvatarChange('/assets/avatars/avatar2.jpg');
	};

	const currentAvatarsByGender = Avatars.filter(
		(a) => a.gender === (isMen ? 'Man' : 'Woman')
	);
	return (
		<div className={classes.avatar}>
			<p>Choose your avatar</p>
			<div className={classes.buttons}>
				<button
					type="button"
					onClick={menAvatarsHandler}
					className={isMen ? classes.active : undefined}
				>
					Men
				</button>
				<button
					type="button"
					onClick={womenAvatarsHandler}
					className={!isMen ? classes.active : undefined}
				>
					Women
				</button>
			</div>
			<div>
				{currentAvatarsByGender.map((a, i) => (
					<div
						key={i}
						className={`${classes.tile} ${
							a.src === currentAvatar ? classes.active : null
						}`}
						onClick={() => onAvatarChange(a.src)}
					>
						<Image src={a.src} alt="Avatar of a user" width={60} height={60} />
					</div>
				))}
			</div>
		</div>
	);
};

export default AvatarsComponent;
