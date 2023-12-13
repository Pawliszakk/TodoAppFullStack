import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render } from '@testing-library/react';
import Input from './Input';

describe('Input', () => {
	test('Renders input with correct data', () => {
		const testLabelText = 'test-label';
		const testPlaceholder = 'Please enter your value';

		render(
			<Input
				label={testLabelText}
				name="email"
				type="email"
				placeholder={testPlaceholder}
				error={null}
				touched={true}
				field={{ test: 'test' }}
				testId="test-input"
			/>
		);
		const testFormElement = screen.getByTestId('test-input');
		const labelElement = screen.getByLabelText(testLabelText);
		const inputElement = screen.getByPlaceholderText(testPlaceholder);

		expect(testFormElement).toBeInTheDocument();
		expect(labelElement).toBeInTheDocument();
		expect(inputElement).toBeInTheDocument();
	});
});
