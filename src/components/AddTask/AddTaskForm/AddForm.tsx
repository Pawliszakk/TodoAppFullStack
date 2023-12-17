import { useState, useContext } from 'react';
import { useFormik } from 'formik';
import { AddingTaskSchema } from '@/utils/validation';
import { AuthContext } from '@/context/auth-context';
import { useRouter } from 'next/router';
import { selectCategoryOptions, selectImportanceOptions } from '@/data/data';
import { Toaster, toast } from 'sonner';

import Link from 'next/link';
import FormBox from '../../UI/Form/FormBox';
import classes from './AddForm.module.scss';
import SectionTitle from '../../UI/Section/SectionTitle';
import Input from '../../UI/Form/Input';
import Button from '../../UI/Buttons/Button';
import Select from '../../UI/Form/Select';
import Spinner from '../../UI/LoadingSpinner/Spinner';

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
			const { message } = await res.json();

			if (!res.ok) {
				toast.error(message || 'Cannot create a task, please try again later');
				setReqMessage(
					message || 'Cannot create a task, please try again later'
				);
			} else {
				toast.success(message);
				setReqMessage(message);
			}
			setIsLoading(false);
		},
	});

	const { touched, errors, getFieldProps, handleSubmit } = formik;

	const isError =
		(touched.title && errors.title) ||
		(touched.description && errors.description) ||
		(touched.category && errors.category) ||
		(touched.importance && errors.importance);

	return (
		<FormBox className={classes.box}>
			<Toaster position="top-center" richColors />
			<SectionTitle>Add New Task</SectionTitle>
			<form onSubmit={handleSubmit}>
				<Input
					label="Title"
					name="title"
					type="text"
					placeholder="Please enter your task title..."
					error={errors.title}
					touched={touched.title}
					field={getFieldProps('title')}
				/>
				<Input
					label="Description"
					name="description"
					type="text"
					placeholder="Please enter your task description..."
					error={errors.description}
					touched={touched.description}
					field={getFieldProps('description')}
				/>
				<Select
					id="category"
					field={getFieldProps('category')}
					error={errors.category}
					touched={touched.category}
					text="Choose Category"
					options={selectCategoryOptions}
				/>
				<Select
					id="importance"
					field={getFieldProps('importance')}
					error={errors.importance}
					touched={touched.importance}
					text="Choose Importance"
					options={selectImportanceOptions}
				/>

				{isLoading ? (
					<Spinner />
				) : (
					<Button className={classes.submit} type="submit" disabled={!!isError}>
						Add Task
					</Button>
				)}

				{reqMessage && !isLoading ? (
					<>
						<p>{reqMessage}</p>
						<Link href={`/profile/${userId}/?token=${token}`}>
							Go to your profile to see new task!
						</Link>
					</>
				) : (
					<p>
						By clicking the button below, a new task will be created and{' '}
						<strong>assigned to your account.</strong>
					</p>
				)}
			</form>
		</FormBox>
	);
};

export default AddForm;
