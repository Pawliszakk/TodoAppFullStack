import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render, fireEvent } from '@testing-library/react';
import Auth from './Auth';

describe('Auth', () => {
    
	test('Initially Renders Start component', () => {
		render(<Auth />);

		const startHeading = screen.getByRole('heading', { name: /hello there/i });

		expect(startHeading).toBeInTheDocument();
	});

	test('Renders Login component after signup button was clicked', () => {
		render(<Auth />);

		const loginButton = screen.getByRole('button', { name: 'Login' });
		fireEvent.click(loginButton);

		const loginHeading = screen.getByRole('heading', { name: /login/i });

		expect(loginHeading).toBeInTheDocument();
	});

	test('Renders Signup component after signup button was clicked', () => {
		render(<Auth />);

		const signupButton = screen.getByRole('button', { name: 'SignUp' });
		fireEvent.click(signupButton);

		const signupHeading = screen.getByRole('heading', { name: /sign up/i });

		expect(signupHeading).toBeInTheDocument();
	});
});
