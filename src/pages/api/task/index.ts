import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	message: string;
	task: any;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	if (req.method === 'POST') {
		const { title, description, category, importance, author } = req.body;
		const task = {
			title,
			description,
			category,
			importance,
			author,
		};
		//Zapisanie w bazie danych
		res.status(200).json({ message: 'Witaj to twój task', task });
	}
}
