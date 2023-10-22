import classes from './Input.module.scss';
import { BiErrorCircle } from 'react-icons/bi';
import { FieldInputProps } from 'formik';

interface InputProps {
	field: FieldInputProps<string>;
	name: string;
	placeholder: string;
	label?: string;
	type: string;
	error?: string;
	touched?: boolean;
}

const Input: React.FC<InputProps> = ({
	field,
	placeholder,
	label,
	type,
	error,
	name,
	touched,
}) => {
	const isError = touched && error;

	return (
		<div className={classes.box}>
			<label htmlFor={name}>{label}</label>
			<input id={name} type={type} {...field} placeholder={placeholder} />
			{isError ? (
				<p>
					{error} <BiErrorCircle />
				</p>
			) : null}
		</div>
	);
};

export default Input;
