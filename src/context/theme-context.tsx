import { createContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
	isDark: true,
	changeTheme: () => {},
});
export default ThemeContext;

interface ThemeContextProviderProps {
	children: React.ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
	children,
}) => {
	const [isDark, setIsDark] = useState(false);
	const changeThemeHandler = () => {
		const body = document.querySelector('body');
		if (body) {
			if (isDark) {
				body.setAttribute('data-theme', 'dark');
				setIsDark(false);
			} else {
				body.setAttribute('data-theme', 'light');
				setIsDark(true);
			}
		}
	};
	useEffect(() => {
		changeThemeHandler();
	}, []);

	const context = {
		changeTheme: changeThemeHandler,
		isDark,
	};
	return (
		<ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
	);
};
