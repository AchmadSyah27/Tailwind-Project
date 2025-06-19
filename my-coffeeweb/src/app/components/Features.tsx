export default function Features() {
    return(
		<div className="bg-primary">
			<section id="features" className="py-24 bg-white rounded-b-[4rem]">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl text-primary text-center mb-8 font-bold">
						Our Services
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div
							className="bg-primary p-8 rounded text-center shadow-md hover:transform hover:-translate-y-1 transition-all duration-300"
						>
							<div className="text-5xl mb-4">☕</div>
							<h3 className="text-2xl text-white mb-4 text-capitalize font-bold">
								Premium Coffee
							</h3>
							<p className="text-cream">
								Hand-selected beans from around the world
							</p>
						</div>
						<div
							className="bg-primary p-8 rounded text-center shadow-md hover:transform hover:-translate-y-1 transition-all duration-300"
						>
							<div className="text-5xl mb-4">🌱</div>
							<h3 className="text-2xl text-white mb-4 font-bold">Organic</h3>
							<p className="text-cream">100% organic ingredients for every brew</p>
						</div>
						<div
							className="bg-primary p-8 rounded text-center shadow-md hover:transform hover:-translate-y-1 transition-all duration-300"
						>
							<div className="text-5xl mb-4">🚚</div>
							<h3 className="text-2xl text-white mb-4 font-bold">Fast Delivery</h3>
							<p className="text-cream">Get your coffee delivered quickly</p>
						</div>
					</div>
				</div>
			</section>
		</div>
    );
};
