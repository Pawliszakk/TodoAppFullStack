import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render, fireEvent } from '@testing-library/react';
import EditForm from './EditForm';

import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('EditForm', () => {
	beforeEach(() => {
		useRouter.mockClear();
	});

	test('Should trigger pointsHandler correctly', () => {
		const mockOnClose = jest.fn();

		render(<EditForm onClose={mockOnClose} />);

		const closeBtn = screen.getByTestId('test-close');

		fireEvent.click(closeBtn);

		expect(mockOnClose).toHaveBeenCalled();
	});
});
