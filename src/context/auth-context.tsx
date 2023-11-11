import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Toaster, toast } from 'sonner';

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
	const [tokenExpirationDate, setTokenExpirationDate] = useState<null | Date>(
		null
	);
	const [userAvatar, setUserAvatar] = useState<null | string>(null);

	const router = useRouter();

	const loginHandler = (
		id: string,
		token: string,
		avatar: string,
		expirationDate?: Date
	) => {
		setToken(token);
		setUserId(id);
		setUserAvatar(avatar);

		const tokenExpirationDate =
			expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
		setTokenExpirationDate(tokenExpirationDate);
		localStorage.setItem(
			'userAuth',
			JSON.stringify({
				userId: id,
				token,
				avatar,
				expiration: tokenExpirationDate.toISOString(),
			})
		);

		if (!token) {
			router.push('/');
		}
		toast.success('Correct credentials, you are logged in');
	};
	const logoutHandler = () => {
		setToken(null);
		setUserId(null);
		setUserAvatar(null);
		localStorage.removeItem('userAuth');
		router.push('/');
		toast.info('You have been logged out');
	};

	useEffect(() => {
		const authStoredData = localStorage.getItem('userAuth');

		if (authStoredData) {
			const authData = JSON.parse(authStoredData);
			if (
				authData &&
				authData.token &&
				new Date(authData.expiration) > new Date()
			) {
				const { userId, token, avatar } = authData;
				loginHandler(userId, token, avatar, new Date(authData.expiration));
			}
		}
	}, []);

	useEffect(() => {
		if (token && userId) {
			router.push(`/profile/${userId}/?token=${token}`);
		}
	}, [token, userId]);

	let logoutTimer: any;
	useEffect(() => {
		if (token && tokenExpirationDate) {
			const remainingTime =
				tokenExpirationDate.getTime() - new Date().getTime();

			logoutTimer = setTimeout(logoutHandler, remainingTime);
		} else {
			clearTimeout(logoutTimer);
		}
	}, [token, logoutHandler, tokenExpirationDate]);

	const context = {
		userId,
		token,
		userAvatar,
		isLoggedIn: !!token,
		login: loginHandler,
		logout: logoutHandler,
	};

	return (
		<AuthContext.Provider value={context}>
			{children}
			<Toaster position="top-center" richColors />
		</AuthContext.Provider>
	);
};
