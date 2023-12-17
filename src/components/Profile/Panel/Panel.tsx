import { useContext, useState } from 'react';
import { Categories } from '@/data/data';
import { CategoryType, Task } from '@/types/app';

import Button from '@/components/UI/Buttons/Button';
import classes from './Panel.module.scss';
import CategoryTile from './Category';
import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
import TaskList from './Tasks/List/TaskList';
import ThemeContext from '@/context/theme-context';

interface PanelProps {
	tasks: Task[];
	pointsHandler: () => void;
}

const Panel: React.FC<PanelProps> = (props) => {
	const [taskCategory, setTaskCategory] = useState('active');
	const [tasks, setTasks] = useState(props.tasks);
	const activeTasksHandler = () => setTaskCategory('active');

	const { isDark } = useContext(ThemeContext);

	const finishedTasksHandler = () => setTaskCategory('finished');

	const tasksByCategoryHandler = (category: CategoryType) => {
		setTaskCategory(category);
	};

	let currentTasks;

	if (taskCategory === 'active') {
		currentTasks = tasks.filter((task) => task.active);
	} else if (taskCategory === 'finished') {
		currentTasks = tasks.filter((task) => !task.active);
	} else {
		currentTasks = tasks.filter(
			(task) => task.category === taskCategory && task.active
		);
	}
	const deleteTaskHandler = (id: string) => {
		const filteredTasks = tasks.filter((task) => task.id !== id);
		setTasks(filteredTasks);
	};
	const finishTaskHandler = (id: string) => {
		const updatedTasks = tasks.map((task) => {
			if (task.id === id) {
				return { ...task, active: false };
			}
			return task;
		});

		setTasks(updatedTasks);
		props.pointsHandler();
	};

	const activeTasksAmount = tasks.filter((task) => task.active).length;
	const finishedTasksAmount = tasks.filter((task) => !task.active).length;

	return (
		<>
			<section className={`${classes.panel} ${isDark ? classes.light : null}`}>
				<h2>Categories</h2>
				<div className={classes.categories}>
					{Categories.map((cat, i) => (
						<CategoryTile
							key={i}
							icon={cat.icon}
							category={cat.category}
							index={i}
							onTasksShow={tasksByCategoryHandler}
						/>
					))}
				</div>
				<p>Show Tasks by category or...</p>
				<SlideAnimation className={classes.buttons}>
					<Button onClick={activeTasksHandler}>
						Show active tasks {`(${activeTasksAmount})`}
					</Button>
					<Button onClick={finishedTasksHandler}>
						Show finished tasks {`(${finishedTasksAmount})`}
					</Button>
				</SlideAnimation>
			</section>
			<TaskList
				currentTasks={currentTasks}
				currentCategory={taskCategory}
				onDelete={deleteTaskHandler}
				onFinish={finishTaskHandler}
			/>
		</>
	);
};

export default Panel;
