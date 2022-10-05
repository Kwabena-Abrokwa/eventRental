import React, { useState } from "react";

const HomePage = () => {
	const [first, setfirst] = useState("second");

	const hello = () => {
		setfirst(true);
	};

	return <button>{first}</button>;
};

export default HomePage;
