import { useState } from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';
import classes from './UserProfile.module.scss';
import { User } from '@/types/app';
import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
import { PiHandWavingLight } from 'react-icons/pi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsCalendarDay } from 'react-icons/bs';
import { FaEdit, FaUserLock } from 'react-icons/fa';
import EditProfile from './EditProfile/EditProfile';
import Backdrop from '@/components/UI/Backdrop/Backdrop';
import ChangePassword from './ChangePassword/ChangePassword';

const UserProfile: React.FC<User> = (props) => {
	const [name, setName] = useState(props.name);
	const [avatar, setAvatar] = useState(props.avatar);
	const [isEditForm, setIsEditForm] = useState(false);
	const [isPasswordForm, setIsPasswordForm] = useState(false);

	const showEditHandler = () => setIsEditForm(true);
	const hideEditHandler = () => setIsEditForm(false);

	const showPasswordHandler = () => setIsPasswordForm(true);
	const hidePasswordHandler = () => setIsPasswordForm(false);

	const changeSettingsHandler = (name: string, avatar: string) => {
		setName(name);
		setAvatar(avatar);
		hideEditHandler();
	};

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
						className={`${classes.icon} ${classes.edit}`}
						onClick={showEditHandler}
					>
						<FaEdit />
					</motion.div>
					<motion.div
						whileTap={{ scale: 0.5 }}
						whileHover={{ scale: 0.9 }}
						className={`${classes.icon} ${classes.pass}`}
						onClick={showPasswordHandler}
					>
						<FaUserLock />
					</motion.div>
				</div>
				<p>
					Task Points: {props.points} <AiOutlineCheckCircle />
				</p>
				<p className={classes.date}>
					On TaskPro since: {props.date} <BsCalendarDay />
				</p>
			</SlideAnimation>
			{isEditForm && (
				<Backdrop onClose={hideEditHandler} isVisible={isEditForm}>
					<EditProfile
						onEdit={changeSettingsHandler}
						onClose={hideEditHandler}
						name={name}
						avatar={avatar}
					/>
				</Backdrop>
			)}
			{isPasswordForm && (
				<Backdrop onClose={hidePasswordHandler} isVisible={isPasswordForm}>
					<ChangePassword onClose={hidePasswordHandler} />
				</Backdrop>
			)}
		</section>
	);
};

export default UserProfile;
