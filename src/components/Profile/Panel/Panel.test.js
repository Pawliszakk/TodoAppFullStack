import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render, fireEvent } from '@testing-library/react';
import Panel from './Panel';

describe('Panel', () => {
	const testTasks = [
		{
			title: 'TestTitle',
			description: 'Test description',
			category: 'work',
			importance: '1',
			id: 'id1',
			author: 'testauthor',
			date: '21-07-2023',
			active: true,
		},
	];

	test('Should correctly display panel component heading', () => {
		render(<Panel tasks={testTasks} />);

		const headingElement = screen.getByRole('heading', { name: /categories/i });

		expect(headingElement).toBeInTheDocument();
	});
});
