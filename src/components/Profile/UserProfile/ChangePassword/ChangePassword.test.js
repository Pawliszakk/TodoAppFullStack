import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render, fireEvent } from '@testing-library/react';
import ChangePassword from './ChangePassword';

describe('ChangePassword', () => {
	test('Should execute onClose function when closebtn is clicked', () => {
		const mockOnClose = jest.fn();

		render(<ChangePassword onClose={mockOnClose} />);

		const closeBtutton = screen.getByTestId('test-close');

        fireEvent.click(closeBtutton)

        expect(mockOnClose).toHaveBeenCalled()
	});
});
