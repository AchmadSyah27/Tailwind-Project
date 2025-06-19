"use client";
import { useState } from "react";

export default function Contactus() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleChat = () => {
		setIsOpen(!isOpen);
	};

	return (
		<section>
			<div className="fixed bottom-4 right-2 z-50">
				<button
					className="bg-teal text-white font-bold uppercase text-base px-5 py-3 rounded shadow-md hover:bg-white hover:text-black transition-all duration-300"
					onClick={toggleChat}
				>
					Contact Us
				</button>
			</div>

			{isOpen && (
				<div className="fixed bottom-8 right-2 bg-white border border-gray-300 rounded-lg shadow-lg w-80 mb-10 z-50">
					<div className="p-4">
						<h2 className="text-lg font-bold text-center text-gray-800 mb-1">
							Welcome to COHEE
						</h2>
						<p className="text-center text-gray-600">
							Ada yang bisa kami bantu?
						</p>

						<form className="mt-4 flex flex-col items-center gap-2">
							<input
								type="text"
								id="your_name"
								placeholder="Your name"
								className="text-black h-8 px-4 w-full border rounded"
							/>
							<input
								type="email"
								id="your_email"
								placeholder="you@gmail.com"
								className="text-black h-8 px-4 w-full border rounded"
							/>
							<input
								id="messageInput"
								type="text"
								placeholder="Tulis pesanmu.."
								className="text-black h-8 px-4 w-full border rounded"
							/>
							<button
								type="button"
								className="bg-primary text-white h-8 px-4 hover:bg-white hover:text-black transition-all duration-300 rounded"
							>
								Kirim
							</button>
						</form>
					</div>
				</div>
			)}
		</section>
	);
}
