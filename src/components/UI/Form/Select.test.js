import '@testing-library/jest-dom';
import 'intersection-observer';

import { screen, render } from '@testing-library/react';
import Select from './Select';

describe('Select', () => {
	const testOptions = [
		{
			key: 'testKey',
			value: 'testValue',
			text: 'testText',
		},
	];
	const errorMessage = 'test-error';

	test('If error and is touched is true, should render paragraph with error', () => {
		render(<Select error={errorMessage} touched options={testOptions} />);

		const errorParagraph = screen.getByText(errorMessage);

		expect(errorParagraph).toBeInTheDocument();
	});
	test('Should not display error if no touched value is provided', () => {
		render(<Select error={errorMessage} options={testOptions} />);

		const errorParagraph = screen.queryByText(errorMessage);

		expect(errorParagraph).not.toBeInTheDocument();
	});
	test('Should not display error if errormessage is provided and touched is set', () => {
		render(<Select touched options={testOptions} />);

		const errorParagraph = screen.queryByText(errorMessage);

		expect(errorParagraph).not.toBeInTheDocument();
	});
});
