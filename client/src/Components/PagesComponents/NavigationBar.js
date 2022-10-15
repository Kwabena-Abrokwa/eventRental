import React from "react";
import logo from "../../Assets/img/RentIT.png";
import navBar from "../../Assets/img/navBar.png";
import { Link } from "react-router-dom";

const NavigationBar = () => {
	return (
		<nav className="py-3">
			<div className="flex justify-between items-center">
				<div className="flex items-center cursor-pointer">
					<img
						src={navBar}
						alt="Logo"
						className="w-[44px] h-[44px] pr-3"
					/>
					<Link to={"/"}>
						<img src={logo} alt="Logo" className="w-[135px] h-[47px]" />
					</Link>
				</div>
				<div className="w-3/6">
					<input
						type={"search"}
						className={"w-full h-[46px] shadow-md px-4 border rounded-xl"}
						placeholder="Search tables, chairs..."
					/>
				</div>
				<div className="flex items-center">
					<Link to={"/login"}>
						<p className="pr-5 cursor-pointer ">Login</p>
					</Link>
					<Link to={"/register"}>
						<p className="pr-5 pl-5 border-l-2 border-[#095319]">
							Register
						</p>
					</Link>
					<Link to={"/rent"}>
						<p className="px-8 border py-2 bg-[#095319] text-white">
							Rent
						</p>
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default NavigationBar;
