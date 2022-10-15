import React from "react";
import MainLayout from "../../Components/Layouts/MainLayout";
import Product from "../../Assets/img/product.png";
import ProductCard from "../../Components/CardsComponents/ProductCard";

const HomePage = () => {
	return (
		<MainLayout>
			{/* Banner */}
			<div className="w-full bg-[#09531965] h-[328px]"></div>

			{/* Shop header */}
			<div className="mt-20 flex justify-between items-center">
				<div className="flex items-center">
					<div className="bg-[#095319] px-4 py-2 rounded-full text-white mr-6">
						All
					</div>
					<div className="bg-[#13131318] px-4 py-2 rounded-full mr-6">
						Trending
					</div>
					<div className="bg-[#13131318] px-4 py-2 rounded-full mr-6">
						Recommended
					</div>
				</div>
				<div>
					<div className="bg-[#095319] px-4 py-2 rounded-full text-white">
						View All
					</div>
				</div>
			</div>

			{/* Products container */}
			<div className="grid grid-cols-4 gap-6 mt-16">
				<ProductCard image={Product} />
				<ProductCard image={Product} />
				<ProductCard image={Product} />
				<ProductCard image={Product} />
				<ProductCard image={Product} />
				<ProductCard image={Product} />
				<ProductCard image={Product} />
				<ProductCard image={Product} />
			</div>
		</MainLayout>
	);
};

export default HomePage;
