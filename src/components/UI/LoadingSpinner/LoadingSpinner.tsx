import Portal from '@/utils/Portal';
import classes from './LoadingSpinner.module.scss';

const LoadingSpinner = () => {
	return (
		<Portal>
			<div className={classes.backdrop}>
				<div className={classes.spinner}></div>
				<p>Loading...</p>
			</div>
		</Portal>
	);
};

export default LoadingSpinner;
