/* eslint-disable react/prop-types */
import Nav from "../Navbar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<Nav />
			<Box minH={"85vh"} bg={"#000"}>
				<Outlet />
			</Box>
		</>
	);
};

export default Layout;
