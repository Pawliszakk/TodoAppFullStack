import { screen, render } from '@testing-library/react';
import Login from './Login';

test('Should render Login Form correctly', () => {
	render(<Login />);

	const loginTitle = screen.getByText('Login', { exact: false });

	expext(loginTitle).toBeInTheDocument();
});
