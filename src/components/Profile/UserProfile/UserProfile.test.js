import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render } from '@testing-library/react';
import UserProfile from './UserProfile';

describe('UserProfile', () => {
	const testUserProfileProps = {
		name: 'testname',
		avatar: '/assets/avatars/avatar2.jpg',
		points: 10,
		date: '12-02-2023',
	};
	test('Initially renders no form', () => {
		render(<UserProfile {...testUserProfileProps} />);

		const formElement = screen.queryByRole('form');

		expect(formElement).not.toBeInTheDocument();
	});
});
