import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render, fireEvent } from '@testing-library/react';
import EditProfile from './EditProfile';

describe('EditProfile', () => {
	test('Should execute onClose function when closebtn is clicked', () => {
		const mockOnClose = jest.fn();

		render(<EditProfile onClose={mockOnClose} />);

		const closeBtutton = screen.getByTestId('test-close');

        fireEvent.click(closeBtutton)

        expect(mockOnClose).toHaveBeenCalled()
	});
});
