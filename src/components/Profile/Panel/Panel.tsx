import Button from '@/components/UI/Buttons/Button';
import classes from './Panel.module.scss';
import CategoryTile from './Category';
import { Categories } from '@/data/categories';
import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
import { CategoryType } from '@/types/app';
import { useState } from 'react';
import TaskList from './Tasks/TaskList';

const Panel = () => {
	const [taskCategory, setTaskCategory] = useState('All');

	const allTasksHandler = () => {
		setTaskCategory('All');
	};
	const activeTasksHandler = () => {
		setTaskCategory('Active');
	};
	const finishedTasksHandler = () => {
		setTaskCategory('Finished');
	};
	const tasksByCategoryHandler = (category: CategoryType) => {
		console.log('Taski o kategorii ' + category);
		setTaskCategory(category);
	};

	return (
		<>
			{' '}
			<section className={classes.panel}>
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
					<Button onClick={activeTasksHandler}>Show active tasks</Button>
					<Button onClick={allTasksHandler}>Show All Tasks</Button>
					<Button onClick={finishedTasksHandler}>Show finished tasks</Button>
				</SlideAnimation>
			</section>
			<TaskList currentTasks={taskCategory} />
		</>
	);
};

export default Panel;
