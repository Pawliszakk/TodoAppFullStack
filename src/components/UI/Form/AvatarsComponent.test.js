import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render, fireEvent } from '@testing-library/react';
import AvatarsComponent from './AvatarsComponent';

describe('AvatarsComponent', () => {
	test('Should trigger onAvatarChange with proper argument if men button was clicked', () => {
		const mockOnAvatarChange = jest.fn();
		render(<AvatarsComponent onAvatarChange={mockOnAvatarChange} />);

		const menButtonElement = screen.getByText('Men');

		fireEvent.click(menButtonElement);

		expect(mockOnAvatarChange).toHaveBeenCalledWith(
			'/assets/avatars/avatar1.jpg'
		);
	});
	test('Should trigger onAvatarChange with proper argument if women button was clicked', () => {
		const mockOnAvatarChange = jest.fn();

		render(<AvatarsComponent onAvatarChange={mockOnAvatarChange} />);

		const menButtonElement = screen.getByText('Women');

		fireEvent.click(menButtonElement);

		expect(mockOnAvatarChange).toHaveBeenCalledWith(
			'/assets/avatars/avatar2.jpg'
		);
	});
});
