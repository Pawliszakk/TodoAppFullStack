import { useState, useContext } from 'react';
import { AuthContext } from '@/context/auth-context';
import { motion } from 'framer-motion';

import { BsPlusCircleFill } from 'react-icons/bs';
import Button from '@/components/UI/Buttons/Button';
import classes from './NavList.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import AddTask from '@/components/AddTaskForm/AddTask';
import Backdrop from '@/components/UI/Backdrop/Backdrop';
import { useRouter } from 'next/router';

const NavList = () => {
	const [isAddTask, setIsAddTask] = useState(false);

	const openAddTaskHandler = () => setIsAddTask(true);
	const closeAddTaskHandler = () => setIsAddTask(false);

	const authCtx = useContext(AuthContext);
	const { userAvatar, userId, isLoggedIn, logout } = authCtx;

	const avatarImage = isLoggedIn
		? `${userAvatar}`
		: '/assets/avatars/avatarLogout.jpg';

	const avatarImageHref = isLoggedIn ? `/profile/${userId}` : '/login';

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
						Top
					</Button>
				</li>
				{isLoggedIn && (
					<li>
						<motion.button
							whileHover={{ scale: 0.85 }}
							whileTap={{ scale: 0.7 }}
							className={classes.icon}
							onClick={openAddTaskHandler}
						>
							<BsPlusCircleFill />
							<span>Add Task</span>
						</motion.button>
					</li>
				)}
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
			{isAddTask && (
				<Backdrop isVisible={isAddTask} onClose={closeAddTaskHandler}>
					<AddTask onClose={closeAddTaskHandler} />
				</Backdrop>
			)}
		</>
	);
};

export default NavList;
