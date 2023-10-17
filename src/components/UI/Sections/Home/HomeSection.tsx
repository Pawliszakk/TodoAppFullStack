import Image from 'next/image';
import classes from './HomeSection.module.scss';
import SlideAnimation from '../../Animations/SlideAnimation';
import Button from '../../Buttons/Button';
import { HomeSectionProps } from '@/types/app';

const HomeSection: React.FC<HomeSectionProps> = ({
	image,
	darker,
	heading,
	description,
	reverse,
	alt,
	first,
}) => {
	return (
		<section className={`${classes.section} ${darker ? classes.darker : null}`}>
			<SlideAnimation
				left={reverse}
				className={`${classes.box} ${reverse ? classes.reverse : null}`}
			>
				<div className={classes.content}>
					<h2>{heading}</h2>
					<p>{description}</p>
					{first ? (
						<Button className={classes.btn} link href="/#about">
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
