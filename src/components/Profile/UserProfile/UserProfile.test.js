import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render } from '@testing-library/react';
import UserProfile from './UserProfile';

describe('UserProfile', () => {
	test('Initially renders no form', () => {
		const testUserProfileProps = {
			name: 'testname',
			avatar: '/assets/avatars/avatar2.jpg',
			points: 10,
			date: '12-02-2023',
		};

		render(<UserProfile {...testUserProfileProps} />);

		const formElement = screen.queryByRole('form');

		expect(formElement).not.toBeInTheDocument();
	});
});
