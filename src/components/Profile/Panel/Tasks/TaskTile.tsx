import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
import classes from './TaskTile.module.scss';
import Button from '@/components/UI/Buttons/Button';
import { Task } from '@/types/app';
import { Categories } from '@/data/data';
import CloseButton from '@/components/UI/Buttons/CloseButton';

const TaskTile: React.FC<
	Task & { onDelete: (id: string) => void; onFinish: (id: string) => void }
> = ({
	title,
	description,
	category,
	importance,
	id,
	author,
	date,
	onDelete,
	onFinish,
}) => {
	const categoryIcon = Categories.find((cat) => cat.category === category);

	const deleteTaskHandler = async () => {
		const res = await fetch('/api/task', {
			method: 'DELETE',
			body: JSON.stringify({ id }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const resData = await res.json();
		console.log(resData);
		if (res.ok) {
			onDelete(id);
		}
	};

	const editTaskHandler = async () => {
		console.log(`Edytuje taska o id ${id}`);
	};

	const finishTaskHandler = async () => {
		const res = await fetch('/api/task', {
			method: 'PATCH',
			body: JSON.stringify({ id }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const resData = await res.json();
		console.log(resData);
		if (res.ok) {
			onFinish(id);
		}
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

			<CloseButton onClick={deleteTaskHandler} />
		</SlideAnimation>
	);
};

export default TaskTile;
