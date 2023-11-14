import { createBrowserRouter } from 'react-router-dom';
import FormPage from '@pages/FormPage/FormPage';
import Dashboard from '@pages/Dashboard/Dashboard';
import Layout from '@/layout/Layout/Layout';
import TablePage from '@/pages/TablePage/TablePage';

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
				{
					path: 'table',
					element: <TablePage />
				}
			],
		}
	]
);

export default routesConfig;
