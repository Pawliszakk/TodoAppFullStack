import { User } from '@/types/app';
import classes from './List.module.scss';
import UserTile from './UserTile';

interface ListProps {
	users: User[];
}

const List: React.FC<ListProps> = ({ users }) => {
	const headingContent = users.length >= 10 ? '10' : '';

	return (
		<section className={classes.ranking}>
			<h2>Top {headingContent} users list</h2>

			<ul>
				{!users || users.length === 0 ? (
					<p className={classes.error}>
						Failed to fetch users, please try again later...
					</p>
				) : (
					users.map((u, i) => (
						<UserTile
							key={i}
							name={u.name}
							points={u.points}
							date={u.date}
							avatar={u.avatar}
							index={i}
						/>
					))
				)}
			</ul>
		</section>
	);
};

export default List;
