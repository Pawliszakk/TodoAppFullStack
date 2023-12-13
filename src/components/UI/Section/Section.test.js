import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render } from '@testing-library/react';
import Section from './Section';

describe('Section', () => {
	const testSectionData = {
		image: '/test-image.jpg',
		heading: 'Test Heading',
		description: 'Test Description',
		alt: 'Test Alt',
		index: 1,
	};
    
	test('Renders section with correct data', () => {
		render(<Section {...testSectionData} />);

		const headingElement = screen.getByText(/Test Heading/i);
		const descriptionElement = screen.getByText(/Test Description/i);
		const altElement = screen.getByAltText(/Test Alt/i);

		expect(headingElement).toBeInTheDocument();
		expect(descriptionElement).toBeInTheDocument();
		expect(altElement).toBeInTheDocument();
	});

	test('Renders section with no button when no button is provided in data', () => {
		render(<Section {...testSectionData} />);

		const buttonElement = screen.queryByText(/Let's get started/i);

		expect(buttonElement).not.toBeInTheDocument();
	});
	test('Renders section with no button when no button is provided in data', () => {
		render(<Section {...testSectionData} button />);

		const buttonElement = screen.getByText(/Let's get started/i);

		expect(buttonElement).toBeInTheDocument();
	});
});
