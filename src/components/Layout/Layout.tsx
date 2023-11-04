import { useContext } from 'react';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import { AuthContext } from '@/context/auth-context';
import AddTaskButton from '../UI/Buttons/AddTaskButton';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const { isLoggedIn } = useContext(AuthContext);

	return (
		<>
			<Nav />
			<main>{children}</main>
			<Footer />
			{isLoggedIn && <AddTaskButton />}
		</>
	);
};

export default Layout;
