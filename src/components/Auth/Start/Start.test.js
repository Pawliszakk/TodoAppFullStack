import '@testing-library/jest-dom';

import { screen, render, fireEvent } from '@testing-library/react';

import Start from './Start';

describe('Start', () => {
	test('Sould render start component correctly', () => {
		render(<Start />);

		const headingElement = screen.getByRole('heading', {
			name: /hello there/i,
		});

		expect(headingElement).toBeInTheDocument();
	});

	test('Clicking on login button should trigger onFormChange function with 2 as argument', () => {
		const mockFormChange = jest.fn();
		render(<Start onFormChange={mockFormChange} />);

		const loginButton = screen.getByRole('button', { name: /login/i });

		fireEvent.click(loginButton);

		expect(mockFormChange).toHaveBeenCalledWith(2);
	});
	test('Clicking on signup button should trigger onFormChange function with 1 as argument', () => {
		const mockFormChange = jest.fn();
		render(<Start onFormChange={mockFormChange} />);

		const signupButton = screen.getByRole('button', { name: /signup/i });

		fireEvent.click(signupButton);

		expect(mockFormChange).toHaveBeenCalledWith(1);
	});
});
