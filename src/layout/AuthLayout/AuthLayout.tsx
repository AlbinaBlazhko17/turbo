import { AuthContext } from '@/auth/auth';
import { useContext } from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';

function AuthLayout() {
	const { isAuthenticated } = useContext(AuthContext);
	return (
		<div>
			<Header isAuthenticated={isAuthenticated} />
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default AuthLayout;
