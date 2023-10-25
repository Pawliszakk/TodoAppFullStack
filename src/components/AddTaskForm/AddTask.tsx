import { useFormik } from 'formik';
import { motion } from 'framer-motion';
import { AddingTaskSchema } from '@/utils/validation';

import FormBox from '../UI/Form/FormBox';
import classes from './AddTask.module.scss';
import SectionTitle from '../UI/Section/SectionTitle';
import Input from '../UI/Form/Input';
import Button from '../UI/Buttons/Button';
import { AiFillCloseCircle } from 'react-icons/ai';
import CloseButton from '../UI/Buttons/CloseButton';

interface AddTaskProps {
	onClose: () => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onClose }) => {
	const formik = useFormik({
		initialValues: {
			title: '',
			description: '',
		},
		validationSchema: AddingTaskSchema,
		onSubmit: (values) => console.log(values),
	});

	return (
		<FormBox className={classes.box}>
			<SectionTitle>Add New Task</SectionTitle>
			<form onSubmit={formik.handleSubmit}>
				<Input
					label="Title"
					name="title"
					type="text"
					placeholder="Please enter your task title..."
					error={formik.errors.title}
					touched={formik.touched.title}
					field={formik.getFieldProps('title')}
				/>
				<Input
					label="Description"
					name="description"
					type="text"
					placeholder="Please enter your task description..."
					error={formik.errors.description}
					touched={formik.touched.description}
					field={formik.getFieldProps('description')}
				/>

				<Button type="submit">Add Task</Button>
			</form>

			<CloseButton onClick={onClose} className={classes.close} />
		</FormBox>
	);
};

export default AddTask;
