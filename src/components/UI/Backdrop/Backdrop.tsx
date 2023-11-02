import React from 'react';
import Portal from '@/utils/Portal';
import { AnimatePresence, motion } from 'framer-motion';
import classes from './Backdrop.module.scss';
interface BackdropProps {
	children: React.ReactNode;
	onClose: () => void;
	isVisible: boolean;
}

const Backdrop: React.FC<BackdropProps> = ({
	children,
	onClose,
	isVisible,
}) => {
	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (
			e.target instanceof HTMLDivElement &&
			e.target.className === classes.backdrop
		) {
			onClose();
		}
	};
	return (
		<Portal>
			<AnimatePresence>
				{isVisible && (
					<motion.div
						onClick={handleClick}
						className={classes.backdrop}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>
		</Portal>
	);
};

export default Backdrop;
