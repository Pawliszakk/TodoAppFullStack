import Backdrop from '../UI/Backdrop/Backdrop';
import FormBox from '../UI/Form/FormBox';
import classes from './AddTask.module.scss';

interface AddTaskProps {
	onClose: () => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onClose }) => {

	return (
		<FormBox className={classes.box} >
			<h1>Kiedyś tu będzie formularz, jeżeli mi sie zechce</h1>
		</FormBox>
	);
};

export default AddTask;
