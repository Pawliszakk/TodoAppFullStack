import classes from './Spinner.module.scss';

interface SpinnerProps {
	className?: string;
	white?: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ className, white }) => {
	return (
		<div className={classes.box}>
			<div
				className={`${classes.spinner} ${className ? className : null} ${
					white ? classes.white : null
				}`}
			></div>
		</div>
	);
};

export default Spinner;
