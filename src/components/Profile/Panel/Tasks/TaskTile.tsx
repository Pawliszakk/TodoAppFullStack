import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
import classes from './TaskTile.module.scss';
import Button from '@/components/UI/Buttons/Button';
import { Task } from '@/types/app';
import { Categories } from '@/data/data';
import { AiFillCloseCircle } from 'react-icons/ai';
import { motion } from 'framer-motion';

const TaskTile: React.FC<Task> = ({
	title,
	description,
	category,
	importance,
	id,
	author,
	date,
}) => {
	const categoryIcon = Categories.find((cat) => cat.category === category);

	const deleteTaskHandler = () => {
		console.log(`usuwam taska o id ${id}`);
	};

	const editTaskHandler = () => {
		console.log(`Edytuje taska o id ${id}`);
	};

	const finishTaskHandler = () => {
		console.log(`Finishuje taska o id ${id}`);
	};

	return (
		<SlideAnimation list className={classes.task}>
			<div className={classes.content}>
				<h3>
					{title} {categoryIcon!.icon}
				</h3>
				<hr />
				<p>{description}</p>
				<p className={classes.date}>Date: {date}</p>
				<p className={classes.importance}>Importance: {importance}</p>
			</div>
			<div className={classes.category}>
				<p>
					Category: {category} {categoryIcon!.icon}
				</p>
			</div>
			<div className={classes.buttons}>
				<Button onClick={editTaskHandler}>Edit Task</Button>
				<Button onClick={finishTaskHandler} className={classes.finish}>
					Finish Task
				</Button>
			</div>
			<motion.button
				whileHover={{ scale: 0.9 }}
				whileTap={{ scale: 0.6 }}
				onClick={deleteTaskHandler}
				className={classes.delete}
			>
				<AiFillCloseCircle />
			</motion.button>
		</SlideAnimation>
	);
};

export default TaskTile;
