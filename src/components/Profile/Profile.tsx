import { Task, User } from '@/types/app';
import UserProfile from './UserProfile/UserProfile';
import Panel from './Panel/Panel';

interface ProfileProps {
	user: User;
	tasks: Task[];
}

const Profile: React.FC<ProfileProps> = ({ user, tasks }) => {
	return (
		<>
			<UserProfile
				avatar={user.avatar}
				name={user.name}
				date={user.date}
				points={user.points}
			/>
			<Panel tasks={tasks} />
		</>
	);
};

export default Profile;
