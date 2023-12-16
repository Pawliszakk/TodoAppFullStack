import { motion } from 'framer-motion';
import Link from 'next/link';

import classes from './Button.module.scss';
interface ButtonProps {
	children: string | string[];
	link?: boolean;
	href?: string;
	className?: string;
	onClick?: (arg: any) => void;
	type?: 'button' | 'reset' | 'submit';
	disabled?: boolean;
	deleteBtn?: boolean;
	testId?: string;
}

const Button: React.FC<ButtonProps> = ({
	children,
	link,
	href,
	className,
	onClick,
	type,
	disabled,
	deleteBtn,
	testId,
}) => {
	const additionalClass = className ? className : null;

	let dataTestId;
	if (testId) {
		dataTestId = testId;
	} else {
		dataTestId = 'test-button';
	}

	if (link && href) {
		return (
			<motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.7 }}>
				<Link
					href={href}
					className={`${classes.link} ${additionalClass}`}
					data-testid="test-anchor"
				>
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
			className={`${classes.btn} ${additionalClass} ${
				type === 'submit' ? classes.submit : null
			} ${deleteBtn ? classes.delete : null}`}
			disabled={disabled}
			data-testid={dataTestId}
		>
			{children}
		</motion.button>
	);
};

export default Button;
