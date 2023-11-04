import Portal from '@/utils/Portal';
import Link from 'next/link';
import { motion } from 'framer-motion';

import classes from './AddTaskButton.module.scss';
import { BsFillPlusCircleFill } from 'react-icons/bs';

const AddTaskButton = () => {
	return (
		<Portal>
			<motion.div
				whileHover={{ scale: 0.8 }}
				whileTap={{ scale: 0.5 }}
				style={{
					position: 'fixed',
					bottom: '10%',
					right: '5%',
					zIndex: 500,
				}}
			>
				<Link href="/add-task" className={classes.button}>
					<BsFillPlusCircleFill />
					<span>Add Task</span>
				</Link>
			</motion.div>
		</Portal>
	);
};

export default AddTaskButton;
