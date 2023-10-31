import { useState } from 'react';

import LoadingSpinner from '@/components/UI/LoadingSpinner/LoadingSpinner';
import { Task, User } from '@/types/app';
import { GetServerSidePropsContext, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect } from 'react';

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
	const [points, setPoints] = useState<number | null>(null);

	const userPointsHandler = () => setPoints((prev) => (prev! += 10));

	useEffect(() => {
		window.history.replaceState({}, document.title, user.name);
		if (user) {
			setPoints(user.points);
		}
	}, []);

	return (
		<>
			<Head>
				<title>Taskify - Create or login to your account</title>
				<meta
					name="description"
					content="Welcome to TaskPro, your go-to solution for task management and goal accomplishment. Why juggle scattered to-do lists when we've simplified it for you? Make collection of tasks, meticulously designed for your ease, all in one convenient platform for your needs."
				/>
			</Head>

			<UserProfile
				avatar={user.avatar}
				name={user.name}
				date={user.date}
				points={points}
			/>
			<Panel tasks={tasks} pointsHandler={userPointsHandler} />
		</>
	);
};

export default ProfilePage;

export const getServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const { userId } = context.params || {};
	const { token } = context.query;
	let user;
	let tasks;
	const res = await fetch(`${process.env.DOMAIN_URL}/api/profile/${userId}`, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});
	const resData = await res.json();

	if (!res.ok) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}
	user = resData.user;
	tasks = resData.tasks;

	return {
		props: {
			user,
			tasks,
		},
	};
};
