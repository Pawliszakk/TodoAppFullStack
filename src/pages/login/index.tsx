import LoadingSpinner from '@/components/UI/LoadingSpinner/LoadingSpinner';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const Auth = dynamic(() => import('@/components/Auth/Auth'), {
	loading: () => <LoadingSpinner />,
});

const LoginPage = () => {
	return (
		<>
			<Head>
				<title>TaskPro - Create or login to your account</title>
				<meta
					name="description"
					content="Welcome to TaskPro, your go-to solution for task management and goal accomplishment. Why juggle scattered to-do lists when we've simplified it for you? Make collection of tasks, meticulously designed for your ease, all in one convenient platform for your needs."
				/>
			</Head>
			<Auth />
		</>
	);
};

export default LoginPage;
