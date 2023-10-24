import classes from './SectionTitle.module.scss';

interface SectionTitleProps {
	children: string | string[];
	className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className }) => {
	return (
		<h2 className={`${classes.title} ${className ? className : null}`}>
			{children}
		</h2>
	);
};

export default SectionTitle;
