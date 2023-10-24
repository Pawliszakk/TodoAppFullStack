import classes from './Category.module.scss';
import { Category } from '@/types/app';

const Category: React.FC<Category> = ({ icon, category }) => {
	return (
		<div className={classes.category}>
			<div className={classes.icon}>{icon}</div>
			<h3>{category}</h3>
		</div>
	);
};

export default Category;
