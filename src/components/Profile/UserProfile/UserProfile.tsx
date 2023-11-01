import { useState } from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';
import classes from './UserProfile.module.scss';
import { User } from '@/types/app';
import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
import { PiHandWavingLight } from 'react-icons/pi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsCalendarDay } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import EditProfile from './EditProfile/EditProfile';

const UserProfile: React.FC<User> = ({ name, date, points, avatar }) => {
	const [isEditForm, setIsEditForm] = useState(false);

	const editFormHandler = () => setIsEditForm(true);

	
	return (
		<section className={classes.userProfile}>
			<SlideAnimation className={classes.user}>
				{' '}
				<h2>
					Welcome {name}! <PiHandWavingLight />
				</h2>
				<div className={classes.image}>
					<Image
						src={avatar}
						alt={`Avatar photo of ${name}`}
						width={300}
						height={300}
						priority
					/>
					<motion.div
						whileTap={{ scale: 0.5 }}
						whileHover={{ scale: 0.9 }}
						className={classes.edit}
						onClick={editFormHandler}
					>
						<FaEdit />
					</motion.div>
				</div>
				<p>
					Task Points: {points} <AiOutlineCheckCircle />
				</p>
				<p className={classes.date}>
					On TaskPro since: {date} <BsCalendarDay />
				</p>
			</SlideAnimation>
			{isEditForm && <EditProfile />}
		</section>
	);
};

export default UserProfile;
