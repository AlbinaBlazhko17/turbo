import { useContext, useState } from "react";
import { Outlet } from "react-router";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import cn from 'classnames';
import { ThemeContext } from "@theme/theme";

import style from './layout.module.scss';

function Layout() {
	const [isOpen , setIsOpen] = useState<boolean>(false);
	const { theme } = useContext(ThemeContext);

	return (
		<>
			<Header />
			<NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
			<div className={cn(style.container, style[`${theme}`], {
				[style['container_open']]: isOpen === true,
				[style['container_closed']]: isOpen === false,
			})}>
				<Outlet />
			</div>
		</>
  );
}

export default Layout;