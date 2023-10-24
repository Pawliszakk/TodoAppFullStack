import classes from './List.module.scss';
import User from './User';

const List = () => {
	return (
		<section className={classes.ranking}>
			<h2>Top users list</h2>

			<ul>
				<User />
				<User />
				<User />
				<User />
				<User />
			</ul>
		</section>
	);
};

export default List;
