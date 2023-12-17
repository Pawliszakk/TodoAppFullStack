import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/auth-context';

import AddTask from '@/components/AddTask/AddTask';
import Head from 'next/head';

const AddTaskPage = () => {
	const { isLoggedIn } = useContext(AuthContext);
	const router = useRouter();

	useEffect(() => {
		if (!isLoggedIn) {
			router.push('/');
		}
	}, []);

	return (
		<>
			<Head>
				<title>TaskPro - Create New Task</title>
				<meta
					name="description"
					content="Create a new task in TaskPro, your go-to solution for task management and goal accomplishment. Simplify your to-do list and keep everything organized in one convenient platform for your needs."
				/>
			</Head>
			<AddTask />
		</>
	);
};

export default AddTaskPage;
