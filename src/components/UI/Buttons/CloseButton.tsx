import { motion } from 'framer-motion';

import classes from './CloseButton.module.scss';
import { AiFillCloseCircle } from 'react-icons/ai';

interface CloseButtonProps {
	onClick: () => void;
	className?: string;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClick, className }) => {
	return (
		<motion.div
			whileHover={{ scale: 0.9 }}
			whileTap={{ scale: 0.6 }}
			className={`${classes.close} ${className ? className : null}`}
			onClick={onClick}
			data-testid="test-close"
		>
			<AiFillCloseCircle data-testid="test-icon" />
		</motion.div>
	);
};

export default CloseButton;
