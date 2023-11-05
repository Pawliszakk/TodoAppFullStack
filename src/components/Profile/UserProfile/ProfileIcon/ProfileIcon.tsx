import { motion } from 'framer-motion';

import classes from './ProfileIcon.module.scss';
import { FaEdit, FaUserLock } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

interface ProfileIconProps {
	onClick: () => void;
	delete?: boolean;
	password?: boolean;
	edit?: boolean;
}

const ProfileIcon: React.FC<ProfileIconProps> = (props) => {
	let additionalClass;
	let icon;

	if (props.delete) {
		additionalClass = classes.delete;
		icon = <AiOutlineClose />;
	}
	if (props.edit) {
		additionalClass = classes.edit;
		icon = <FaEdit />;
	}
	if (props.password) {
		additionalClass = classes.password;
		icon = <FaUserLock />;
	}

	return (
		<motion.div
			whileTap={{ scale: 0.5 }}
			whileHover={{ scale: 0.9 }}
			className={`${classes.icon} ${additionalClass}`}
			onClick={props.onClick}
		>
			{icon}
		</motion.div>
	);
};

export default ProfileIcon;
