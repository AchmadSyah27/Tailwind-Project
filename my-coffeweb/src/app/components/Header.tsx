export default function Header() {
	return (
		<section
			id="jumbotron"
			className="bg-[linear-gradient(rgba(45,34,40,0.9),rgba(45,34,40,0.9)),url('./assets/images/cta-background.jpg')] bg-center bg-cover h-[80vh] flex items-center justify-start text-left p-8 text-primary"
			style={{ text-shadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',}}>
			<div className="jumbotron__content max-w-[60rem] p-10 rounded">
				<h1
					className="text-white text-5xl font-bold mb-4 tracking-wider"
					style={{ text-shadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',}}>
					Cohee
				</h1>
				<p className="text-white text-2xl font-semibold mb-8 leading-relaxed">
					Discover your perfect brew at Cohee. Where every cup tells a story,
					and every sip is an adventure. Join us in celebrating the art of
					exceptional coffee.
				</p>
			</div>
		</section>
	);
}
