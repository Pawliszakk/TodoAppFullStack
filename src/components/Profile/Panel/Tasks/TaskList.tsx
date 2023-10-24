import SectionTitle from '@/components/UI/Section/SectionTitle';
import classes from './TaskList.module.scss';

interface TaskListProps {
	currentTasks: string;
}

const TaskList: React.FC<TaskListProps> = ({ currentTasks }) => {
	return (
		<section className={classes.tasks}>
			<SectionTitle>{currentTasks} Tasks</SectionTitle>
			<ul className={classes.taskList}>
				<li>Task1</li>
				<li>Task1</li>
				<li>Task1</li>
				<li>Task1</li>
				<li>Task1</li>
				<li>Task1</li>
				<li>Task1</li>
			</ul>
		</section>
	);
};

export default TaskList;
