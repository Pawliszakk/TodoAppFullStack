import { useFormik } from 'formik';
import { AddingTaskSchema } from '@/utils/validation';

import FormBox from '../UI/Form/FormBox';
import classes from './AddTask.module.scss';
import SectionTitle from '../UI/Section/SectionTitle';
import Input from '../UI/Form/Input';
import Button from '../UI/Buttons/Button';
import CloseButton from '../UI/Buttons/CloseButton';
import Select from '../UI/Form/Select';
import { CategoryType } from '@/types/app';
import { selectCategoryOptions, selectImportanceOptions } from '@/data/data';

interface AddTaskProps {
	onClose: () => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onClose }) => {
	const formik = useFormik({
		initialValues: {
			title: '',
			description: '',
			category: '',
			importance: '',
		},
		validationSchema: AddingTaskSchema,
		onSubmit: async (values) => {
			const today = new Date();
			const day = today.getDate();
			const month = today.getMonth() + 1;
			const year = today.getFullYear();

			const formattedDate = `${day}-${month}-${year}`;

			const task = {
				...values,
				author: '0591205971 (id Usera)',
				date: formattedDate,
				active: true,
			};

			const res = await fetch('/api/task', {
				method: 'POST',
				body: JSON.stringify(task),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const resData = await res.json();
			console.log(resData);
		},
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
				<Select
					id="category"
					field={formik.getFieldProps('category')}
					error={formik.errors.category}
					touched={formik.touched.category}
					text="Choose Category"
					options={selectCategoryOptions}
				/>
				<Select
					id="importance"
					field={formik.getFieldProps('importance')}
					error={formik.errors.importance}
					touched={formik.touched.importance}
					text="Choose Importance"
					options={selectImportanceOptions}
				/>

				<Button type="submit">Add Task</Button>
			</form>

			<CloseButton onClick={onClose} className={classes.close} />
		</FormBox>
	);
};

export default AddTask;
