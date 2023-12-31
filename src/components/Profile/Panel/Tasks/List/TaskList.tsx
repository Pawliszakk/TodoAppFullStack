import { useContext } from 'react';
import { Task } from '@/types/app';
import ThemeContext from '@/context/theme-context';

import SectionTitle from '@/components/UI/Section/SectionTitle';
import classes from './TaskList.module.scss';
import TaskTile from './TaskTile';

interface TaskListProps {
	currentTasks: Task[];
	currentCategory: string;
	onDelete: (id: string) => void;
	onFinish: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({
	currentTasks,
	currentCategory,
	onDelete,
	onFinish,
}) => {
	const { isDark } = useContext(ThemeContext);

	const isTasks = currentTasks && currentTasks.length > 0;

	return (
		<section className={`${classes.tasks} ${isDark ? classes.light : null}`}>
			<SectionTitle dataCy="task-category-heading">
				{currentCategory} Tasks
			</SectionTitle>
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
							onDelete={onDelete}
							onFinish={onFinish}
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
