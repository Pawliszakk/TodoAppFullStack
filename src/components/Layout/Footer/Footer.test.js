import '@testing-library/jest-dom';

import { screen, render } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
	test('Renders current year correctly', () => {
		render(<Footer />);

		const currentYear = new Date().getFullYear();

		const yearSpanElement = screen.getByText(String(currentYear));

		expect(yearSpanElement).toBeInTheDocument();
	});

	test('Renders TaskPro span correctly', () => {
		render(<Footer />);

		const taskProSpan = screen.getByText(/TaskPro/i);

		expect(taskProSpan).toBeInTheDocument();
	});
});
