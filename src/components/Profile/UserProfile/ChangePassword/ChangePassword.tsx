import { useState } from 'react';
import FormBox from '@/components/UI/Form/FormBox';
import SectionTitle from '@/components/UI/Section/SectionTitle';
import Spinner from '@/components/UI/LoadingSpinner/Spinner';
import Button from '@/components/UI/Buttons/Button';
import { useFormik } from 'formik';
import { LoginSchema } from '@/utils/validation';
import Input from '@/components/UI/Form/Input';

const ChangePassword = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [reqMessage, setReqMessage] = useState('');

	const formik = useFormik({
		initialValues: {
			oldPassword: '',
			newPassword: '',
		},
		validationSchema: LoginSchema,

		onSubmit: async (values) => {
			console.log(values);
		},
	});

	return (
		<FormBox>
			<SectionTitle>Change Your Password</SectionTitle>

			<form onSubmit={formik.handleSubmit}>
				<Input
					label="Old Password"
					name="oldPassword"
					type="oldPassword"
					placeholder="Please enter your old password..."
					error={formik.errors.oldPassword}
					touched={formik.touched.oldPassword}
					field={formik.getFieldProps('oldPassword')}
				/>
				<Input
					label="New Password"
					name="newPassword"
					type="newPassword"
					placeholder="Please enter your new password..."
					error={formik.errors.newPassword}
					touched={formik.touched.newPassword}
					field={formik.getFieldProps('newPassword')}
				/>
				{isLoading ? <Spinner /> : <Button type="submit"> Login</Button>}
				{reqMessage && <p>{reqMessage}</p>}
			</form>
		</FormBox>
	);
};

export default ChangePassword;
