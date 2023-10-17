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
	const sectionClasses = `${classes.section} ${className ? className : null} ${
		reverse ? classes.reverse : null
	} ${darker ? classes.darker : null}`;

	return (
		<section className={sectionClasses}>
			<div className={classes.content}>
				<h2>{heading}</h2>
				<p>{description}</p>
			</div>
			<div className={classes.image}>
				<Image src={image} alt={alt} layout="fill" />{' '}
			</div>
		</section>
	);
};

export default HomeSection;

// .image {
// 	max-width: 300px;
// 	margin: 0 auto;
// 	img {
// 		width: 100%;
// 		height: 100%;
// 		position: relative !important;
// 		object-fit: cover;
// 	}
// }
