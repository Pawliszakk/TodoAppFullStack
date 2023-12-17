import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Category from './Category';

describe('Category', () => {
	test('Should display correct provided category', () => {
		render(<Category category="work" />);

		const heading = screen.getByRole('heading', { name: /work/i });

		expect(heading).toBeInTheDocument();
	});

	test('Should trigger handleCategoryClick when clicked and is provided', async () => {
		const mockOnTasksShow = jest.fn();

		render(<Category onTasksShow={mockOnTasksShow} />);

		const categoryTile = screen.getByTestId('test-tile');

		await userEvent.click(categoryTile);

		expect(mockOnTasksShow).toHaveBeenCalled();
	});
	test('Should not trigger handleCategoryClick when clicked and is not provided', () => {
		const mockOnTasksShow = jest.fn();

		render(<Category />);

		const categoryTile = screen.getByTestId('test-tile');

		fireEvent.click(categoryTile);

		expect(mockOnTasksShow).not.toHaveBeenCalled();
	});
	test('Should display appropriate icon if provided', () => {
		const mockIcon = <div>Icon</div>;

		render(<Category icon={mockIcon} />);

		const categoryIcon = screen.getByText('Icon');

		expect(categoryIcon).toBeInTheDocument();
	});
});
