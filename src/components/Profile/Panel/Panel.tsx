import Button from '@/components/UI/Buttons/Button';
import classes from './Panel.module.scss';
import CategoryTile from './Category';
import { Categories } from '@/data/categories';

const Panel = () => {
	const allTasksHandler = () => {
		console.log('All Tasks');
	};
	const activeTasksHandler = () => {
		console.log('Active Tasks');
	};
	const finishedTasksHandler = () => {
		console.log('Finished Tasks');
	};

	return (
		<section className={classes.panel}>
			<div className={classes.buttons}>
				<Button onClick={activeTasksHandler}>Show active tasks</Button>
				<Button onClick={finishedTasksHandler}>Show finished tasks</Button>
			</div>

			<div className={classes.categories}>
				{Categories.map((cat, i) => (
					<CategoryTile key={i} icon={cat.icon} category={cat.category} />
				))}
			</div>
			<p>Show Tasks by category or...</p>
			<Button onClick={allTasksHandler}>Show All Tasks</Button>
		</section>
	);
};

export default Panel;
