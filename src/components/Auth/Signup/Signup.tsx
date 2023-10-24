import FormBox from '@/components/UI/Form/FormBox';
import classes from './Signup.module.scss';
import Button from '@/components/UI/Buttons/Button';
import { useFormik } from 'formik';
import { SignupSchema } from '../../../utils/validation';
import Input from '@/components/UI/Form/Input';
import { useState } from 'react';
import Image from 'next/image';
import SectionTitle from '@/components/UI/Section/SectionTitle';

type Avatar = {
	src: string;
	gender: 'Woman' | 'Man';
};

const avatarArray: Avatar[] = [
	{ src: '/assets/avatars/avatar1.jpg', gender: 'Man' },
	{ src: '/assets/avatars/avatar2.jpg', gender: 'Woman' },
	{ src: '/assets/avatars/avatar3.jpg', gender: 'Woman' },
	{ src: '/assets/avatars/avatar4.jpg', gender: 'Man' },
	{ src: '/assets/avatars/avatar5.jpg', gender: 'Woman' },
	{ src: '/assets/avatars/avatar6.jpg', gender: 'Woman' },
	{ src: '/assets/avatars/avatar7.jpg', gender: 'Man' },
	{ src: '/assets/avatars/avatar8.jpg', gender: 'Woman' },
	{ src: '/assets/avatars/avatar9.jpg', gender: 'Woman' },
	{ src: '/assets/avatars/avatar10.jpg', gender: 'Woman' },
	{ src: '/assets/avatars/avatar11.jpg', gender: 'Man' },
	{ src: '/assets/avatars/avatar12.jpg', gender: 'Woman' },
	{ src: '/assets/avatars/avatar13.jpg', gender: 'Man' },
	{ src: '/assets/avatars/avatar14.jpg', gender: 'Man' },
	{ src: '/assets/avatars/avatar15.jpg', gender: 'Man' },
];

interface LoginProps {
	onFormChange: (number: number) => void;
}

const Signup: React.FC<LoginProps> = ({ onFormChange }) => {
	const [isMen, setIsMen] = useState(false);
	const [avatar, setAvatar] = useState('/assets/avatars/avatar2.jpg');

	const menAvatarsHandler = () => {
		setIsMen(true);
		setAvatar('/assets/avatars/avatar1.jpg');
	};
	const womenAvatarsHandler = () => {
		setIsMen(false);
		setAvatar('/assets/avatars/avatar2.jpg');
	};

	const avatars = avatarArray.filter(
		(a) => a.gender === (isMen ? 'Man' : 'Woman')
	);

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
			avatar: '/assets/avatars/avatar1.jpg',
		},
		validationSchema: SignupSchema,
		onSubmit: (values) => {
			if (!avatar) {
				return;
			}
			values.avatar = avatar;
			console.log(values);

			//SEND DATA TO API
		},
	});

	return (
		<FormBox>
			<SectionTitle>Sign Up</SectionTitle>
			<p>Create an account for free</p>

			<form onSubmit={formik.handleSubmit}>
				<Input
					label="Username"
					name="name"
					type="text"
					placeholder="Please enter your name..."
					error={formik.errors.name}
					touched={formik.touched.name}
					field={formik.getFieldProps('name')}
				/>
				<Input
					label="E-mail"
					name="email"
					type="email"
					placeholder="Please enter your email..."
					error={formik.errors.email}
					touched={formik.touched.email}
					field={formik.getFieldProps('email')}
				/>
				<Input
					label="Password"
					name="password"
					type="password"
					placeholder="Please enter your password..."
					error={formik.errors.password}
					touched={formik.touched.password}
					field={formik.getFieldProps('password')}
				/>
				<div className={classes.avatar}>
					<p>Choose your avatar</p>
					<div className={classes.buttons}>
						<button
							type="button"
							onClick={menAvatarsHandler}
							className={isMen ? classes.active : undefined}
						>
							Men
						</button>
						<button
							type="button"
							onClick={womenAvatarsHandler}
							className={!isMen ? classes.active : undefined}
						>
							Women
						</button>
					</div>
					<div>
						{avatars.map((a, i) => (
							<div
								key={i}
								className={`${classes.tile} ${
									a.src === avatar ? classes.active : null
								}`}
								onClick={() => setAvatar(a.src)}
							>
								<Image src={a.src} alt="Avatar of a user" layout="fill" />
							</div>
						))}
					</div>
				</div>
				<Button type="submit">Sign Up</Button>
			</form>

			<p>
				Already a user? <span onClick={() => onFormChange(2)}>Login</span>
			</p>
		</FormBox>
	);
};

export default Signup;
