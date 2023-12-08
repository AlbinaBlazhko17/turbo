import { useState } from 'react';
import { RouterProvider } from 'react-router';
import routesConfig from '@routes/routes';
import { ThemeContext } from '@theme/theme';

import './App.css';
import { AuthContext } from '@/auth/auth';

function App() {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
	const auth = localStorage.getItem('isAuthenticated');
	const [isAuthenticated, setIsAuthenticated] = useState(auth ? !!auth : false);

	const toggleTheme = () => {
		localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	const toggleAuth = () => {
		localStorage.setItem('isAuthenticated', `${!isAuthenticated}`);
		setIsAuthenticated(!isAuthenticated);
	};

	return (
		<AuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
			<ThemeContext.Provider value={{ theme, toggleTheme }}>
				<div className={`${theme}`}>
					<RouterProvider router={routesConfig} />
				</div>
			</ThemeContext.Provider>
		</AuthContext.Provider>
	);
}

export default App;
