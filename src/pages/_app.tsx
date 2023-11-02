import type { AppProps } from 'next/app';
import { AuthContextProvider } from '@/context/auth-context';

import Layout from '@/components/Layout/Layout';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<AuthContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AuthContextProvider>
	);
}
