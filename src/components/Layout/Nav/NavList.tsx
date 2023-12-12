import { useContext } from 'react';
import { AuthContext } from '@/context/auth-context';
import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/UI/Buttons/Button';
import classes from './NavList.module.scss';

const NavList = () => {
	const authCtx = useContext(AuthContext);

	const { userAvatar, userId, isLoggedIn, logout, token } = authCtx;

	const avatarImage = isLoggedIn
		? `${userAvatar}`
		: '/assets/avatars/avatarLogout.jpg';

	const avatarImageHref = isLoggedIn
		? `/profile/${userId}/?token=${token}`
		: '/login';

	return (
		<>
			{' '}
			<ul className={classes.list}>
				<li>
					{isLoggedIn ? (
						<Button className={classes.btn} onClick={logout}>
							Logout
						</Button>
					) : (
						<Button className={classes.btn} link href="/login">
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
					<Link href={avatarImageHref}>
						<Image
							src={avatarImage}
							alt="An avatar of a user"
							width={40}
							height={40}
						/>
						<span>Check Profile</span>
					</Link>
				</li>
			</ul>
		</>
	);
};

export default NavList;
