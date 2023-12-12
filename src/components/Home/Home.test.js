import 'intersection-observer';
import { render, screen } from '@testing-library/react';

import Home from './Home';
import { HomeSectionsData } from '@/data/data';

describe('Home', () => {
	test('Renders correct number of sections', () => {
		render(<Home />);

		const sections = screen.getAllByTestId('home-section');

		expect(sections).toHaveLength(HomeSectionsData.length);
	});
});
