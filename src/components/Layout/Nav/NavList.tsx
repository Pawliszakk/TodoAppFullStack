import { useContext } from 'react';
import { AuthContext } from '@/context/auth-context';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ThemeContext from '@/context/theme-context';

import Button from '@/components/UI/Buttons/Button';
import classes from './NavList.module.scss';

const NavList = () => {
	const { userAvatar, userId, isLoggedIn, logout, token } =
		useContext(AuthContext);
	const { changeTheme, isDark } = useContext(ThemeContext);

	let avatarImage = isLoggedIn
		? `${userAvatar}`
		: '/assets/avatars/avatarLogout.jpg';

	const avatarImageHref = isLoggedIn
		? `/profile/${userId}/?token=${token}`
		: '/login';

	if (!isDark) {
		avatarImage = avatarImage.replace('.jpg', '-dark.jpg');
	}

	return (
		<ul className={classes.list}>
			<li>
				{isLoggedIn ? (
					<Button
						className={classes.btn}
						onClick={logout}
						dataCy="logout-button"
					>
						Logout
					</Button>
				) : (
					<Button
						className={classes.btn}
						link
						href="/login"
						dataCy="login-button"
					>
						Login
					</Button>
				)}
			</li>
			<li>
				<Button className={classes.btn} link href="/ranking">
					Top 10
				</Button>
			</li>
			<li>
				<motion.div
					whileTap={{ scale: 0.7 }}
					whileHover={{ scale: 1.05 }}
					className={classes.themeBox}
					onClick={changeTheme}
				></motion.div>
			</li>
			<li>
				<Link href={avatarImageHref}>
					<Image
						src={avatarImage}
						alt="An avatar of a user"
						width={40}
						height={40}
						data-cy="user-avatar"
					/>
					<span>Check Profile</span>
				</Link>
			</li>
		</ul>
	);
};

export default NavList;
