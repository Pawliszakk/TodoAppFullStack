import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export const checkAuth = (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const token = req.headers.authorization?.split(' ')[1];
		if (!token) {
			return res.status(401).json({ message: 'Authentication failed' });
		}
		const decodedToken = jwt.verify(token, `${process.env.JWT_KEY}`);
	} catch (err) {
		return res.status(401).json({ message: 'Authentication failed' });
	}
};
