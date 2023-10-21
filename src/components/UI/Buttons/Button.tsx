import Link from 'next/link';
import classes from './Button.module.scss';

interface ButtonProps {
	children: string;
	link?: boolean;
	href?: string;
	className?: string;
	onClick: (arg: any) => void;
}

const Button: React.FC<ButtonProps> = ({
	children,
	link,
	href,
	className,
	onClick,
}) => {
	const additionalClass = className ? className : null;

	if (link && href) {
		return (
			<Link href={href} className={`${classes.link} ${additionalClass}`}>
				{children}
			</Link>
		);
	}

	return (
		<button onClick={onClick} className={`${classes.btn} ${additionalClass}`}>
			{children}
		</button>
	);
};

export default Button;
