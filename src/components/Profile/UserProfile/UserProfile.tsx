import Image from 'next/image';
import classes from './UserProfile.module.scss';
import { User } from '@/types/app';
import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
import { PiHandWavingLight } from 'react-icons/pi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsCalendarDay } from 'react-icons/bs';

const UserProfile: React.FC<User> = ({ name, date, points, avatar }) => {
	return (
		<section className={classes.userProfile}>
			<SlideAnimation className={classes.user}>
				{' '}
				<h2>
					Welcome {name}! <PiHandWavingLight />
				</h2>
				<div className={classes.image}>
					<Image src={avatar} alt={`Avatar photo of ${name}`} layout="fill" />
				</div>
				<p>
					Task Points: {points} <AiOutlineCheckCircle />
				</p>
				<p className={classes.date}>
					On Taskify since: {date} <BsCalendarDay />
				</p>
			</SlideAnimation>
		</section>
	);
};

export default UserProfile;
