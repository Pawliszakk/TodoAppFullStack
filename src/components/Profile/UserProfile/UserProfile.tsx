import { useState } from 'react';
import { motion } from 'framer-motion';
import { User } from '@/types/app';
import Image from 'next/image';

import classes from './UserProfile.module.scss';
import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
import { PiHandWavingLight } from 'react-icons/pi';
import { AiOutlineCheckCircle, AiOutlineClose } from 'react-icons/ai';
import { BsCalendarDay } from 'react-icons/bs';
import { FaEdit, FaUserLock } from 'react-icons/fa';
import EditProfile from './EditProfile/EditProfile';
import Backdrop from '@/components/UI/Backdrop/Backdrop';
import ChangePassword from './ChangePassword/ChangePassword';
import DeleteAccount from './DeleteAccount/DeleteAccount';
import ProfileIcon from './ProfileIcon/ProfileIcon';

const UserProfile: React.FC<User> = (props) => {
	const [name, setName] = useState(props.name);
	const [avatar, setAvatar] = useState(props.avatar);
	const [isEditForm, setIsEditForm] = useState(false);
	const [isPasswordForm, setIsPasswordForm] = useState(false);
	const [isDeleteForm, setIsDeleteForm] = useState(false);

	const showEditHandler = () => setIsEditForm(true);
	const showPasswordHandler = () => setIsPasswordForm(true);
	const showDeleteHandler = () => setIsDeleteForm(true);

	const hideEditHandler = () => setIsEditForm(false);
	const hidePasswordHandler = () => setIsPasswordForm(false);
	const hideDeleteHandler = () => setIsDeleteForm(false);

	const changeSettingsHandler = (name: string, avatar: string) => {
		setName(name);
		setAvatar(avatar);
		hideEditHandler();
	};

	return (
		<section className={classes.userProfile}>
			<SlideAnimation className={classes.user}>
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

					<ProfileIcon edit onClick={showEditHandler} />
					<ProfileIcon password onClick={showPasswordHandler} />
					<ProfileIcon delete onClick={showDeleteHandler} />
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
			{isDeleteForm && (
				<Backdrop onClose={hideDeleteHandler} isVisible={isDeleteForm}>
					<DeleteAccount />
				</Backdrop>
			)}
		</section>
	);
};

export default UserProfile;
