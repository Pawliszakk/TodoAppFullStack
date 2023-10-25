import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
import classes from './TaskTile.module.scss';
import Button from '@/components/UI/Buttons/Button';
import { Task } from '@/types/app';
import { Categories } from '@/data/data';

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
				<Button deleteBtn>Delete Task</Button>
				<Button>Edit Task</Button>
				<Button finishBtn>Finish Task</Button>
			</div>
		</SlideAnimation>
	);
};

export default TaskTile;
