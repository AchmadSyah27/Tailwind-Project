// import { useState } from "react";
import React from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Section } from "lucide-react";

function Faq() {
	return (
		<section id="faq" className="py-16 bg-white">
			<div>
				<h2 className="text-3xl text-primary text-center mb-12 font-bold">
					Frequently Asked Questions
				</h2>
				<div>
					<Accordion type="single" collapsible>
						<AccordionItem
							value="item-1"
							className="w-full max-w-[800px] mx-auto space-y-4"
						>
							<div className="rounded overflow-hidden shadow-md border border-gray-200">
								<AccordionTrigger className="flex justify-between items-center p-5 bg-primary text-white cursor-pointer font-semibold transition-colors duration-300 hover:bg-secondary">
									Apakah tersedia layanan pesan antar?
								</AccordionTrigger>
								<AccordionContent className="px-4 py-3 bg-cream text-primary font-semibold">
									Ya, anda dapat memesan melalui aplikasi Gofood dan Shopeefood.
								</AccordionContent>
							</div>
						</AccordionItem>

						<AccordionItem
							value="item-2"
							className="w-full max-w-[800px] mx-auto space-y-4"
						>
							<div className="rounded overflow-hidden shadow-md border border-gray-200">
								<AccordionTrigger className="flex justify-between items-center p-5 bg-primary text-white cursor-pointer font-semibold transition-colors duration-300 hover:bg-secondary">
									Jenis kopi apa yang dijual?
								</AccordionTrigger>
								<AccordionContent className="px-4 py-3 bg-cream text-primary font-semibold">
									Kami menjual berbagai jenis kopi mulai dari Espresso, Latte,
									Cappuccino, hingga kopi seduh manual seperti V60 dan
									Aeropress. Kami menggunakan biji kopi Arabika dan Robusta
									pilihan.
								</AccordionContent>
							</div>
						</AccordionItem>

						<AccordionItem
							value="item-3"
							className="w-full max-w-[800px] mx-auto space-y-4"
						>
							<div className="rounded overflow-hidden shadow-md border border-gray-200">
								<AccordionTrigger className="flex justify-between items-center p-5 bg-primary text-white cursor-pointer font-semibold transition-colors duration-300 hover:bg-secondary">
									Apakah tersedia Wi-fi?
								</AccordionTrigger>
								<AccordionContent className="px-4 py-3 bg-cream text-primary font-semibold">
									Ya, kami menyediakan akses Wi-Fi gratis untuk semua pelanggan
									kami.
								</AccordionContent>
							</div>
						</AccordionItem>

						<AccordionItem
							value="item-4"
							className="w-full max-w-[800px] mx-auto space-y-4"
						>
							<div className="rounded overflow-hidden shadow-md border border-gray-200">
								<AccordionTrigger className="flex justify-between items-center p-5 bg-primary text-white cursor-pointer font-semibold transition-colors duration-300 hover:bg-secondary">
									Metode pembayaran apa saja yang tersedia?
								</AccordionTrigger>
								<AccordionContent className="px-4 py-3 bg-cream text-primary font-semibold">
									Pembayaran dapat dilakukan secara tunai (cash), menggunakan
									kartu debit/kredit (Visa, Mastercard), serta dompet digital
									(GoPay, OVO, Dana, ShopeePay).
								</AccordionContent>
							</div>
						</AccordionItem>

						<AccordionItem
							value="item-5"
							className="w-full max-w-[800px] mx-auto space-y-4"
						>
							<div className="rounded overflow-hidden shadow-md border border-gray-200">
								<AccordionTrigger className="flex justify-between items-center p-5 bg-primary text-white cursor-pointer font-semibold transition-colors duration-300 hover:bg-secondary">
									Apakah ada pilihan menu non-kopi?
								</AccordionTrigger>
								<AccordionContent className="px-4 py-3 bg-cream text-primary font-semibold">
									Tentu saja! Kami juga menawarkan berbagai pilihan teh, cokelat
									panas, jus segar, dan beberapa minuman spesial lainnya.
								</AccordionContent>
							</div>
						</AccordionItem>

						<AccordionItem
							value="item-6"
							className="w-full max-w-[800px] mx-auto space-y-4"
						>
							<div className="rounded overflow-hidden shadow-md border border-gray-200">
								<AccordionTrigger className="flex justify-between items-center p-5 bg-primary text-white cursor-pointer font-semibold transition-colors duration-300 hover:bg-secondary">
									Di mana lokasi Cohee?
								</AccordionTrigger>
								<AccordionContent className="px-4 py-3 bg-cream text-primary font-semibold">
									Anda dapat menemukan kami di 123 Eco Street, Green City. Kami
									buka setiap hari dari pukul 08:00 hingga 22:00.
								</AccordionContent>
							</div>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</section>
	);
}

export default Faq;

// const data = [
//   {
//     question: "Apakah tersedia layanan pesan antar?",
//     answer: "Ya, anda dapat memesan melalui aplikasi Gofood dan Shopeefood.",
//   },
//   {
//     question: "Jenis kopi apa yang dijual?",
//     answer:
//       "Kami menjual berbagai jenis kopi mulai dari Espresso, Latte, Cappuccino, hingga kopi seduh manual seperti V60 dan Aeropress. Kami menggunakan biji kopi Arabika dan Robusta pilihan.",
//   },
//   {
//     question: "Apakah tersedia Wi-fi?",
//     answer:
//       "Ya, kami menyediakan akses Wi-Fi gratis untuk semua pelanggan kami.",
//   },
//   {
//     question: "Metode pembayaran apa saja yang tersedia?",
//     answer:
//       "Pembayaran dapat dilakukan secara tunai (cash), menggunakan kartu debit/kredit (Visa, Mastercard), serta dompet digital (GoPay, OVO, Dana, ShopeePay).",
//   },
//   {
//     question: "Apakah ada pilihan menu non-kopi?",
//     answer:
//       "Tentu saja! Kami juga menawarkan berbagai pilihan teh, cokelat panas, jus segar, dan beberapa minuman spesial lainnya.",
//   },
//   {
//     question: "Di mana lokasi Cohee?",
//     answer:
//       "Anda dapat menemukan kami di 123 Eco Street, Green City. Kami buka setiap hari dari pukul 08:00 hingga 22:00.",
//   },
// ];

// export default function Faq() {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section id="faq" className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl text-primary text-center mb-12 font-bold">
//           Frequently Asked Questions
//         </h2>
//         <div className="w-full max-w-[800px] mx-auto space-y-4">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="accordion-item rounded overflow-hidden shadow-md border border-gray-200"
//             >
//               <div
//                 className="accordion__header flex justify-between items-center p-5 bg-primary text-white cursor-pointer font-semibold transition-colors duration-300 hover:bg-secondary"
//                 onClick={() => toggleAccordion(index)}
//               >
//                 <span>{item.question}</span>
//                 <span
//                   className={`icon text-2xl font-bold transform transition-transform duration-300 ${
//                     openIndex === index ? "rotate-45" : ""
//                   }`}
//                 >
//                   +
//                 </span>
//               </div>
//               <div
//                 className={`accordion__content bg-cream text-primary transition-all duration-500 ease-in-out overflow-hidden ${
//                   openIndex === index ? "max-h-[500px] p-5" : "max-h-0 p-0"
//                 }`}
//               >
//                 <p>{item.answer}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
