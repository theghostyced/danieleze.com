import {
	createContext,
	useContext,
	useEffect,
	useCallback,
	useState,
} from 'react';

interface ThemeContextProps {
	dark: boolean;
	toggleTheme: () => void;
}

enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}

const defaultContextData = {
	dark: false,
	toggleTheme: () => {},
};

const THEME = 'mode';

const ThemeProviderContext =
	createContext<ThemeContextProps>(defaultContextData);
export const useTheme = () => useContext(ThemeProviderContext);

const storage = {
	get: (init?: Theme) => window.localStorage.getItem(THEME) || init,
	set: (value: Theme) => window.localStorage.setItem(THEME, value),
};

const supportsDarkMode = () =>
	window.matchMedia('(prefers-color-scheme: dark)').matches === true;

const useDarkMode = (): [Theme, (theme?: Theme) => void] => {
	const [themeState, setThemeState] = useState(Theme.DARK);

	const setThemeStateEnhanced = (themeValue?: Theme) => {
		setThemeState((prevState) => {
			const nextState = themeValue
				? themeValue
				: prevState === Theme.LIGHT
				? Theme.DARK
				: Theme.LIGHT;

			document.querySelector('html')?.classList.remove(prevState);
			document.querySelector('html')?.classList.add(nextState);
			document.documentElement.style.setProperty('color-scheme', nextState);
			storage.set(nextState);

			return nextState;
		});
	};

	useEffect(() => {
		const storedMode = storage.get();
		if (!storedMode && supportsDarkMode()) {
			return setThemeStateEnhanced(Theme.DARK);
		}

		if (!storedMode || storedMode === themeState) {
			return;
		}

		setThemeStateEnhanced();
	}, [themeState]);

	return [themeState, setThemeStateEnhanced];
};

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
	const [themeState, setThemeStateEnhanced] = useDarkMode();

	const toggleTheme = useCallback(() => {
		setThemeStateEnhanced();
	}, [setThemeStateEnhanced]);

	useEffect(() => {
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', (e) => {
				setThemeStateEnhanced(e.matches ? Theme.DARK : Theme.LIGHT);
			});
	}, [setThemeStateEnhanced, toggleTheme]);

	return (
		<ThemeProviderContext.Provider
			value={{
				dark: themeState === Theme.DARK,
				toggleTheme,
			}}
		>
			{children}
		</ThemeProviderContext.Provider>
	);
};

export default ThemeProvider;
