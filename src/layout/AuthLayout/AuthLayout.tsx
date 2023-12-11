import { AuthContext } from '@/auth/auth';
import { useContext } from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';

import style from './authLayout.module.scss';

function AuthLayout() {
	const { isAuthenticated } = useContext(AuthContext);
	return (
		<div>
			<Header isAuthenticated={isAuthenticated} />
			<main className={style.wrapper}>
				<Outlet />
			</main>
		</div>
	);
}

export default AuthLayout;
