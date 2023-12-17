import type { AppProps } from 'next/app';
import { AuthContextProvider } from '@/context/auth-context';

import Layout from '@/components/Layout/Layout';
import '@/styles/globals.css';
import { ThemeContextProvider } from '@/context/theme-context';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeContextProvider>
			<AuthContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</AuthContextProvider>
		</ThemeContextProvider>
	);
}
