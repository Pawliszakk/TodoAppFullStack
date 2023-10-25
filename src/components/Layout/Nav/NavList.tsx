import { useState } from 'react';
import Button from '@/components/UI/Buttons/Button';
import classes from './NavList.module.scss';
import Link from 'next/link';
import { BsPlusCircleFill } from 'react-icons/bs';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AddTask from '@/components/AddTaskForm/AddTask';
import Backdrop from '@/components/UI/Backdrop/Backdrop';

const NavList = () => {
	const [isAddTask, setIsAddTask] = useState(false);

	const openAddTaskHandler = () => setIsAddTask(true);
	const closeAddTaskHandler = () => setIsAddTask(false);

	return (
		<>
			{' '}
			<ul className={classes.list}>
				<li>
					<Button className={classes.btn} link href="/login">
						Login
					</Button>
				</li>
				<li>
					<Button className={classes.btn} link href="/ranking">
						Top
					</Button>
				</li>
				<li>
					<motion.button
						whileHover={{ scale: 0.85 }}
						whileTap={{ scale: 0.7 }}
						className={classes.icon}
						onClick={openAddTaskHandler}
					>
						<BsPlusCircleFill />
					</motion.button>
				</li>
				<li>
					<Link href="/profile/2">
						<Image
							src="/assets/avatars/avatarLogout.jpg"
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
