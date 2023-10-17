import Link from 'next/link';
import classes from './Nav.module.scss';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import NavList from './NavList';
const Nav = () => {
	return (
		<header className={classes.header}>
			<nav>
				<h1>
					<Link href="/">
						Taskify <AiOutlineCheckCircle />
					</Link>
				</h1>
				<NavList />
			</nav>
		</header>
	);
};

export default Nav;
