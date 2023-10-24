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
};
