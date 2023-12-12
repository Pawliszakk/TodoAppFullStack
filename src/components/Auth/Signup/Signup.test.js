import '@testing-library/jest-dom';

import { screen, render, fireEvent } from '@testing-library/react';
import Signup from './Signup';

describe('Signup', () => {
	test('Should render signup Form correctly', () => {
		render(<Signup />);

		const signupTitle = screen.getByRole('heading', { name: /sign up/i });
		const formElement = screen.getByTestId('signup-form');
		const emailInput = screen.getByTestId('email-input');
		const passwordInput = screen.getByTestId('password-input');
		const usernameInput = screen.getByTestId('username-input');
		const loginSpan = screen.getByTestId('login-span');

		expect(signupTitle).toBeInTheDocument();
		expect(formElement).toBeInTheDocument();
		expect(emailInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();
		expect(usernameInput).toBeInTheDocument();
		expect(loginSpan).toBeInTheDocument();
	});

	test('Clicking on login span should trigger onFormChange function with 2 as an argument', () => {
		const mockOnFormChange = jest.fn();
		render(<Signup onFormChange={mockOnFormChange} />);

		const loginSpan = screen.getByTestId('login-span');

		fireEvent.click(loginSpan);

		expect(mockOnFormChange).toHaveBeenCalledWith(2);
	});
});
