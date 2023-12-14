import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render } from '@testing-library/react';
import UserTile from './UserTile';

describe('UserTile', () => {
	const testUserTileProps = {
		name: 'testname',
		avatar: '/assets/avatars/avatar2.jpg',
		points: 10,
		date: '12-02-2023',
	};

	test('Renders correct provided name', () => {
		render(<UserTile {...testUserTileProps} />);

		const nameElement = screen.getByText(testUserTileProps.name);

		expect(nameElement).toBeInTheDocument();
	});
	test('Renders correct provided date', () => {
		render(<UserTile {...testUserTileProps} />);

		const dateElement = screen.getByText(/12-02-2023/i);

		expect(dateElement).toBeInTheDocument();
	});
	test('Renders correct provided points', () => {
		render(<UserTile {...testUserTileProps} />);

		const pointsElement = screen.getByText(/10/i);

		expect(pointsElement).toBeInTheDocument();
	});

	test('Renders correct icon if index 0 is provided', () => {
		render(<UserTile index={0} {...testUserTileProps} />);

		const winnerIcon = screen.getByTestId('winner-test');
		expect(winnerIcon).toBeInTheDocument();
	});
	test('Renders correct icon if index 1 is provided', () => {
		render(<UserTile index={1} {...testUserTileProps} />);

		const secondIcon = screen.getByTestId('second-test');
		expect(secondIcon).toBeInTheDocument();
	});
	test('Renders correct icon if index 2 is provided', () => {
		render(<UserTile index={2} {...testUserTileProps} />);

		const thirdIcon = screen.getByTestId('third-test');
		expect(thirdIcon).toBeInTheDocument();
	});
});
