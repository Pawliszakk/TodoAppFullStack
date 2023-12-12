import '@testing-library/jest-dom';

import { screen, render, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
	test('Should render Login Form correctly', () => {
		render(<Login />);

		const loginTitle = screen.getByRole('heading', { name: 'Login' });
		const formElement = screen.getByTestId('login-form');
		const emailInput = screen.getByTestId('email-input');
		const passwordInput = screen.getByTestId('password-input');
		const createParagraph = screen.getByTestId('create-account');

		expect(loginTitle).toBeInTheDocument();
		expect(formElement).toBeInTheDocument();
		expect(emailInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();
		expect(createParagraph).toBeInTheDocument();
	});

	test('Clicking on Create account span should trigger onFormChange function', () => {
		const mockOnFormChange = jest.fn();
		render(<Login onFormChange={mockOnFormChange} />);

		const createOneSpan = screen.getByTestId('create-span');

		fireEvent.click(createOneSpan);

		expect(mockOnFormChange).toHaveBeenCalled();
	});
});
