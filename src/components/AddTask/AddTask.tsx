import Image from 'next/image';

import classes from './AddTask.module.scss';
import SlideAnimation from '../UI/Animations/SlideAnimation';
import AddForm from './AddTaskForm/AddForm';

const AddTask = () => {
	return (
		<section className={classes.addTask}>
			<div className={classes.box}>
				<SlideAnimation>
					<AddForm />
				</SlideAnimation>
				<SlideAnimation left className={classes.image}>
					<Image
						src="/assets/ilustrations/creating.jpg"
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
