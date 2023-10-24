import Image from 'next/image';
import classes from './HomeSection.module.scss';
import SlideAnimation from '../Animations/SlideAnimation';
import Button from '../Buttons/Button';
import { SectionProps } from '@/types/app';
import SectionTitle from '@/components/UI/Section/SectionTitle';

const Section: React.FC<SectionProps> = ({
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
				className={`${classes.box} ${isOdd ? classes.reverse : null} `}
			>
				<div className={classes.content}>
					<SectionTitle>{heading}</SectionTitle>
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

export default Section;
