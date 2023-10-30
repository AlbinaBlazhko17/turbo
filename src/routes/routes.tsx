import FormPage from '@pages/FormPage/FormPage';
import Dashboard from '@pages/Dashboard/Dashboard';

const routesConfig = [
	{
		index: true,
		element: <Dashboard />,
	},
	{
		path: '/form',
		element: <FormPage />,
	}
];

export default routesConfig;
