import { Outlet } from 'react-router';
import Header from '../Header/Header';

import style from './authLayout.module.scss';

function AuthLayout() {
	return (
		<div>
			<Header />
			<main className={style.wrapper}>
				<Outlet />
			</main>
		</div>
	);
}

export default AuthLayout;
