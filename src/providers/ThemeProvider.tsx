import React, {
	createContext,
	Dispatch,
	SetStateAction,
	useContext,
	useState,
} from 'react';

interface ThemeContextProps {
	theme: boolean;
	setTheme: Dispatch<SetStateAction<boolean>>;
}

const ThemeProviderContext = createContext({} as ThemeContextProps);

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
	const [theme, setTheme] = useState(false);
	return (
		<ThemeProviderContext.Provider value={{theme, setTheme}}>
			{children}
		</ThemeProviderContext.Provider>
	);
};

export const useTheme = () => useContext(ThemeProviderContext);
export default ThemeProvider;
