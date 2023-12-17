import 'intersection-observer';
import { render, screen } from '@testing-library/react';

import Home from './Home';
import { getSections } from '../../data/data';
describe('Home', () => {
	test('Renders correct number of sections', () => {
		render(<Home />);

		const sections = screen.getAllByTestId('home-section');

		const sectionsData = getSections(false);

		expect(sections).toHaveLength(sectionsData.length);
	});
});
