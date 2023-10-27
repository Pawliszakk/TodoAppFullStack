import type { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../models/user';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === 'POST') {
		const { email, password } = req.body;

		if (
			!email.match(
				/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			) ||
			password.length > 20 ||
			password.length < 8
		) {
			return res
				.status(400)
				.json({ message: 'Invalid data. Please try again' });
		}

		let user;
		try {
			user = await User.findOne({ email });
		} catch (err) {
			return res.status(500).json({
				message: 'Something went wrong, please try again later',
			});
		}
		if (!user || user.password !== password) {
			return res.status(409).json({
				message: `Your email address or password is wrong, please try again`,
			});
		} else if (user.password === password) {
			return res.status(200).json({ message: 'Correct, logged in !' });
		}
	}
}
