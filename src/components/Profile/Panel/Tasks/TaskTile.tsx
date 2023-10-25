import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
import classes from './TaskTile.module.scss';
import Button from '@/components/UI/Buttons/Button';
import { Task } from '@/types/app';

const TaskTile: React.FC<Task> = ({
	title,
	description,
	category,
	importance,
	id,
	author,
	date,
}) => {
	return (
		<SlideAnimation list>
			<div className={classes.content}>
				<h3>{title}</h3>
				<p>{description}</p>
				<p>Date: {date}</p>
				<p>Importance: {importance}</p>
			</div>
			<div className={classes.category}>
				<p>{category}</p>
			</div>
			<div className={classes.buttons}>
				<Button>Delete Task</Button>
				<Button>Edit Task</Button>
				<Button>Finish Task</Button>
			</div>
		</SlideAnimation>
	);
};

export default TaskTile;
