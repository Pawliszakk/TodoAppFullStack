import SectionTitle from '@/components/UI/Section/SectionTitle';
import classes from './TaskList.module.scss';
import { Task } from '@/types/app';
import TaskTile from './TaskTile';

interface TaskListProps {
	currentTasks: Task[];
	currentCategory: string;
}

const TaskList: React.FC<TaskListProps> = ({
	currentTasks,
	currentCategory,
}) => {
	const isTasks = currentTasks && currentTasks.length > 0;

	return (
		<section className={classes.tasks}>
			<SectionTitle>{currentCategory} Tasks</SectionTitle>
			<ul className={classes.list}>
				{isTasks ? (
					currentTasks.map((task) => (
						<TaskTile
							key={task.id}
							title={task.title}
							description={task.description}
							id={task.id}
							category={task.category}
							author={task.author}
							date={task.date}
							importance={task.importance}
							active={task.active}
						/>
					))
				) : (
					<p className={classes.error}>
						There are no tasks for this filters...
					</p>
				)}
			</ul>
		</section>
	);
};

export default TaskList;
