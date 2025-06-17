import Image from "next/image";
export default function Footer() {
    return(
        <footer className="py-16 pb-8 bg-primary text-white">
            <div className="container mx-auto px-4 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="flex flex-col gap-4">
                        <a href="#" className="block">
                            <Image
                                src="images/coffee-logo.svg"
                                alt="Cohee logo"
                                width={75}
                                height={26}
                                className="w-[4.5rem] mb-4 object-contain"
                            />
                        </a>
                        <p className="mb-6 leading-relaxed">
                            Crafting exceptional coffee experiences since 2010. Join us in
                            our passion for quality beans, expert brewing, and creating a
                            warm, welcoming community space.
                        </p>
                        <div className="flex flex-col gap-3">
                            <a
                                href="#"
                                className="text-white hover:text-secondary transition-all duration-300"
                                >123 Eco Street, Green City</a
                            >
                            <a
                                href="tel:+15555555555"
                                className="text-white hover:text-secondary transition-all duration-300"
                                >+1 (555) 555-5555</a
                            >
                            <a
                                href="mailto:contact@comment.com"
                                className="text-white hover:text-secondary transition-all duration-300"
                                >contact@comment.com</a
                            >
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl mb-2">Quick Links</h3>
                        <ul className="flex flex-col">
                            <li className="my-2">
                                <a
                                    href="index.html"
                                    className="text-white hover:text-secondary transition-all duration-300"
                                    >Home
                                </a>
                            </li>
                            <li className="my-2">
                                <a
                                    href="about.html"
                                    className="text-white hover:text-secondary transition-all duration-300"
                                    >About
                                </a>
                            </li>
                            <li className="my-2">
                                <a
                                    href="blogs.html"
                                    className="text-white hover:text-secondary transition-all duration-300"
                                    >Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl mb-2">Social Media</h3>
                        <ul className="flex flex-col">
                            <li className="my-2">
                                <a
                                    href="#"
                                    className="text-white hover:text-secondary transition-all duration-300"
                                >
                                    <i className="fab fa-instagram"></i> Instagram
                                </a>
                            </li>
                            <li className="my-2">
                                <a
                                    href="#"
                                    className="text-white hover:text-secondary transition-all duration-300"
                                >
                                    <i className="fab fa-facebook"></i> Facebook
                                </a>
                            </li>
                            <li className="my-2">
                                <a
                                    href="#"
                                    className="text-white hover:text-secondary transition-all duration-300"
                                >
                                    <i className="fab fa-linkedin"></i> LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-6 border-none h-px bg-white/20" />
                <div className="text-center text-sm opacity-80">
                    <p>Copyright &copy; 2025 Cohee. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
