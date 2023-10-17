import Button from '@/components/UI/Buttons/Button';
import classes from './NavList.module.scss';
import { FaRegMoon } from 'react-icons/fa6';

const NavList = () => {
	return (
		<ul className={classes.list}>
			<li>
				<Button link href="/login">
					Login
				</Button>
			</li>
			<li>
				<FaRegMoon />
			</li>
			<li>Link1</li>
			<li>Link1</li>
		</ul>
	);
};

export default NavList;
