import React from 'react';
import { useDarkModeContext } from '@/context/dark-mode';
import { BsSun, BsMoon } from 'react-icons/bs';

const DarkModeButton = () => {
	const { mode, toggleMode } = useDarkModeContext();
	return (
		<button onClick={toggleMode}>
			{mode === 'dark' ? <BsMoon /> : <BsSun />}
		</button>
	);
};

export default DarkModeButton;
