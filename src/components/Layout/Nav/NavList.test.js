import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render } from '@testing-library/react';
import NavList from './NavList';

describe('NavList', () => {
	test('Renders initially Login button', () => {
		render(<NavList />);

		const loginBtn = screen.getByText('Login');

		expect(loginBtn).toBeInTheDocument();
	});

	test('Avatar image should initially default user image', () => {
		render(<NavList />);

		const avatarImage =
			screen.getByAltText(/an avatar of a user/i).parentElement;

		expect(avatarImage).toHaveAttribute('href', '/login');
	});
});
