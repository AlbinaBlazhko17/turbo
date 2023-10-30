import { useState } from 'react';
import { Routes, Route } from 'react-router';
import routesConfig from '@routes/routes';
import Layout from '@layout/Layout/Layout';
import { ThemeContext } from '../../theme/theme';

import './App.css'

function App() {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

	const toggleTheme = () => {
		localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			<div className={`${theme}`}>
				<Routes>
					<Route path='/' element={<Layout />}>
						{routesConfig.map((route, i) => (
							<Route key={i} {...route} />
						))}
					</Route>
				</Routes>
			</div>
		</ThemeContext.Provider>
	)
}

export default App;
