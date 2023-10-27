import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const { email, password } = req.body;

		res.status(200).json({ email, password, message: 'To z api	' });
	}
}
