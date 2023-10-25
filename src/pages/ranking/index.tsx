import LoadingSpinner from '@/components/UI/LoadingSpinner/LoadingSpinner';
import { User } from '@/types/app';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Section = dynamic(() => import('@/components/UI/Section/Section'), {
	loading: () => <LoadingSpinner />,
});
const List = dynamic(() => import('@/components/Ranking/List/List'), {
	loading: () => <LoadingSpinner />,
});

interface RankingPageProps {
	users: User[];
}

const RankingPage: NextPage<RankingPageProps> = ({ users }) => {
	return (
		<>
			<Head>
				<title>Taskify - Create or login to your account</title>
				<meta
					name="description"
					content="Welcome to Taskify, your go-to solution for task management and goal accomplishment. Why juggle scattered to-do lists when we've simplified it for you? Make collection of tasks, meticulously designed for your ease, all in one convenient platform for your needs."
				/>
			</Head>
			<Section
				alt="Ilustration of people standing on podium, one is with flag in hand"
				image="/assets/ilustrations/success.jpg"
				heading="Compete with others!"
				description="Taskify collects points for tasks completed, below you will see the ranking of users who have earned the most points over time"
			/>
			<List users={users} />
		</>
	);
};

export default RankingPage;

export const getServerSideProps = async () => {
	const users = [
		{
			avatar: '/assets/avatars/avatar1.jpg',
			name: 'John Doe',
			date: '2023-10-24',
			points: 100,
		},
		{
			avatar: '/assets/avatars/avatar2.jpg',
			name: 'Alice Smith',
			date: '2023-10-22',
			points: 75,
		},
		{
			avatar: '/assets/avatars/avatar3.jpg',
			name: 'Bob Johnson',
			date: '2023-10-20',
			points: 120,
		},
		{
			avatar: '/assets/avatars/avatar4.jpg',
			name: 'Eva Williams',
			date: '2023-10-18',
			points: 90,
		},
		{
			avatar: '/assets/avatars/avatar5.jpg',
			name: 'Grace Wilson',
			date: '2023-10-15',
			points: 80,
		},
	];

	return {
		props: {
			users,
		},
	};
};
