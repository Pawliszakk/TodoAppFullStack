import { useState, useContext } from 'react';
import { AuthContext } from '@/context/auth-context';
import { useFormik } from 'formik';
import { ChangeSettingsSchema, checkAvatarValidity } from '@/utils/validation';
import { Toaster, toast } from 'sonner';

import FormBox from '@/components/UI/Form/FormBox';
import SectionTitle from '@/components/UI/Section/SectionTitle';
import Button from '@/components/UI/Buttons/Button';
import Input from '@/components/UI/Form/Input';
import AvatarsComponent from '@/components/UI/Form/AvatarsComponent';
import Spinner from '@/components/UI/LoadingSpinner/Spinner';
import CloseButton from '@/components/UI/Buttons/CloseButton';

interface EditProfileProps {
	onClose: () => void;
	onEdit: (name: string, avatar: string) => void;
	name: string;
	avatar: string;
}

const EditProfile: React.FC<EditProfileProps> = (props) => {
	const [avatar, setAvatar] = useState('/assets/avatars/avatar2.jpg');
	const [isLoading, setIsLoading] = useState(false);
	const [reqMessage, setReqMessage] = useState('');

	const avatarChangeHandler = (avatar: string) => setAvatar(avatar);

	const { token, userId, login } = useContext(AuthContext);

	const formik = useFormik({
		initialValues: {
			name: props.name,
			avatar: props.avatar,
		},
		validationSchema: ChangeSettingsSchema,
		onSubmit: async (values) => {
			setIsLoading(true);

			const isAvatarValid = checkAvatarValidity(avatar);

			if (!isAvatarValid) {
				setIsLoading(false);
				setReqMessage('Invalid Data');
				return;
			}
			values.avatar = avatar;
			const res = await fetch(`/api/profile/${userId}`, {
				method: 'PATCH',
				body: JSON.stringify(values),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
			});
			const { message } = await res.json();

			if (!res.ok) {
				setIsLoading(false);
				toast.error(
					message || 'Cannot change your settings, please try again later'
				);
				setReqMessage(
					message || 'Cannot change your settings, please try again later'
				);
			} else {
				toast.success(message);
				setIsLoading(false);
				setReqMessage(message);
				login(userId!, token!, avatar!);
				props.onEdit(values.name, values.avatar);
				setTimeout(() => {
					props.onClose();
				}, 3000);
			}
		},
	});
	const { touched, errors, getFieldProps, handleSubmit } = formik;

	const isError = touched.name && errors.name;

	return (
		<FormBox>
			<Toaster position="top-center" richColors />
			<SectionTitle>Change your profile settings</SectionTitle>
			<form onSubmit={handleSubmit} data-testid="edit-form">
				<Input
					label="Username"
					name="name"
					type="text"
					placeholder="Please enter your name..."
					error={errors.name}
					touched={touched.name}
					field={getFieldProps('name')}
					dataCy='username-input'
				/>

				<AvatarsComponent
					onAvatarChange={avatarChangeHandler}
					currentAvatar={avatar}
				/>

				{isLoading ? (
					<Spinner />
				) : (
					<Button type="submit" disabled={!!isError} dataCy='edit-submit'>
						Change your settings
					</Button>
				)}
				{reqMessage ? (
					<p>{reqMessage}</p>
				) : (
					<p>
						By clicking the button below, your profile settings will be{' '}
						<b>updated</b>.
					</p>
				)}
			</form>
			<CloseButton onClick={props.onClose} />
		</FormBox>
	);
};

export default EditProfile;
