import { createContext, useState } from 'react';

interface AuthContextProps {
	isLoggedIn: boolean;
	userId: string | null;
	token: string | null;
	login: (id: string, token: string) => void;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
	isLoggedIn: false,
	userId: null,
	token: null,
	login: () => {},
	logout: () => {},
});

interface AuthContextProviderProps {
	children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
	children,
}) => {
	const [token, setToken] = useState<null | string>(null);
	const [userId, setUserId] = useState<null | string>(null);

	const loginHandler = (id: string, token: string) => {
		setToken(token);
		setUserId(id);
	};
	const logoutHandler = () => {
		setToken(null);
		setUserId(null);
	};

	const context = {
		userId,
		token,
		isLoggedIn: !!token,
		login: loginHandler,
		logout: logoutHandler,
	};

	return (
		<AuthContext.Provider value={context}>{children}</AuthContext.Provider>
	);
};
