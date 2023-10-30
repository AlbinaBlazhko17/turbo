import { createContext, useState } from 'react';
import { Routes, Route } from 'react-router';
import routesConfig from '@routes/routes';
import Layout from '@layout/Layout/Layout';

import './App.css'

export const ThemeContext = createContext({theme: 'light', toggleTheme: () => {}});

function App() {
	const [theme, setTheme] = useState('light');

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	}

	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			<Routes>
				<Route path='/' element={<Layout />}>
					{routesConfig.map((route, i) => (
						<Route key={i} {...route} />
					))}
				</Route>
			</Routes>
		</ThemeContext.Provider>
	)
}

export default App
