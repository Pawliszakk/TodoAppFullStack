import Button from '@/components/UI/Buttons/Button';
import classes from './Panel.module.scss';
import { Category } from '@/types/app';

import { FaHeartbeat } from 'react-icons/fa';
import { FaBriefcase, FaMoneyCheckDollar } from 'react-icons/fa6';
import { BsFillHouseFill } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { PiLightbulbLight } from 'react-icons/pi';
import CategoryTile from './Category';

const categories: Category[] = [
	{ category: 'Health', icon: <FaHeartbeat /> },
	{ category: 'Work', icon: <FaBriefcase /> },
	{ category: 'House', icon: <BsFillHouseFill /> },
	{ category: 'Personal', icon: <AiOutlineUser /> },
	{ category: 'Payments', icon: <FaMoneyCheckDollar /> },
	{ category: 'Ideas', icon: <PiLightbulbLight /> },
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

			<div className={classes.categories}>
				{categories.map((cat, i) => (
					<CategoryTile key={i} icon={cat.icon} category={cat.category} />
				))}
			</div>
		</section>
	);
};

export default Panel;
