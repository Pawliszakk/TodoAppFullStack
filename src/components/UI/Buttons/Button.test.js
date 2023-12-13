import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
	test('Should trigger provided onClick value if clicked', () => {
		const mockOnClick = jest.fn();

		render(<Button onClick={mockOnClick} />);

		const buttonElement = screen.getByTestId('test-button');

		fireEvent.click(buttonElement);

		expect(mockOnClick).toHaveBeenCalled();

		expect(buttonElement).toBeInTheDocument();
	});

	test('Should render anchor element if link and href is provided', () => {
		render(<Button link href="www.example.com" />);

		const anchorElement = screen.getByTestId('test-anchor');

		expect(anchorElement).toBeInTheDocument();
	});
	test('Should render button if no link or href is provided', () => {
		render(<Button />);

		const buttonElement = screen.getByTestId('test-button');

		expect(buttonElement).toBeInTheDocument();
	});
});
