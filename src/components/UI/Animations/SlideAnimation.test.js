import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render } from '@testing-library/react';
import SlideAnimation from './SlideAnimation';

describe('SlideAnimation', () => {
	test('Renders children correctly', () => {
		render(
			<SlideAnimation>
				<p>test paragraph</p>
			</SlideAnimation>
		);

		const paragraphElement = screen.getByText(/test paragraph/i);

		expect(paragraphElement).toBeInTheDocument();
	});
});
