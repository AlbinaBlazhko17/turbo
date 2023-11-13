import { useState } from 'react';
import { RouterProvider } from 'react-router';
import routesConfig from '@routes/routes';
import { ThemeContext } from '@theme/theme';

import './App.css'

function App() {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

	const toggleTheme = () => {
		localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className={`${theme}`}>
				<RouterProvider router={routesConfig} />
			</div>
		</ThemeContext.Provider>
	)
}

export default App;
