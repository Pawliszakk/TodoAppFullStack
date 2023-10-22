import Auth from '@/components/Auth/Auth';
import Head from 'next/head';

const LoginPage = () => {
	return (
		<>
			<Head>
				<title>Taskify - Create or login to your account</title>
				<meta
					name="description"
					content="Welcome to Taskify, your go-to solution for task management and goal accomplishment. Why juggle scattered to-do lists when we've simplified it for you? Make collection of tasks, meticulously designed for your ease, all in one convenient platform for your needs."
				/>
			</Head>
			<Auth />
		</>
	);
};

export default LoginPage;
