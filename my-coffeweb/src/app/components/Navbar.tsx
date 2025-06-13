import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav className="sticky top-0 z-50 w-full bg-primary shadow-md">
			<div className="container mx-auto px-4 flex items-center justify-between h-16">
				<Link href="/" className="block">
					<Image
						src="/images/coffee-logo.svg"
						alt="Logo brand"
						width={35}
						height={35}
						className="w-[4.5rem] h-auto"
					/>
				</Link>
				<nav className="hidden md:flex items-center gap-8">
					<Link
						href="index.html"
						className="text-lg font-medium text-white hover:text-secondary transition-all duration-300"
					>
						Home
					</Link>
					<Link
						href="about.html"
						className="text-lg font-medium text-white hover:text-secondary transition-all duration-300"
					>
						About
					</Link>
					<Link
						href="blogs.html"
						className="text-lg font-medium text-white hover:text-secondary transition-all duration-300"
					>
						Blog
					</Link>
					<Link
						href="menu.html"
						className="text-lg font-medium text-white hover:text-secondary transition-all duration-300"
					>
						Menu
					</Link>
				</nav>
				<div className="flex gap-4 items-center">
					<div className="hamburger md:hidden cursor-pointer">
						<span className="bar block w-[25px] h-[3px] my-[5px] mx-auto bg-white transition-all duration-300"></span>
						<span className="bar block w-[25px] h-[3px] my-[5px] mx-auto bg-white transition-all duration-300"></span>
						<span className="bar block w-[25px] h-[3px] my-[5px] mx-auto bg-white transition-all duration-300"></span>
					</div>
					<div className="hamburger__menu fixed left-[-100%] top-16 flex-col bg-primary w-full text-center transition-all duration-300 shadow-lg py-8 z-[99]">
						<Link
							href="index.html"
							className="block py-6 text-white text-xl hover:text-secondary transition-all duration-300"
						>
							Home
						</Link>
						<Link
							href="about.html"
							className="block py-6 text-white text-xl hover:text-secondary transition-all duration-300"
						>
							About
						</Link>
						<Link
							href="blogs.html"
							className="block py-6 text-white text-xl hover:text-secondary transition-all duration-300"
						>
							Blog
						</Link>
						<Link
							href="menu.html"
							className="block py-6 text-white text-xl hover:text-secondary transition-all duration-300"
						>
							Menu
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;