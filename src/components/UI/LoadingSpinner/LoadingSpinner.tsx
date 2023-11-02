import Portal from '@/utils/Portal';

import classes from './LoadingSpinner.module.scss';
import Spinner from './Spinner';

const LoadingSpinner = () => {
	return (
		<Portal>
			<div className={classes.backdrop}>
				<div>
					<Spinner white className={classes.spinner} />
					<p>Loading...</p>
				</div>
			</div>
		</Portal>
	);
};

export default LoadingSpinner;
