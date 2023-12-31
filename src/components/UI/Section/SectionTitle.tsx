import classes from './SectionTitle.module.scss';

interface SectionTitleProps {
	children: string | string[];
	className?: string;
	dataCy?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
	children,
	className,
	dataCy,
}) => {
	return (
		<h2
			data-cy={dataCy}
			className={`${classes.title} ${className ? className : null}`}
		>
			{children}
		</h2>
	);
};

export default SectionTitle;
