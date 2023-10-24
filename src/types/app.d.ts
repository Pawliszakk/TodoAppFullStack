export type SectionProps = {
	image: string;
	alt: string;
	heading: string;
	description: string;
	button?: boolean;
	index?: number;
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
