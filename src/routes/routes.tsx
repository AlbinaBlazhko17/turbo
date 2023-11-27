import { createBrowserRouter } from 'react-router-dom';
import FormPage from '@pages/FormPage/FormPage';
import Dashboard from '@pages/Dashboard/Dashboard';
import Layout from '@/layout/Layout/Layout';
import TablePage from '@/pages/TablePage/TablePage';
import ErrorPage from '@/components/ErrorPage/ErrorPage';
import { loader } from '@/utils/dataForSelect';

const routesConfig = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Dashboard />,
			},
			{
				path: '/form',
				element: <FormPage />,
				loader,
			},
			{
				path: 'table',
				element: <TablePage />,
			},
		],
	},
]);

export default routesConfig;
