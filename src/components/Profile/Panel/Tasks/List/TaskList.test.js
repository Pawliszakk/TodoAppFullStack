import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render } from '@testing-library/react';
import TaskList from './TaskList';

describe('TaskList', () => {
	const testTasks = [
		{
			title: 'Test Title',
			description: 'Test Description',
			category: 'work',
			importance: '1',
			id: 'test-id',
			author: 'test-author',
			date: '21-07-2023',
			active: true,
		},
		{
			title: 'Test Title',
			description: 'Test Description2',
			category: 'work',
			importance: '1',
			id: 'test-id',
			author: 'test-author',
			date: '21-07-2023',
			active: false,
		},
	];

	test('Should render current category correctly', () => {
		render(<TaskList currentCategory="work" />);

		const headingCategoryElement = screen.getByRole('heading', {
			name: /work tasks/i,
		});

		expect(headingCategoryElement).toBeInTheDocument();
	});

	test('Should render paragraph with appropriate messsage if no tasks are provided', () => {
		render(<TaskList currentCategory="work" currentTasks={null} />);

		const paragraphElement = screen.getByText(
			/There are no tasks for this filters.../i
		);

		expect(paragraphElement).toBeInTheDocument();
	});
	test('Should render paragraph with appropriate messsage if provided tasks length is 0', () => {
		render(<TaskList currentCategory="work" currentTasks={[]} />);

		const paragraphElement = screen.getByText(
			/There are no tasks for this filters.../i
		);

		expect(paragraphElement).toBeInTheDocument();
	});
	test('Should not render paragraph correct tasks are provided', () => {
		render(<TaskList currentCategory="work" currentTasks={testTasks} />);

		const paragraphElement = screen.queryByText(
			/There are no tasks for this filters.../i
		);

		expect(paragraphElement).not.toBeInTheDocument();
	});

	test('Should render taskTile with appropriate description', () => {
		render(<TaskList currentCategory="work" currentTasks={testTasks} />);

		const taskTileDescriptionElement = screen.getByText(
			testTasks[0].description
		);

		expect(taskTileDescriptionElement).toBeInTheDocument();
	});
});
