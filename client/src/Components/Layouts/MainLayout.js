import React from "react";
import NavigationBar from "../PagesComponents/NavigationBar";

const MainLayout = ({ children }) => {
	return (
		<main className="w-11/12 mx-auto ">
			<NavigationBar />
			<div className="py-10">{children}</div>
		</main>
	);
};

export default MainLayout;
