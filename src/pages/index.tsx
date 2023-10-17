import Home from '@/components/Home/Home';
import Head from 'next/head';

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Taskify - Your journey to productivity</title>
				<meta
					name="description"
					content="Welcome to Taskify, your go-to solution for task management and goal accomplishment. Why juggle scattered to-do lists when we've simplified it for you? Make collection of tasks, meticulously designed for your ease, all in one convenient platform for your needs."
				/>
			</Head>
			<Home />
		</>
	);
}
