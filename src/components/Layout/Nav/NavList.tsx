import Button from '@/components/UI/Buttons/Button';
import classes from './NavList.module.scss';
import { FaRegMoon } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';
const NavList = () => {
	return (
		<ul className={classes.list}>
			<li>
				<Button className={classes.btn} link href="/login">
					Login
				</Button>
			</li>

			<li>
				<Link href="/login">
					<Image
						src="/assets/avatars/avatarlogout.jpg"
						alt="An avatar of a user"
						width={40}
						height={40}
					/>
					<span>Check Profile</span>
				</Link>
			</li>
		</ul>
	);
};

export default NavList;
