import ErrorPage from '@/components/ErrorPage/ErrorPage';
import TableContent from '@/components/TableContent/TableContent';
import Layout from '@/layout/Layout/Layout';
import GalleryPage from '@/pages/GalleryPage/GalleryPage';
import TablePage from '@/pages/TablePage/TablePage';
import UserInfoPage from '@/pages/UserInfoPage/UserInfoPage';
import { loader } from '@/utils/dataForSelect';
import Dashboard from '@pages/Dashboard/Dashboard';
import FormPage from '@pages/FormPage/FormPage';
import { createBrowserRouter } from 'react-router-dom';

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
				path: '/users',
				element: <TablePage />,
				children: [
					{
						path: '',
						element: <TableContent />,
					},
					{
						path: ':id',
						element: <UserInfoPage />,
						loader,
					},
				],
			},
			{
				path: '/gallery',
				element: <GalleryPage />,
			},
			// {
			// 	path: '/user/:id',
			// 	element: <UserInfoPage />,
			// 	loader,
			// },
		],
	},
]);

export default routesConfig;
