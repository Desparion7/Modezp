'use client';
import React, {
	ReactNode,
	createContext,
	useEffect,
	useState,
	useContext,
} from 'react';

type Mode = 'dark' | 'light';

type DarkModeContextProviderProps = {
	children: ReactNode;
};

type DarkModeType = {
	mode: Mode;
	toggleMode: () => void;
};

const DarkModeContext = createContext<DarkModeType | null>(null);

const DarkModeContextProvider = ({
	children,
}: DarkModeContextProviderProps) => {
	const [mode, setMode] = useState<Mode>('light');

	const toggleMode = () => {
		if (mode === 'light') {
			setMode('dark');
			window.localStorage.setItem('mode', 'dark');
			document.documentElement.classList.add('dark');
		} else {
			setMode('light');
			window.localStorage.setItem('mode', 'light');
			document.documentElement.classList.remove('dark');
		}
	};

	useEffect(() => {
		const localMode = window.localStorage.getItem('mode') as Mode | null;
		if (localMode) {
			setMode(localMode);
			if (localMode === 'dark')
				document.documentElement.classList.add('dark');
		} else if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
			setMode('dark');
			document.documentElement.classList.add('dark');
		}
	}, []);

	return (
		<DarkModeContext.Provider value={{ mode, toggleMode }}>
			{children}
		</DarkModeContext.Provider>
	);
};

export const useDarkModeContext = () => {
	const context = useContext(DarkModeContext);
	if (!context) {
		throw new Error(
			'useDarkModeContext must be use in DarkModeContextProvider'
		);
	}
	return context;
};

export default DarkModeContextProvider;
