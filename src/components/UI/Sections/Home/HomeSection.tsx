import Image from 'next/image';
import classes from './HomeSection.module.scss';
import SlideAnimation from '../../Animations/SlideAnimation';
import Button from '../../Buttons/Button';
interface HomeSectionProps {
	image: string;
	alt: string;
	darker?: boolean;
	heading: string;
	description: string;
	className?: string;
	reverse?: boolean;
	first?: boolean;
}

const HomeSection: React.FC<HomeSectionProps> = ({
	image,
	darker,
	heading,
	description,
	className,
	reverse,
	alt,
	first,
}) => {
	const sectionClasses = `${classes.section} ${className ? className : null}  ${
		darker ? classes.darker : null
	}`;
	console.log(first);
	return (
		<section className={sectionClasses}>
			<SlideAnimation
				left={reverse}
				className={`${classes.box} ${reverse ? classes.reverse : null}`}
			>
				<div className={classes.content}>
					<h2>{heading}</h2>
					<p>{description}</p>
					{first ? (
						<Button link href="/#about">
							{"Let's get started"}
						</Button>
					) : null}
				</div>
				<div className={classes.image}>
					<Image src={image} alt={alt} layout="fill" />{' '}
				</div>
			</SlideAnimation>
		</section>
	);
};

export default HomeSection;
