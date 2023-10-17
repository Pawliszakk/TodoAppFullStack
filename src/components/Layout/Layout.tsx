import Nav from './Nav/Nav';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Nav />
			<main>{children}</main>
			<footer>Siema tu footer</footer>
		</>
	);
};

export default Layout;
