import Button from '@/components/UI/Buttons/Button';
import classes from './Start.module.scss';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Image from 'next/image';
const Start = () => {
	return (
		<section className={classes.start}>
			<div className={classes.content}>
				<h2>Your Journey to Productivity.</h2>
				<p>
					Transform Your Dreams into Actionable Tasks and Your Tasks into
					Achievements, Anytime, Anywhere with{' '}
					<span>
						Taskify <AiOutlineCheckCircle />
					</span>
				</p>
				<Button link href="/#about">
					Let{"'"}s get started
				</Button>
			</div>
			<div className={classes.image}>
				<Image
					src="/assets/ilustrations/planning.jpg"
					alt="An ilustration of two people planning on laptop something"
					layout="fill"
				/>
			</div>
		</section>
	);
};

export default Start;
