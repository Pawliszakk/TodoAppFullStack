import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render } from '@testing-library/react';
import SectionTitle from './SectionTitle';

describe('SectionTitle', () => {
	test('Renders Children correctly', () => {
		render(<SectionTitle>Test Title</SectionTitle>);

		const headingElement = screen.getByRole('heading', { name: /test title/i });

		expect(headingElement).toBeInTheDocument();
	});
});
