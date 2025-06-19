import Image from "next/image";

export default function Aboutus() {
    return(
		<div className="bg-primary pt-20">
        	<section className="px-24 py-24 bg-white rounded-t-[4rem] p-6 shadow-md">
				<div className="container mx-auto px-4">
					<div
						className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left"
					>
						<div className="flex flex-col justify-center">
							<h2 className="text-5xl mb-8 text-primary font-bold">About Us</h2>
							<p
								style={{ textAlign: "justify" }} className="text-justify text-xl mb-8 font-semibold leading-relaxed text-primary"
							>
								Founded in 2010, Cohee started as a small coffee cart with a big
								dream. Our mission is to provide exceptional coffee experiences
								while supporting sustainable farming practices and building
								community connections. We value quality, authenticity, and
								creating welcoming spaces where everyone feels at home.
							</p>
						</div>
						<Image
							className="w-full h-auto rounded shadow-md"
							src="/images/history-coffee.jpg"
							alt="Cohee coffee shop history"
							width={800}
							height={500}
						/>
					</div>
				</div>
			</section>
		</div>
    );
};
