import Portal from '@/utils/Portal';
import classes from './Backdrop.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
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
	return (
		<Portal>
			<AnimatePresence>
				{isVisible && (
					<motion.div
						key="AddTask"
						onClick={onClose}
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
