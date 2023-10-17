import Button from '@/components/UI/Buttons/Button';
import classes from './NavList.module.scss';
import { FaRegMoon } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';
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
					<Image
						src="/assets/avatars/avatarlogout.jpg"
						alt="An avatar of a user"
						width={30}
						height={30}
					/>
				</Link>
			</li>
		</ul>
	);
};

export default NavList;
