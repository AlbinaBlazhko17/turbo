import { useContext } from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import cn from 'classnames';
import { ThemeContext } from '@theme/theme';

import style from './layout.module.scss';

function Layout() {
	const { theme } = useContext(ThemeContext);

	return (
		<>
			<Header />
			<div className={style.mainWrapper}>
				<NavBar />
				<main className={cn(style.container, style[`${theme}`])}>
					<Outlet />
				</main>
			</div>
		</>
	);
}

export default Layout;
