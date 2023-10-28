import { useState, useContext } from 'react';
import { useFormik } from 'formik';
import { AddingTaskSchema } from '@/utils/validation';

import FormBox from '../UI/Form/FormBox';
import classes from './AddTask.module.scss';
import SectionTitle from '../UI/Section/SectionTitle';
import Input from '../UI/Form/Input';
import Button from '../UI/Buttons/Button';
import CloseButton from '../UI/Buttons/CloseButton';
import Select from '../UI/Form/Select';
import { selectCategoryOptions, selectImportanceOptions } from '@/data/data';
import Spinner from '../UI/LoadingSpinner/Spinner';
import { AuthContext } from '@/context/auth-context';
import { useRouter } from 'next/router';
interface AddTaskProps {
	onClose: () => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onClose }) => {
	const [isLoading, setIsLoading] = useState(false);

	const { isLoggedIn, userId } = useContext(AuthContext);
	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			title: '',
			description: '',
			category: '',
			importance: '',
		},
		validationSchema: AddingTaskSchema,
		onSubmit: async (values) => {
			if (isLoggedIn) {
				setIsLoading(true);
				const task = {
					...values,
					author: userId,
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
				setIsLoading(false);
			} else {
				router.push('/');
			}
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

				{isLoading ? <Spinner /> : <Button type="submit">Add Task</Button>}
			</form>

			<CloseButton onClick={onClose} className={classes.close} />
		</FormBox>
	);
};

export default AddTask;
