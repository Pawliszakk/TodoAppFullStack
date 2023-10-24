import { User } from '@/types/app';
import Section from '../UI/Section/Section';
import List from './List/List';

interface RankingProps {
	users: User[];
}

const Ranking: React.FC<RankingProps> = ({ users }) => {
	return (
		<>
			<Section
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
