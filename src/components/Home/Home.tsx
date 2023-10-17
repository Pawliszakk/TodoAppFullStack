import HomeSection from '../UI/Sections/Home/HomeSection';

type Section = {
	image: string;
	alt: string;
	heading: string;
	description: string;
	darker?: boolean;
	reverse?: boolean;
	first?: boolean;
};

const sectionsData: Section[] = [
	{
		image: '/assets/ilustrations/planning.jpg',
		alt: 'Ilustration of man and woman',
		heading: 'Your Journey to Productivity.',
		description:
			'Transform Your Dreams into Actionable Tasks and Your Tasks into Achievements, Anytime, Anywhere with Taskify ',
		first: true,
	},
	{
		image: '/assets/ilustrations/ideas.jpg',
		alt: 'Ilustration of man thinking with bulb in background and gears',
		heading: 'But, what is Taskify all about?',
		description:
			"Welcome to Taskify, your go-to solution for task management and goal accomplishment. Why juggle scattered to-do lists when we've simplified it for you? Make collection of tasks, meticulously designed for your ease, all in one convenient platform for your needs.",
		reverse: true,
		darker: true,
	},
	{
		image: '/assets/ilustrations/question.jpg',
		alt: 'Ilustration of man with question mark and monitor in background thinking',
		heading: 'How does Taskify work?',
		description:
			"Below, you'll find a step-by-step tutorial that guides you on how to use the application and accomplish your goals, much like this.",
	},
	{
		image: '/assets/ilustrations/login.jpg',
		alt: 'Ilustration of man and woman on login form in background probably logging into application',
		heading: 'First Step - Making account',
		description:
			'Create an account so we can assign your tasks, your points, to your account!',
		reverse: true,
		darker: true,
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
		reverse: true,
		darker: true,
	},
];

const Home = () => {
	return (
		<>
			{sectionsData.map((data, i) => (
				<HomeSection
					key={i}
					image={data.image}
					alt={data.alt}
					heading={data.heading}
					description={data.description}
					darker={data.darker}
					reverse={data.reverse}
					first={data.first}
				/>
			))}
		</>
	);
};

export default Home;
