import classes from './Footer.module.scss';
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={classes.footer}>
			<span>
				TaskPro <AiOutlineCheckCircle />
			</span>
			<hr />
			<div className={classes.box}>
				<a href="https://www.pawliszakdev.com/" target="_blank" rel="noopener">
					Author
				</a>
				<a
					href="https://github.com/Pawliszakk/TodoAppFullStack"
					target="_blank"
					rel="noopener"
				>
					Github Repo
				</a>
			</div>
			<div className={classes.adnotation}>
				<p>
					Ilustration images by{' '}
					<a href="https://www.freepik.com/author/vectorjuice" target="_blank">
						vectorjuice
					</a>{' '}
					on{' '}
					<a href="https://www.freepik.com/" target="_blank">
						freepik
					</a>
				</p>
				<span>{currentYear}</span>
			</div>
		</footer>
	);
};

export default Footer;
