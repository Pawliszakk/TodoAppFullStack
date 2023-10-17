import Button from '@/components/UI/Buttons/Button';
import classes from './NavList.module.scss';
import { FaRegMoon } from 'react-icons/fa6';
import Link from 'next/link';

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
			<li>
				<Link href="/profile/id2">
					<img
						style={{ width: '30px' }}
						src="/assets/avatars/avatarlogout.jpg"
						alt="An avatar of a user"
					/>
				</Link>
			</li>
			<li>Link1</li>
		</ul>
	);
};

export default NavList;
