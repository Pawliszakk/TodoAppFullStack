import { useContext, useState } from 'react';
import { AuthContext } from '@/context/auth-context';
import { CategoryType, Task } from '@/types/app';
import { Categories } from '@/data/data';

import SlideAnimation from '@/components/UI/Animations/SlideAnimation';
import classes from './TaskTile.module.scss';
import Button from '@/components/UI/Buttons/Button';
import CloseButton from '@/components/UI/Buttons/CloseButton';
import Spinner from '@/components/UI/LoadingSpinner/Spinner';
import Backdrop from '@/components/UI/Backdrop/Backdrop';
import EditTask from '../EditForm/EditForm';

const TaskTile: React.FC<
	Task & {
		onDelete: (id: string) => void;
		onFinish: (id: string) => void;
	}
> = ({
	title,
	description,
	category,
	importance,
	id,
	author,
	date,
	onDelete,
	onFinish,
	active,
}) => {
	const [taskProperties, setTaskProperties] = useState({
		title,
		description,
		category,
		importance,
	});

	const [isLoading, setIsLoading] = useState(false);
	const [isEdit, setIsEdit] = useState(false);

	const { token } = useContext(AuthContext);

	const hideEditHandler = () => setIsEdit(false);
	const showEditHandler = () => setIsEdit(true);

	const onTaskEdit = (
		title: string,
		description: string,
		category: CategoryType,
		importance: '1' | '2' | '3'
	) => {
		setTaskProperties({ title, description, category, importance });
	};

	const categoryIcon = Categories.find((cat) => cat.category === category);

	const deleteTaskHandler = async () => {
		setIsLoading(true);
		const res = await fetch('/api/task', {
			method: 'DELETE',
			body: JSON.stringify({ id, author }),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
		const resData = await res.json();
		if (res.ok) {
			onDelete(id);
		} else {
			setIsLoading(false);
		}
	};

	const finishTaskHandler = async () => {
		setIsLoading(true);
		const res = await fetch('/api/task', {
			method: 'PATCH',
			body: JSON.stringify({ id, author }),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		});
		const resData = await res.json();
		if (res.ok) {
			onFinish(id);
		}
		setIsLoading(false);
	};

	return (
		<SlideAnimation list className={classes.task}>
			{isLoading ? (
				<Spinner />
			) : (
				<>
					<h3>
						{taskProperties.title} {categoryIcon!.icon}
					</h3>
					<hr />
					<p>{taskProperties.description}</p>
					<p className={classes.date}>Date: {date}</p>
					<p className={classes.importance}>
						Importance: {taskProperties.importance}
					</p>
					<p>
						Category:{' '}
						<span className={classes.category}>{taskProperties.category}</span>{' '}
						{categoryIcon!.icon}
					</p>
					{active ? (
						<>
							<div className={classes.buttons}>
								<Button onClick={showEditHandler}>Edit Task</Button>
								<Button onClick={finishTaskHandler} className={classes.finish}>
									Finish Task
								</Button>
							</div>
							<CloseButton onClick={deleteTaskHandler} />
						</>
					) : (
						<div className={classes.buttons}>
							<Button onClick={deleteTaskHandler} className={classes.delete}>
								Delete Task
							</Button>
						</div>
					)}
					{isEdit && (
						<Backdrop onClose={hideEditHandler} isVisible={isEdit}>
							<EditTask
								onClose={hideEditHandler}
								title={title}
								description={description}
								category={category}
								importance={importance}
								id={id}
								onTaskEdit={onTaskEdit}
							/>
						</Backdrop>
					)}
				</>
			)}
		</SlideAnimation>
	);
};

export default TaskTile;
