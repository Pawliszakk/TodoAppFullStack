import { motion } from 'framer-motion';
import classes from './Category.module.scss';
import { Category } from '@/types/app';
import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
import SlideFromTop from '@/components/UI/Animations/SlideFromTop';
const CategoryTile: React.FC<Category> = ({
	icon,
	category,
	index,
	onTasksShow,
}) => {
	const handleCategoryClick = () => {
		if (onTasksShow) {
			onTasksShow(category);
		}
	};

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
		<SlideFromTop index={index}>
			<motion.div
				whileHover={{ scale: 0.9 }}
				whileTap={{ scale: 0.7 }}
				className={`${classes.category} ${categoryClass}`}
				onClick={handleCategoryClick}
			>
				{icon}
				<h3>{category}</h3>
			</motion.div>
		</SlideFromTop>
	);
};

export default CategoryTile;
