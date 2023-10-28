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
				ranking
			/>
			<List users={users} />
		</>
	);
};

export default RankingPage;

export const getServerSideProps = async () => {
	let users;

	try {
		const res = await fetch(`${process.env.DOMAIN_URL}/api/users`);
		const resData = await res.json();
		users = resData.users;
	} catch (err) {
		users = [];
	}

	return {
		props: {
			users,
		},
	};
};
