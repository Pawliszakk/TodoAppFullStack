import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render } from '@testing-library/react';
import SlideFromTop from './SlideFromTop';

describe('SlideFromTop', () => {
	test('Renders children correctly', () => {
		render(
			<SlideFromTop>
				<p>test paragraph</p>
			</SlideFromTop>
		);

		const paragraphElement = screen.getByText(/test paragraph/i);

		expect(paragraphElement).toBeInTheDocument();
	});
});
