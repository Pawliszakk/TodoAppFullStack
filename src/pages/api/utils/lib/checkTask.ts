import type { NextApiRequest, NextApiResponse } from 'next';

export const checkTask = (req: NextApiRequest, res: NextApiResponse) => {
	const { title, description, category, importance } = req.body;

	const isTitleValid = title.trim().length >= 5 && title.trim().length <= 30;
	const descriptionIsValid =
		description.trim().length >= 10 && description.trim().length <= 50;

	const isCategoryValid =
		category === 'health' ||
		category === 'work' ||
		category === 'house' ||
		category === 'personal' ||
		category === 'payments' ||
		category === 'ideas';
	const importanceIsValid =
		importance === '1' || importance === '2' || importance === '3';

	if (
		!isTitleValid ||
		!descriptionIsValid ||
		!isCategoryValid ||
		!importanceIsValid
	) {
		return false;
	}
	return true;
};
