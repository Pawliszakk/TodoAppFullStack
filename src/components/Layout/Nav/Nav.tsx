import { useEffect, useState } from 'react';
import Link from 'next/link';

import classes from './Nav.module.scss';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import NavList from './NavList';

const Nav = () => {
	const [isNavScrolled, setIsNavScrolled] = useState(false);

	const handleNavScroll = () => {
		window.scrollY > 0 ? setIsNavScrolled(true) : setIsNavScrolled(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleNavScroll);
	}, []);

	return (
		<header
			className={`${classes.header} ${isNavScrolled ? classes.blur : null}`}
			data-testid="test-header"
		>
			<nav>
				<h1>
					<Link href="/">
						TaskPro <AiOutlineCheckCircle />
					</Link>
				</h1>
				<NavList />
			</nav>
		</header>
	);
};

export default Nav;
