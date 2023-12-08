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
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import LoginPage from '@/pages/LoginPage/LoginPage';
import AuthLayout from '@/layout/AuthLayout/AuthLayout';
import Signup from '@/pages/SignupPage/SignupPage';

const routesConfig = createBrowserRouter([
	{
		path: '/',
		element: <PrivateRoutes />,
		children: [
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
				],
			},
		],
	},
	{
		path: '/',
		element: <AuthLayout />,
		children: [
			{
				path: '/login',
				element: <LoginPage />,
			},
			{
				path: '/signup',
				element: <Signup />,
			},
		],
	},
]);

export default routesConfig;
