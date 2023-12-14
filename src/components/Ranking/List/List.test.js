import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render } from '@testing-library/react';
import List from './List';

describe('List', () => {
	test('Renders paragraph if no users array is provided', () => {
		render(<List />);

		const testParagraph = screen.getByText(
			/Failed to fetch users, please try again later.../i
		);
		expect(testParagraph).toBeInTheDocument();
	});
	test('Renders paragraph if users array length is equal to 0', () => {
		render(<List users={[]} />);

		const testParagraph = screen.getByText(
			/Failed to fetch users, please try again later.../i
		);
		expect(testParagraph).toBeInTheDocument();
	});
	test('Renders userTile if valid user in users is provided', () => {
		const testUsers = [
			{
				avatar: '/assets/avatars/avatar2.jpg',
				name: 'testname',
				date: '12-251-15',
				points: 10,
				id: '12-251-15',
			},
		];
		render(<List users={testUsers} />);

		const userNameElement = screen.getByText(/testname/i);
		expect(userNameElement).toBeInTheDocument();
	});
});
