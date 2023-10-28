import LoadingSpinner from '@/components/UI/LoadingSpinner/LoadingSpinner';
import { Task, User } from '@/types/app';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const UserProfile = dynamic(
	() => import('@/components/Profile/UserProfile/UserProfile'),
	{
		loading: () => <LoadingSpinner />,
	}
);
const Panel = dynamic(() => import('@/components/Profile/Panel/Panel'), {
	loading: () => <LoadingSpinner />,
});
interface ProfilePageProps {
	user: User;
	tasks: Task[];
}

const ProfilePage: NextPage<ProfilePageProps> = ({ user, tasks }) => {
	return (
		<>
			<Head>
				<title>Taskify - Create or login to your account</title>
				<meta
					name="description"
					content="Welcome to Taskify, your go-to solution for task management and goal accomplishment. Why juggle scattered to-do lists when we've simplified it for you? Make collection of tasks, meticulously designed for your ease, all in one convenient platform for your needs."
				/>
			</Head>

			<UserProfile
				avatar={user.avatar}
				name={user.name}
				date={user.date}
				points={user.points}
			/>
			<Panel tasks={tasks} />
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
	const user: User = {
		avatar: '/assets/avatars/avatar11.jpg',
		name: 'John Doe',
		date: '2023-10-24',
		points: 123,
		id: '2',
	};

	const userId = params.userId;

	const res = await fetch(`${process.env.DOMAIN_URL}/api/profile/${userId}`);
	// const resData = await res.json();

	return {
		props: {
			user,
			tasks: [],
		},
	};

	// return {
	// 	props: {
	// 		user,
	// 		tasks: resData.tasks,
	// 	},
	// };
};
