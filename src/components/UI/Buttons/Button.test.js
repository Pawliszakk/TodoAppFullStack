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

	test('renders a button element with given text', () => {
		render(<Button>Click me</Button>);

		const buttonElement = screen.getByText('Click me');

		expect(buttonElement).toBeInTheDocument();
	});

	test('renders a disabled button when disabled prop is true', () => {
		render(<Button disabled>Click me</Button>);

		const buttonElement = screen.getByText('Click me');

		expect(buttonElement).toBeDisabled();
	});

	test('renders a link when link prop and href are provided', () => {
		render(
			<Button link href="/some-path">
				Go somewhere
			</Button>
		);

		const linkElement = screen.getByRole('link', { name: 'Go somewhere' });

		expect(linkElement).toHaveAttribute('href', '/some-path');
	});
	test('Should render disabled button if disabled prop is provided', () => {
		render(<Button disabled>Test Button</Button>);

		const buttonElement = screen.getByText('Test Button');

		expect(buttonElement).toBeDisabled();
	});
});
