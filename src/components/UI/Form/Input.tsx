import { FieldInputProps } from 'formik';

interface InputProps {
	field: FieldInputProps<string>;
	name: string;
	placeholder: string;
	label?: string;
	type: string;
	error?: string | boolean;
	errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
	field,
	placeholder,
	label,
	type,
	error,
	errorMessage,
	name,
}) => {
	return (
		<div>
			<label htmlFor={name}>{label}</label>
			<input id={name} type={type} {...field} placeholder={placeholder} />
			{error ? <p>{errorMessage}</p> : null}
		</div>
	);
};

export default Input;
