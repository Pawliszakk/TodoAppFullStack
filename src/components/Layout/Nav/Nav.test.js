import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render } from '@testing-library/react';
import Nav from './Nav';

describe('Nav', () => {
	test('If not scrolled, should not have blur class', () => {
		render(<Nav />);

		const headerNavElement = screen.getByTestId('test-header');

		expect(headerNavElement).toHaveClass('header null');
	});
});
