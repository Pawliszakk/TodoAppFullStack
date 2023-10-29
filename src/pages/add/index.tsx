import { useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@/context/auth-context';

import AddTask from '@/components/AddTask/AddTask';

const AddTaskPage = () => {
	const { isLoggedIn } = useContext(AuthContext);
	const router = useRouter();

	if (!isLoggedIn && typeof window !== 'undefined') {
		router.push('/');
	}

	return <AddTask />;
};

export default AddTaskPage;
