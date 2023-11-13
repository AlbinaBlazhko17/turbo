import { createBrowserRouter } from 'react-router-dom';
import FormPage from '@pages/FormPage/FormPage';
import Dashboard from '@pages/Dashboard/Dashboard';
import Layout from '@/layout/Layout/Layout';

const routesConfig = createBrowserRouter(
	[
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "/",
					element: <Dashboard />,
				},
				{
					path: "/form",
					element: <FormPage />,
					// loader: teamLoader,
				},
			],
		}
	]
);

export default routesConfig;
