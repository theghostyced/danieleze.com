import '~/scss/screen.scss';

import type {AppProps} from 'next/app';
import ThemeProvider from '~/providers/ThemeProvider';

function MyApp({Component, pageProps}: AppProps) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
