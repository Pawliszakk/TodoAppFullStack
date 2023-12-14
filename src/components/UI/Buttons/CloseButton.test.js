import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render, fireEvent } from '@testing-library/react';
import CloseButton from './CloseButton';

describe('CloseButton', () => {
	test('Should trigger provided onClick value if clicked', () => {
		const mockOnClick = jest.fn();

		render(<CloseButton onClick={mockOnClick} />);

		const closeElement = screen.getByTestId('test-close');

		fireEvent.click(closeElement);

		expect(mockOnClick).toHaveBeenCalled();

		expect(closeElement).toBeInTheDocument();
	});
});
