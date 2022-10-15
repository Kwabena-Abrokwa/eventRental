import React from "react";
import MainLayout from "../../Components/Layouts/MainLayout";
import Product from "../../Assets/img/chair.png";
import ProductCard from "../../Components/CardsComponents/ProductCard";

const ProductView = () => {
	return (
		<MainLayout>
			<div>
				<div className="flex items-start justify-between mb-20">
					<div className="">
						<img
							src={Product}
							alt={"ProductName"}
							className={"w-[650px] h-[586px]"}
						/>
					</div>
					<div className="w-3/6 pl-6">
						{/* General Info */}
						<div className="info">
							<h3 className="text-left text-[#095319]">NANA AND SONS</h3>
							<h3 className="text-4xl font-medium">Plastic Chairs</h3>
							<h3 className="text-3xl font-light">GHS 20.00 per day</h3>
						</div>

						{/* Location and Ratings */}
						<div className="location-rating my-6">
							<p>Cantoments</p>
							<div>
								<p>500 ratings</p>
							</div>
						</div>

						{/*Border */}
						<div className="border-t-2 pb-6" />

						{/* About */}
						<div>
							<h4 className="text-md">About Plastic Chair</h4>
							<p className="font-light">
								Superior Strength. Frame material-powder-coated Steel
								Wide Seat and Tall Back Made of High-Impact Polyethylene
								Steel Frame with All-Weather Finish Stain Resistant and
								Easy to Clean
							</p>
						</div>

						{/* Buttons and Inputs */}
						<div className="pt-5">
							<div className="flex justify-between items-start w-full">
								<div className="w-2/6">
									<h4 className="">Rental Dates</h4>
								</div>
								<div className="w-2/6">
									<h4 className="">Quantity</h4>
								</div>
								<div className="w-2/6">
									<h4 className="">Total</h4>
								</div>
							</div>
							<div className="flex justify-between items-start mt-4">
								<div className="w-2/6">
									<input type={"date"} />
								</div>

								<div className="w-2/6">
									<div className="flex justify-between items-center px-5 py-3 w-5/6 border border-black rounded-2xl">
										<div>-</div>
										<div>
											<p>1</p>
										</div>
										<div>+</div>
									</div>
								</div>

								<div className="w-2/6">
									<button className="bg-black px-8 py-3 text-white">
										GHS 50.00
									</button>
								</div>
							</div>
						</div>

						{/*Add Buttons*/}
						<div className="w-full mt-10">
							<button className="text-center bg-[#095319] w-full text-white h-[50px] rounded-md">
								Add to cart
							</button>
							<div className="mt-4 flex justify-between">
								<button className="text-center border-[#095319] border text-[#095319] h-[50px] rounded-md w-full">
									Contact Vendor
								</button>
								<div className="w-10" />
								<button className="text-center border-[#095319] border text-[#095319] h-[50px] rounded-md w-full">
									Contact Vendor
								</button>
							</div>
						</div>
					</div>
				</div>
				<div>
					{/* Products container */}
					<h3 className="text-center text-3xl">Similar Products</h3>
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
				</div>
			</div>
		</MainLayout>
	);
};

export default ProductView;
