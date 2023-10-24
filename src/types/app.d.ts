export type HomeSectionProps = {
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
export type Category = {
	icon: JSX.Element;
	category: 'Health' | 'Work' | 'House' | 'Personal' | 'Payments' | 'Ideas';
	index?: number;
};
