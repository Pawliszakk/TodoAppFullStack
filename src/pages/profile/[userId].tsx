import LoadingSpinner from '@/components/UI/LoadingSpinner/LoadingSpinner';
import { User } from '@/types/app';
import { GetServerSidePropsContext, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Profile = dynamic(() => import('@/components/Profile/Profile'), {
	loading: () => <LoadingSpinner />,
});

interface ProfilePageProps {
	user: User;
}

const ProfilePage: NextPage<ProfilePageProps> = ({ user }) => {
	return (
		<>
			<Head>
				<title>Taskify - Create or login to your account</title>
				<meta
					name="description"
					content="Welcome to Taskify, your go-to solution for task management and goal accomplishment. Why juggle scattered to-do lists when we've simplified it for you? Make collection of tasks, meticulously designed for your ease, all in one convenient platform for your needs."
				/>
			</Head>
			<Profile user={user} />
		</>
	);
};

export default ProfilePage;

export const getServerSideProps = async ({
	params,
}: {
	params: {
		userId: string;
	};
}) => {
	const userId = params.userId;

	const user: User = {
		avatar: '/assets/avatars/avatar11.jpg',
		name: 'John Doe',
		date: '2023-10-24',
		points: 123,
		id: '2',
	};

	return {
		props: {
			user,
		},
	};
};
