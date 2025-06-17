import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Cta from "./components/CTA";
import Aboutus from "./components/Aboutus";
import Features from "./components/Features";
import Testimoni from "./components/Testimoni";
import Faq from "./components/Faq";
import Advertisement from "./components/Advertisement";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<>
			<Navbar />
			<Header />
			<Cta />
			<Aboutus/>
			<Features/>
			<Testimoni/>
			{/* <Faq /> */}
			<Advertisement/>
			<Footer/>
		</>
	);
}