import Image from 'next/image';
import classes from './HomeSection.module.scss';
import SlideAnimation from '../../UI/Animations/SlideAnimation';
import Button from '../../UI/Buttons/Button';
import { HomeSectionProps } from '@/types/app';

const HomeSection: React.FC<HomeSectionProps> = ({
	image,
	heading,
	description,
	alt,
	button,
	index,
}) => {
	const isOdd = index! % 2 !== 0;

	return (
		<section className={`${classes.section} ${isOdd ? classes.darker : null}`}>
			<SlideAnimation
				left={isOdd}
				className={`${classes.box} ${isOdd ? classes.reverse : null}`}
			>
				<div className={classes.content}>
					<h2>{heading}</h2>
					<p>{description}</p>
					{button ? (
						<Button className={classes.btn} link href="/login">
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
