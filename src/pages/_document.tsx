import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				{/* <!-- Fonts --> */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
