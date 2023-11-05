import { useState, useContext } from 'react';
import { useFormik } from 'formik';
import { deleteAccountValidation } from '@/utils/validation';

import Button from '@/components/UI/Buttons/Button';
import FormBox from '@/components/UI/Form/FormBox';
import Input from '@/components/UI/Form/Input';
import Spinner from '@/components/UI/LoadingSpinner/Spinner';
import SectionTitle from '@/components/UI/Section/SectionTitle';
import { AuthContext } from '@/context/auth-context';

const DeleteAccount = () => {
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
				setReqMessage(
					resData.message ||
						'Cannot delete your account, please try again later.'
				);
			} else {
				setIsLoading(false);
				setReqMessage(resData.message);
				logout();
			}
		},
	});

	return (
		<FormBox>
			<SectionTitle>Are you sure you want to delete your account?</SectionTitle>

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
					<Button type="submit">Delete Account</Button>
				)}
				{reqMessage && <p>{reqMessage}</p>}
			</form>
		</FormBox>
	);
};

export default DeleteAccount;
