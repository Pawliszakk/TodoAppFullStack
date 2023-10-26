import { FieldInputProps } from 'formik';
import classes from './Select.module.scss';
import { BiErrorCircle } from 'react-icons/bi';
import { AiOutlineDownCircle } from 'react-icons/ai';

interface SelectProps {
	field: FieldInputProps<string>;
	id: string;
	error?: string;
	touched?: boolean;
	options: any[];
	text: string;
}

const Select: React.FC<SelectProps> = ({
	field,
	id,
	error,
	touched,
	options,
	text,
}) => {
	const isError = touched && error;

	return (
		<div>
			<div className={classes.select}>
				<select id={id} {...field}>
					<option value="">{text}</option>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.text}
						</option>
					))}
				</select>
				<div className={classes.icon}>
					<AiOutlineDownCircle />
				</div>
			</div>
			{isError ? (
				<p>
					{error} <BiErrorCircle />
				</p>
			) : null}
		</div>
	);
};

export default Select;
