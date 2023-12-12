import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import Login from './Login';

test('Should render Login Form correctly', () => {
	render(<Login />);

	const loginTitle = screen.getByRole('heading', { name: 'Login' });

	expect(loginTitle).toBeInTheDocument();
});
