import { useState, useContext } from 'react';
import { useFormik } from 'formik';
import { deleteAccountValidation } from '@/utils/validation';
import { AuthContext } from '@/context/auth-context';
import { Toaster, toast } from 'sonner';

import classes from './DeleteAccount.module.scss';
import Button from '@/components/UI/Buttons/Button';
import FormBox from '@/components/UI/Form/FormBox';
import Input from '@/components/UI/Form/Input';
import Spinner from '@/components/UI/LoadingSpinner/Spinner';
import SectionTitle from '@/components/UI/Section/SectionTitle';
import CloseButton from '@/components/UI/Buttons/CloseButton';

interface DeleteAccountProps {
	onClose: () => void;
}

const DeleteAccount: React.FC<DeleteAccountProps> = ({ onClose }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [reqMessage, setReqMessage] = useState('');

	const { token, userId, logout } = useContext(AuthContext);

	const formik = useFormik({
		initialValues: {
			password: '',
		},
		validationSchema: deleteAccountValidation,

		onSubmit: async (values) => {
			setIsLoading(true);

			const res = await fetch(`/api/profile/${userId}`, {
				method: 'DELETE',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});
			const resData = await res.json();

			if (!res.ok) {
				setIsLoading(false);
				toast.error(
					resData.message ||
						'Cannot delete your account, please try again later.'
				);
				setReqMessage(
					resData.message ||
						'Cannot delete your account, please try again later.'
				);
			} else {
				toast.success(resData.message);

				setIsLoading(false);
				setReqMessage(resData.message);
				setTimeout(() => logout(), 3000);
			}
		},
	});

	const isError = formik.touched.password && formik.errors.password;

	return (
		<FormBox>
			<Toaster position="top-center" richColors />

			<SectionTitle className={classes.heading}>
				Are you sure you want to delete your account?
			</SectionTitle>

			<form onSubmit={formik.handleSubmit}>
				<Input
					label="Write your password"
					name="password"
					type="password"
					placeholder="Enter current password..."
					error={formik.errors.password}
					touched={formik.touched.password}
					field={formik.getFieldProps('password')}
				/>

				{isLoading ? (
					<Spinner />
				) : (
					<Button
						className={classes.submit}
						type="submit"
						deleteBtn
						disabled={!!isError}
					>
						Delete Account
					</Button>
				)}

				{reqMessage ? (
					<p>{reqMessage}</p>
				) : (
					<p>
						By clicking the button below, your account will be permanently
						deleted. <strong>This action is irreversible.</strong>
					</p>
				)}
			</form>
			<CloseButton onClick={onClose} />
		</FormBox>
	);
};

export default DeleteAccount;
