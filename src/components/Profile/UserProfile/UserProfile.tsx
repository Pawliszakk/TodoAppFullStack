import { useContext, useState } from 'react';
import { User } from '@/types/app';
import Image from 'next/image';
import ThemeContext from '@/context/theme-context';

import classes from './UserProfile.module.scss';
import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
import { PiHandWavingLight } from 'react-icons/pi';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BsCalendarDay } from 'react-icons/bs';
import EditProfile from './EditProfile/EditProfile';
import Backdrop from '@/components/UI/Backdrop/Backdrop';
import ChangePassword from './ChangePassword/ChangePassword';
import DeleteAccount from './DeleteAccount/DeleteAccount';
import ProfileIcon from './ProfileIcon/ProfileIcon';

const UserProfile: React.FC<User> = (props) => {
	const [name, setName] = useState(props.name);
	const [avatar, setAvatar] = useState(props.avatar);

	const { isDark } = useContext(ThemeContext);

	const [currentForm, setCurrentForm] = useState<
		null | 'edit' | 'delete' | 'password'
	>(null);

	const closeFormHandler = () => setCurrentForm(null);

	const changeSettingsHandler = (name: string, avatar: string) => {
		setName(name);
		setAvatar(avatar);
	};

	const isEditForm = currentForm === 'edit';
	const isPasswordForm = currentForm === 'password';
	const isDeleteForm = currentForm === 'delete';

	let avatarImage;
	if (!isDark) {
		avatarImage = avatar.replace('.jpg', '-dark.jpg');
	} else {
		avatarImage = avatar;
	}

	return (
		<section
			className={`${classes.userProfile} ${isDark ? classes.light : null}`}
		>
			<SlideAnimation className={classes.user}>
				<h2 data-cy="username-heading">
					Welcome {name}! <PiHandWavingLight />
				</h2>
				<div className={classes.image}>
					<Image
						src={avatarImage}
						alt={`Avatar photo of ${name}`}
						width={300}
						height={300}
						priority
					/>

					<ProfileIcon
						edit
						onClick={() => setCurrentForm('edit')}
						dataCy="edit-button"
					/>
					<ProfileIcon
						password
						onClick={() => setCurrentForm('password')}
						dataCy="password-button"
					/>
					<ProfileIcon
						delete
						onClick={() => setCurrentForm('delete')}
						dataCy="delete-button"
					/>
				</div>
				<p data-cy="task-points">
					Task Points: {props.points} <AiOutlineCheckCircle />
				</p>
				<p className={classes.date}>
					On TaskPro since: {props.date} <BsCalendarDay />
				</p>
			</SlideAnimation>
			{isEditForm && (
				<Backdrop onClose={closeFormHandler} isVisible={isEditForm}>
					<EditProfile
						onEdit={changeSettingsHandler}
						onClose={closeFormHandler}
						name={name}
						avatar={avatar}
						data-testid="edit-form"
					/>
				</Backdrop>
			)}
			{isPasswordForm && (
				<Backdrop onClose={closeFormHandler} isVisible={isPasswordForm}>
					<ChangePassword onClose={closeFormHandler} />
				</Backdrop>
			)}
			{isDeleteForm && (
				<Backdrop onClose={closeFormHandler} isVisible={isDeleteForm}>
					<DeleteAccount onClose={closeFormHandler} />
				</Backdrop>
			)}
		</section>
	);
};

export default UserProfile;
