import { User } from '@/types/app';
import HomeSection from '../Home/Sections/HomeSection';
import List from './List/List';
import classes from './Ranking.module.scss';

interface RankingProps {
	users: User[];
}

const Ranking: React.FC<RankingProps> = ({ users }) => {
	return (
		<>
			<HomeSection
				alt="Ilustration of people standing on podium, one is with flag in hand"
				image="/assets/ilustrations/success.jpg"
				heading="Compete with others!"
				description="Taskify collects points for tasks completed, below you will see the ranking of users who have earned the most points over time"
			/>
			<List users={users} />
		</>
	);
};

export default Ranking;
