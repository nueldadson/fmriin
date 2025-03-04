import React from "react";
import { motion } from "framer-motion";

// Example hero background
const contactHeroBg =
	"https://res.cloudinary.com/dt1vxscki/image/upload/v1741106081/wmremove-transformed_ojlvv2.webp";

const ContactPage = () => {
	return (
		<div className="w-full">
			{/* HERO SECTION */}
			<section
				className="relative w-full h-[300px] md:h-[400px]  pt-20 bg-center bg-cover bg-no-repeat flex items-center justify-center"
				style={{ backgroundImage: `url(${contactHeroBg})` }}
			>
				<div className="absolute inset-0 bg-black bg-opacity-80"></div>
				<motion.div
					className="relative z-10 text-center px-4"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
				>
					<h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
						Contact Us
					</h1>
					<p className="text-white max-w-xl mx-auto">
						Get in touch with our team for inquiries, support, or collaboration.
					</p>
				</motion.div>
			</section>

			{/* CONTACT DETAILS + MAP */}
			<section className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 gap-8"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						{/* Location & Info */}
						<div>
							<h2 className="text-2xl md:text-3xl font-bold text-navyblue mb-4">
								Our Location
							</h2>
							<p className="text-gray-700 mb-4">
								47B, Lagos Abeokuta Exp U-turn B/Stop, FInance & Mgt House,
								Egbda, Lagos, Nigeria
							</p>
							<p className="text-gray-700 mb-4">
								<strong>Phone:</strong> +234 809 402 9139
							</p>
							<p className="text-gray-700 mb-6">
								<strong>Email:</strong> infofmrin@gmail.com
							</p>

							{/* Embedded Map (replace src with your own Google Maps embed link) */}
							<div className="w-full h-64 bg-gray-200">
								<iframe
									title="FMRIN Map Location"
									src="https://www.google.com/maps/embed?..."
									width="100%"
									height="100%"
									loading="lazy"
									className="border-0"
									allowFullScreen
								></iframe>
							</div>
						</div>

						{/* Contact Form */}
						<div>
							<h2 className="text-2xl md:text-3xl font-bold text-navyblue mb-4">
								Send a Message
							</h2>
							<form
								action="mailto:info@fimr.com?subject=Contact%20Us"
								method="post"
								encType="text/plain"
								className="space-y-4"
							>
								<div>
									<label className="block text-gray-700 mb-1" htmlFor="name">
										Name
									</label>
									<input
										id="name"
										name="Name"
										type="text"
										placeholder="Enter your name"
										className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondaryblue"
										required
									/>
								</div>
								<div>
									<label className="block text-gray-700 mb-1" htmlFor="email">
										Email
									</label>
									<input
										id="email"
										name="Email"
										type="email"
										placeholder="Enter your email"
										className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondaryblue"
										required
									/>
								</div>
								<div>
									<label className="block text-gray-700 mb-1" htmlFor="message">
										Message
									</label>
									<textarea
										id="message"
										name="Message"
										rows="5"
										placeholder="Write your message..."
										className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondaryblue"
										required
									></textarea>
								</div>
								<button
									type="submit"
									className="bg-accentcolor text-navyblue font-semibold py-2 px-6 rounded hover:bg-secondaryblue hover:text-white transition-colors"
								>
									Send Message
								</button>
							</form>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default ContactPage;
