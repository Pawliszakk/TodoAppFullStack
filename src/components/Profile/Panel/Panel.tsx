import Button from '@/components/UI/Buttons/Button';
import classes from './Panel.module.scss';
import { Category } from '@/types/app';

import { FaHeartbeat } from 'react-icons/fa';

const categories: Category[] = [
	{ category: 'Health', icon: <FaHeartbeat /> },
	// { category: 'Work', icon: '' },
	// { category: 'House', icon: '' },
	// { category: 'Personal', icon: '' },
	// { category: 'Payments', icon: '' },
	// { category: 'Ideas', icon: '' },
];

const Panel = () => {
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
		</section>
	);
};

export default Panel;
