import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/assets/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/assets/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/assets/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest"></link>
			</Head>
			<body>
				<div id="overlay-root"></div>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
