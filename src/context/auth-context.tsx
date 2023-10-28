import { useRouter } from 'next/router';
import { createContext, useState } from 'react';

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

	const router = useRouter();

	const loginHandler = (id: string, token: string, avatar: string) => {
		setToken(token);
		setUserId(id);
		setUserAvatar(avatar);
	};
	const logoutHandler = () => {
		setToken(null);
		setUserId(null);
		setUserAvatar(null);
	};

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
