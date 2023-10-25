import { Avatars } from '@/data/data';
import classes from './AvatarsComponent.module.scss';
import Image from 'next/image';

interface AvatarsProps {
	onMen: () => void;
	onWomen: () => void;
	isMen: boolean;
	onAvatarChange: (avatar: string) => void;
	currentAvatar: string;
}

const AvatarsComponent: React.FC<AvatarsProps> = ({
	onMen,
	onWomen,
	isMen,
	onAvatarChange,
	currentAvatar,
}) => {
	const currentAvatarsByGender = Avatars.filter(
		(a) => a.gender === (isMen ? 'Man' : 'Woman')
	);
	return (
		<div className={classes.avatar}>
			<p>Choose your avatar</p>
			<div className={classes.buttons}>
				<button
					type="button"
					onClick={onMen}
					className={isMen ? classes.active : undefined}
				>
					Men
				</button>
				<button
					type="button"
					onClick={onWomen}
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
