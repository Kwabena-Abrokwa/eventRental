import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ image }) => {
	return (
		<Link to={`/product/${1}`}>
			<div className="shadow cursor-pointer rounded-md">
				<img
					src={image}
					alt="Products"
					className="w-full h-[200px] rounded-t-md"
				/>
				<div className="py-6 px-4">
					<div className="flex justify-between items-center py-2">
						<p>Cantoment</p>
						<p>GHS 2.00 / day</p>
					</div>
					<h3>Plastic Chairs</h3>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
