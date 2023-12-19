import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SlideAnimationProps {
	className?: string;
	children: ReactNode;
	left?: boolean;
	delay?: number;
	list?: boolean;
}

const SlideAnimation: React.FC<SlideAnimationProps> = ({
	className,
	children,
	left,
	list,
	delay,
}) => {
	if (list) {
		return (
			<motion.li
				className={className}
				initial={{ opacity: 0, x: left ? 50 : -50 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{
					once: true,
				}}
				transition={{ delay: delay ? delay : 0.3 }}
			>
				{children}
			</motion.li>
		);
	}

	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, x: left ? 50 : -50 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ delay: delay ? delay : 0.3 }}
			viewport={{
				once: true,
			}}
		>
			{children}
		</motion.div>
	);
};

export default SlideAnimation;
