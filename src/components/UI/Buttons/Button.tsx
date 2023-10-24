import Link from 'next/link';
import classes from './Button.module.scss';
import { motion } from 'framer-motion';
interface ButtonProps {
	children: string;
	link?: boolean;
	href?: string;
	className?: string;
	onClick?: (arg: any) => void;
	type?: 'button' | 'reset' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
	children,
	link,
	href,
	className,
	onClick,
	type,
}) => {
	const additionalClass = className ? className : null;

	if (link && href) {
		return (
			<motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.7 }}>
				<Link href={href} className={`${classes.link} ${additionalClass}`}>
					{children}
				</Link>
			</motion.div>
		);
	}

	return (
		<motion.button
			whileHover={{ scale: 0.95 }}
			whileTap={{ scale: 0.7 }}
			onClick={onClick}
			type={type ? type : 'button'}
			className={`${classes.btn} ${additionalClass}`}
		>
			{children}
		</motion.button>
	);
};

export default Button;
