import { Outlet } from "react-router";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";

function Layout() {
	return (
		<>
			<Header />
			<NavBar />
			<Outlet />
		</>
  );
}

export default Layout;