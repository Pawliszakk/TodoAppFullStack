import { useContext, useState } from 'react';
import { ChangePasswordSchema } from '@/utils/validation';
import { useFormik } from 'formik';
import { AuthContext } from '@/context/auth-context';
import { Toaster, toast } from 'sonner';

import classes from './ChangePassword.module.scss';

import FormBox from '@/components/UI/Form/FormBox';
import SectionTitle from '@/components/UI/Section/SectionTitle';
import Spinner from '@/components/UI/LoadingSpinner/Spinner';
import Button from '@/components/UI/Buttons/Button';
import Input from '@/components/UI/Form/Input';
import CloseButton from '@/components/UI/Buttons/CloseButton';

interface ChangePasswordProps {
	onClose: () => void;
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ onClose }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [reqMessage, setReqMessage] = useState('');

	const { token, userId } = useContext(AuthContext);

	const formik = useFormik({
		initialValues: {
			oldPassword: '',
			newPassword: '',
			checkNewPassword: '',
		},
		validationSchema: ChangePasswordSchema,

		onSubmit: async (values) => {
			setIsLoading(true);

			const res = await fetch(`/api/profile/password`, {
				method: 'PATCH',
				body: JSON.stringify({ ...values, userId }),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});
			const { message } = await res.json();

			if (!res.ok) {
				setIsLoading(false);
				toast.error(
					message || 'Cannot change your password, please try again later'
				);

				setReqMessage(
					message || 'Cannot change your password, please try again later'
				);
			} else {
				setIsLoading(false);
				toast.success(message);
				setReqMessage(message);
				setTimeout(() => {
					onClose();
				}, 3000);
			}
		},
	});

	const { touched, errors, getFieldProps, handleSubmit } = formik;

	const isError =
		(touched.oldPassword && errors.oldPassword) ||
		(touched.newPassword && errors.newPassword) ||
		(touched.checkNewPassword && errors.checkNewPassword);

	return (
		<FormBox>
			<Toaster position="top-center" richColors />
			<SectionTitle className={classes.title}>
				Change Your Password
			</SectionTitle>

			<form onSubmit={handleSubmit}>
				<Input
					label="Old Password"
					name="oldPassword"
					type="password"
					placeholder="Enter current password..."
					error={errors.oldPassword}
					touched={touched.oldPassword}
					field={getFieldProps('oldPassword')}
				/>
				<Input
					label="New Password"
					name="newPassword"
					type="password"
					placeholder="Enter new password..."
					error={errors.newPassword}
					touched={touched.newPassword}
					field={getFieldProps('newPassword')}
				/>
				<Input
					label="Confirm New Password"
					name="checkNewPassword"
					type="password"
					placeholder="Confirm new password..."
					error={errors.checkNewPassword}
					touched={touched.checkNewPassword}
					field={getFieldProps('checkNewPassword')}
				/>
				{isLoading ? (
					<Spinner />
				) : (
					<Button type="submit" disabled={!!isError}>
						Change Password
					</Button>
				)}
				{reqMessage ? (
					<p>{reqMessage}</p>
				) : (
					<p>
						By confirming below, your password will be permanently and{' '}
						<b>irreversibly</b> changed.
					</p>
				)}
			</form>
			<CloseButton onClick={onClose} />
		</FormBox>
	);
};

export default ChangePassword;
