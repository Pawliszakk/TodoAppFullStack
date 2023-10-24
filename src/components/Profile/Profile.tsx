import { User } from '@/types/app';
import UserProfile from './UserProfile/UserProfile';
import Panel from './Panel/Panel';

interface ProfileProps {
	user: User;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
	return (
		<>
			<UserProfile
				avatar={user.avatar}
				name={user.name}
				date={user.date}
				points={user.points}
			/>
			<Panel />
		</>
	);
};

export default Profile;
