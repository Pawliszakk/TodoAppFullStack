import Auth from '@/components/Auth/Auth';
import Head from 'next/head';

const LoginPage = () => {
	return (
		<>
			<Head>
				<title>Taskify - Create or login to your account</title>
			</Head>
			<Auth />
		</>
	);
};

export default LoginPage;
