export default function Cta(){
    return(
			<section id="cta" className="py-24 bg-primary">
				<div className="container mx-auto px-4">
					<article
						className="flex flex-col items-center text-center text-white max-w-[700px] mx-auto"
					>
						<h2 className="text-4xl mb-4 font-bold" style={{textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)"}}>
							Order some coffee?
						</h2>
						<p className="text-xl mb-8">
							Order some coffee and get a discount on your first order
						</p>
						<button
							className="inline-block px-6 py-3 bg-green text-white text-base font-bold rounded uppercase shadow-md hover:bg-white hover:text-black transform hover:-translate-y-1 transition-all duration-300"
						>
							Order Now
						</button>
					</article>
				</div>
			</section>
    );
}