import { createContext, useEffect, useState } from 'react';

interface AuthContextProps {
	isLoggedIn: boolean;
	userId: string | null;
	userAvatar: string | null;
	token: string | null;
	login: (id: string, token: string, avatar: string) => void;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
	isLoggedIn: false,
	userId: null,
	userAvatar: null,
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
	const [userAvatar, setUserAvatar] = useState<null | string>(null);

	const loginHandler = (id: string, token: string, avatar: string) => {
		setToken(token);
		setUserId(id);
		setUserAvatar(avatar);

		localStorage.setItem(
			'userAuth',
			JSON.stringify({
				userId: id,
				token,
				avatar,
			})
		);
	};
	const logoutHandler = () => {
		setToken(null);
		setUserId(null);
		setUserAvatar(null);
		localStorage.removeItem('userAuth');
	};

	useEffect(() => {
		const authStoredData = localStorage.getItem('userAuth');

		if (authStoredData) {
			const authData = JSON.parse(authStoredData);
			if (authData && authData.token) {
				const { userId, token, avatar } = authData;
				loginHandler(userId, token, avatar);
			}
		}
	}, [loginHandler]);

	const context = {
		userId,
		token,
		userAvatar,
		isLoggedIn: !!token,
		login: loginHandler,
		logout: logoutHandler,
	};

	return (
		<AuthContext.Provider value={context}>{children}</AuthContext.Provider>
	);
};
