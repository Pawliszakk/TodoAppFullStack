import Image from 'next/image';
import classes from './HomeSection.module.scss';

interface HomeSectionProps {
	image: string;
	alt: string;
	darker?: boolean;
	heading: string;
	description: string;
	className?: string;
	reverse?: boolean;
}

const HomeSection: React.FC<HomeSectionProps> = ({
	image,
	darker,
	heading,
	description,
	className,
	reverse,
	alt,
}) => {
	const sectionClasses = `${classes.section} ${className ? className : null}  ${
		darker ? classes.darker : null
	}`;

	return (
		<section className={sectionClasses}>
			<div className={`${classes.box} ${reverse ? classes.reverse : null}`}>
				<div className={classes.content}>
					<h2>{heading}</h2>
					<p>{description}</p>
				</div>
				<div className={classes.image}>
					<Image src={image} alt={alt} layout="fill" />{' '}
				</div>
			</div>
		</section>
	);
};

export default HomeSection;
