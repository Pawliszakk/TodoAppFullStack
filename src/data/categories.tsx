import { FaHeartbeat } from 'react-icons/fa';
import { FaBriefcase, FaMoneyCheckDollar } from 'react-icons/fa6';
import { BsFillHouseFill } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { PiLightbulbLight } from 'react-icons/pi';
import { Category } from '@/types/app';



export const Categories: Category[] = [
	{ category: 'Health', icon: <FaHeartbeat /> },
	{ category: 'Work', icon: <FaBriefcase /> },
	{ category: 'House', icon: <BsFillHouseFill /> },
	{ category: 'Personal', icon: <AiOutlineUser /> },
	{ category: 'Payments', icon: <FaMoneyCheckDollar /> },
	{ category: 'Ideas', icon: <PiLightbulbLight /> },
];
