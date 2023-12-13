import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render } from '@testing-library/react';
import FormBox from './FormBox';

describe('FormBox', () => {
	test('Renders children correctly', () => {
		render(
			<FormBox>
				<form data-testid="form-test"></form>
			</FormBox>
		);
		const testFormElement = screen.getByTestId('form-test');

		expect(testFormElement).toBeInTheDocument();
	});
});
