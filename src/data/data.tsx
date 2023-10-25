import { FaHeartbeat } from 'react-icons/fa';
import { FaBriefcase, FaMoneyCheckDollar } from 'react-icons/fa6';
import { BsFillHouseFill } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { PiLightbulbLight } from 'react-icons/pi';
import { Avatar, Category, SectionProps } from '@/types/app';

export const Categories: Category[] = [
	{ category: 'Health', icon: <FaHeartbeat /> },
	{ category: 'Work', icon: <FaBriefcase /> },
	{ category: 'House', icon: <BsFillHouseFill /> },
	{ category: 'Personal', icon: <AiOutlineUser /> },
	{ category: 'Payments', icon: <FaMoneyCheckDollar /> },
	{ category: 'Ideas', icon: <PiLightbulbLight /> },
];

export const HomeSectionsData: SectionProps[] = [
	{
		image: '/assets/ilustrations/planning.jpg',
		alt: 'Ilustration of man and woman',
		heading: 'Your Journey to Productivity.',
		description:
			'Transform Your Dreams into Actionable Tasks and Your Tasks into Achievements, Anytime, Anywhere with Taskify ',
		button: true,
	},
	{
		image: '/assets/ilustrations/ideas.jpg',
		alt: 'Ilustration of man thinking with bulb in background and gears',
		heading: 'But, what is Taskify all about?',
		description:
			"Welcome to Taskify, your go-to solution for task management and goal accomplishment. Why juggle scattered to-do lists when we've simplified it for you? Make collection of tasks, meticulously designed for your ease, all in one convenient platform for your needs.",
	},
	{
		image: '/assets/ilustrations/question.jpg',
		alt: 'Ilustration of man with question mark and monitor in background thinking',
		heading: 'How does Taskify work?',
		description:
			"Below, you'll find a step-by-step tutorial that guides you on how to use the application and accomplish your goals, much like this.",
	},
	{
		image: '/assets/ilustrations/loginCream.jpg',
		alt: 'Ilustration of man and woman on login form in background probably logging into application',
		heading: 'First Step - Making account',
		description:
			'Create an account so we can assign your tasks, your points, to your account!',
	},
	{
		image: '/assets/ilustrations/planning.jpg',
		alt: 'Ilustration of man and woman planning something with border and laptop',
		heading: 'Second Step - Create ',
		description:
			'Create tasks! give the task a title, description, category, date of completion, and level of importance',
	},
	{
		image: '/assets/ilustrations/success.jpg',
		alt: 'Ilustration of man and woman planning something with border and laptop',
		heading: 'Third Step - Perform tasks',
		description:
			"That's it, create tasks, finish them, collect points! It's that simple!",
		button: true,
	},
];

export const Avatars: Avatar[] = [
	{ src: '/assets/avatars/avatar1.jpg', gender: 'Man' },
	{ src: '/assets/avatars/avatar2.jpg', gender: 'Woman' },
	{ src: '/assets/avatars/avatar3.jpg', gender: 'Woman' },
	{ src: '/assets/avatars/avatar4.jpg', gender: 'Man' },
	{ src: '/assets/avatars/avatar5.jpg', gender: 'Woman' },
	{ src: '/assets/avatars/avatar6.jpg', gender: 'Woman' },
	{ src: '/assets/avatars/avatar7.jpg', gender: 'Man' },
	{ src: '/assets/avatars/avatar8.jpg', gender: 'Woman' },
	{ src: '/assets/avatars/avatar9.jpg', gender: 'Woman' },
	{ src: '/assets/avatars/avatar10.jpg', gender: 'Woman' },
	{ src: '/assets/avatars/avatar11.jpg', gender: 'Man' },
	{ src: '/assets/avatars/avatar12.jpg', gender: 'Woman' },
	{ src: '/assets/avatars/avatar13.jpg', gender: 'Man' },
	{ src: '/assets/avatars/avatar14.jpg', gender: 'Man' },
	{ src: '/assets/avatars/avatar15.jpg', gender: 'Man' },
];
