import React, {createContext, useContext, useEffect, useState} from 'react';

interface ThemeContextProps {
	theme: boolean;
	toggleTheme: () => void;
}

const ThemeProviderContext = createContext({} as ThemeContextProps);

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
	const THEME = '_de_theme';
	let darkmode = false;

	if (typeof window !== 'undefined') {
		darkmode = Boolean(localStorage.getItem(THEME)) ?? false;
	}

	const [theme, setTheme] = useState(darkmode);

	const toggleTheme = () => {
		localStorage.setItem(THEME, JSON.stringify(!theme));
		setTheme(!theme);
	};

	useEffect(() => {
		if (theme) {
			document.querySelector('html')?.classList.add('dark');
		} else {
			document.querySelector('html')?.classList.remove('dark');
		}
	}, [theme]);
	return (
		<ThemeProviderContext.Provider value={{theme, toggleTheme}}>
			{children}
		</ThemeProviderContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeProviderContext);
export default ThemeProvider;
