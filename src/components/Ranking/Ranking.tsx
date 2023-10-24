import HomeSection from '../Home/Sections/HomeSection';
import List from './List/List';
import classes from './Ranking.module.scss';

const Ranking = () => {
	return (
		<>
			<HomeSection
				alt="Ilustration of people standing on podium, one is with flag in hand"
				image="/assets/ilustrations/success.jpg"
				heading="Compete with others!"
				description="Taskify collects points for tasks completed, below you will see the ranking of users who have earned the most points over time"
			/>
			<List />
		</>
	);
};

export default Ranking;
