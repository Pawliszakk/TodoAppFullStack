import Image from 'next/image';

import classes from './AddTask.module.scss';
import SlideAnimation from '../UI/Animations/SlideAnimation';
import AddForm from './AddTaskForm/AddForm';
import { useContext } from 'react';
import ThemeContext from '@/context/theme-context';

const AddTask = () => {
	const { isDark } = useContext(ThemeContext);

	const imageSrc = isDark
		? '/assets/ilustrations/creating.jpg'
		: '/assets/ilustrations/creating-dark.jpg';

	return (
		<section className={classes.addTask}>
			<div className={classes.box}>
				<SlideAnimation>
					<AddForm />
				</SlideAnimation>
				<SlideAnimation left className={classes.image}>
					<Image
						src={imageSrc}
						alt="Ilustration of woman and man planning something on whiteboard"
						width={550}
						height={550}
						priority={true}
					/>
				</SlideAnimation>
			</div>
		</section>
	);
};

export default AddTask;
