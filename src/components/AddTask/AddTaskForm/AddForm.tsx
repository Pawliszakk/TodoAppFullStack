import { useState, useContext } from 'react';
import { useFormik } from 'formik';
import { AddingTaskSchema } from '@/utils/validation';

import FormBox from '../../UI/Form/FormBox';
import classes from './AddForm.module.scss';
import SectionTitle from '../../UI/Section/SectionTitle';
import Input from '../../UI/Form/Input';
import Button from '../../UI/Buttons/Button';
import Select from '../../UI/Form/Select';
import { selectCategoryOptions, selectImportanceOptions } from '@/data/data';
import Spinner from '../../UI/LoadingSpinner/Spinner';
import { AuthContext } from '@/context/auth-context';
import { useRouter } from 'next/router';
import Link from 'next/link';

const AddForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [reqMessage, setReqMessage] = useState('');

	const { isLoggedIn, userId, token } = useContext(AuthContext);
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
			setIsLoading(true);
			if (!isLoggedIn) {
				router.push('/');
			}

			const task = {
				...values,
				author: userId,
			};

			const res = await fetch('/api/task', {
				method: 'POST',
				body: JSON.stringify(task),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});
			const resData = await res.json();

			if (!res.ok) {
				setReqMessage(
					resData.message || 'Cannot create a task, please try again later'
				);
			} else {
				setReqMessage(resData.message);
			}
			setIsLoading(false);
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
				{reqMessage && !isLoading && (
					<>
						<p>{reqMessage}</p>
						<Link href={`/profile/${userId}/?token=${token}`}>
							Go to your profile to see new task!
						</Link>
					</>
				)}
			</form>
		</FormBox>
	);
};

export default AddForm;