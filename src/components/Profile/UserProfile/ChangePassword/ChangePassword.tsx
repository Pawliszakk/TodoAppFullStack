import { useContext, useState } from 'react';
import { ChangePasswordSchema } from '@/utils/validation';
import { useFormik } from 'formik';
import { AuthContext } from '@/context/auth-context';
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
			const resData = await res.json();

			if (!res.ok) {
				setIsLoading(false);
				setReqMessage(
					resData.message ||
						'Cannot change your password, please try again later'
				);
			} else {
				setIsLoading(false);
				setReqMessage(resData.message);
				setTimeout(() => {
					onClose();
				}, 1500);
			}
		},
	});

	return (
		<FormBox>
			<SectionTitle className={classes.title}>
				Change Your Password
			</SectionTitle>

			<form onSubmit={formik.handleSubmit}>
				<Input
					label="New Password"
					name="newPassword"
					type="password"
					placeholder="Please enter your new password..."
					error={formik.errors.newPassword}
					touched={formik.touched.newPassword}
					field={formik.getFieldProps('newPassword')}
				/>
				<Input
					label="Confirm New Password"
					name="checkNewPassword"
					type="password"
					placeholder="Please confirm your new password..."
					error={formik.errors.checkNewPassword}
					touched={formik.touched.checkNewPassword}
					field={formik.getFieldProps('checkNewPassword')}
				/>
				{isLoading ? <Spinner /> : <Button type="submit"> Login</Button>}
				{reqMessage && <p>{reqMessage}</p>}
			</form>
			<CloseButton onClick={onClose} />
		</FormBox>
	);
};

export default ChangePassword;
