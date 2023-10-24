import { Routes, Route } from 'react-router';
import routesConfig from '@routes/routes';
import Layout from '@layout/Layout/Layout';

import './App.css'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				{routesConfig.map((route, i) => (
					<Route key={i} {...route} />
				))}
			</Route>
		</Routes>
	)
}

export default App
