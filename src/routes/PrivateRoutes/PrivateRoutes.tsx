import { AuthContext } from '@/auth/auth';
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router';

function PrivateRoutes() {
	const { isAuthenticated } = useContext(AuthContext);

	return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
