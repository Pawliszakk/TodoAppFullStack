import classes from './Category.module.scss';
import { Category } from '@/types/app';

const CategoryTile: React.FC<Category> = ({ icon, category }) => {
	let categoryClass;

	switch (category) {
		case 'Health':
			categoryClass = classes.health;
			break;
		case 'Work':
			categoryClass = classes.work;
			break;
		case 'House':
			categoryClass = classes.house;
			break;
		case 'Personal':
			categoryClass = classes.personal;
			break;
		case 'Payments':
			categoryClass = classes.payments;
			break;
		case 'Ideas':
			categoryClass = classes.ideas;
			break;
		default:
			categoryClass = null;
			break;
	}

	return (
		<div className={`${classes.category} ${categoryClass}`}>
			{icon}
			<h3>{category}</h3>
		</div>
	);
};

export default CategoryTile;
