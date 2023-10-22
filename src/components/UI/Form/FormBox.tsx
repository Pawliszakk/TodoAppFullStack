import classes from './FormBox.module.scss';

interface FormBoxProps {
	children: React.ReactNode;
	className?: string;
}

const FormBox: React.FC<FormBoxProps> = ({ children, className }) => {
	return (
		<div className={`${classes.formBox} ${className ? className : null}`}>
			{children}
		</div>
	);
};

export default FormBox;
