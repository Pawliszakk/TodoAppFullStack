import { useState, useContext } from 'react';
import { useFormik } from 'formik';
import { AddingTaskSchema } from '@/utils/validation';
import { selectCategoryOptions, selectImportanceOptions } from '@/data/data';
import { AuthContext } from '@/context/auth-context';
import { useRouter } from 'next/router';
import { CategoryType } from '@/types/app';
import { Toaster, toast } from 'sonner';
import Link from 'next/link';

import SectionTitle from '@/components/UI/Section/SectionTitle';
import FormBox from '@/components/UI/Form/FormBox';
import Input from '@/components/UI/Form/Input';
import Select from '@/components/UI/Form/Select';
import Spinner from '@/components/UI/LoadingSpinner/Spinner';
import Button from '@/components/UI/Buttons/Button';
import CloseButton from '@/components/UI/Buttons/CloseButton';

interface EditFormProps {
	onClose: () => void;
	title: string;
	description: string;
	importance: '1' | '2' | '3';
	category: CategoryType;
	id: string;
	onTaskEdit: (
		title: string,
		description: string,
		category: CategoryType,
		importance: '1' | '2' | '3'
	) => void;
}

const EditForm: React.FC<EditFormProps> = ({
	onClose,
	title,
	importance,
	id,
	description,
	category,
	onTaskEdit,
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const [reqMessage, setReqMessage] = useState('');

	const { isLoggedIn, userId, token } = useContext(AuthContext);
	const router = useRouter();

	const formik = useFormik({
		initialValues: {
			title,
			description,
			category,
			importance,
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
				id,
			};

			const res = await fetch('/api/task/edit', {
				method: 'PATCH',
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
				onTaskEdit(
					values.title,
					values.description,
					values.category,
					values.importance
				);
				setTimeout(() => onClose(), 2500);
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
		<FormBox>
			<Toaster position="top-center" richColors />

			<SectionTitle>Edit your task</SectionTitle>
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
					<Button type="submit" disabled={!!isError}>
						Edit Task
					</Button>
				)}
				{reqMessage && !isLoading && (
					<>
						<p>{reqMessage}</p>
						<Link href={`/profile/${userId}/?token=${token}`}>
							Go to your profile to see new task!
						</Link>
					</>
				)}
			</form>
			<CloseButton onClick={onClose} />
		</FormBox>
	);
};

export default EditForm;
