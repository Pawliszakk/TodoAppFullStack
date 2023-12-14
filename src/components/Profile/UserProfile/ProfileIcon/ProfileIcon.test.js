import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render, fireEvent } from '@testing-library/react';
import ProfileIcon from './ProfileIcon';

describe('ProfileIcon', () => {
	test('Should trigger onClick function when clicked', () => {
		const mockOnClick = jest.fn();
		render(<ProfileIcon onClick={mockOnClick} edit />);

		const editIcon = screen.getByTestId('edit-btn');

		fireEvent.click(editIcon);

		expect(mockOnClick).toHaveBeenCalled();
	});

	test('Should render edit btn if edit is provided as props', () => {
		render(<ProfileIcon edit />);

		const editIcon = screen.getByTestId('edit-btn');

		expect(editIcon).toBeInTheDocument();
	});
	test('Should render delete btn if delete is provided as props', () => {
		render(<ProfileIcon delete />);

		const deleteIcon = screen.getByTestId('delete-btn');

		expect(deleteIcon).toBeInTheDocument();
	});
	test('Should render password btn if password is provided as props', () => {
		render(<ProfileIcon password />);

		const passwordIcon = screen.getByTestId('password-btn');

		expect(passwordIcon).toBeInTheDocument();
	});
});
