export type SectionProps = {
	image: string;
	alt: string;
	heading: string;
	description: string;
	button?: boolean;
	index?: number;
};

export type Avatar = {
	src: string;
	gender: 'Woman' | 'Man';
};

export type User = {
	avatar: string;
	name: string;
	date: string;
	points: number;
	id?: string;
};

export type CategoryType =
	| 'Health'
	| 'Work'
	| 'House'
	| 'Personal'
	| 'Payments'
	| 'Ideas';

export type Category = {
	icon: JSX.Element;
	category: CategoryType;
	index?: number;
	onTasksShow?: (category: CategoryType) => void;
};

export type Task = {
	title: string;
	description: string;
	category: CategoryType;
	importance: 1 | 2 | 3;
	id: string;
	author: string;
	date: string;
	active: boolean;
};
