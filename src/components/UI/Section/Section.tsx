import { useContext } from 'react';
import { AuthContext } from '@/context/auth-context';
import { SectionProps } from '@/types/app';
import Image from 'next/image';

import classes from './Section.module.scss';
import SlideAnimation from '../Animations/SlideAnimation';
import Button from '../Buttons/Button';
import SectionTitle from '@/components/UI/Section/SectionTitle';

const Section: React.FC<SectionProps> = ({
	image,
	heading,
	description,
	alt,
	button,
	index,
	ranking,
}) => {
	const { isLoggedIn, userId, token } = useContext(AuthContext);

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
					{button && isLoggedIn && (
						<Button
							className={classes.btn}
							link
							href={`/profile/${userId}/?token=${token}`}
						>
							Go to your profile
						</Button>
					)}
					{button && !isLoggedIn && (
						<Button className={classes.btn} link href="/login">
							{"Let's get started"}
						</Button>
					)}
				</div>
				<div className={classes.image}>
					<Image
						src={image}
						alt={alt}
						priority={image === '/assets/ilustrations/planning.jpg' || ranking}
						width={500}
						height={500}
					/>
				</div>
			</SlideAnimation>
		</section>
	);
};

export default Section;
