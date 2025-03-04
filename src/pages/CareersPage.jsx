import React from "react";
import { motion } from "framer-motion";

// Example hero background
const careersHeroBg =
	"https://res.cloudinary.com/dt1vxscki/image/upload/v1741106081/wmremove-transformed_ojlvv2.webp";

const CareersPage = () => {
	return (
		<div className="w-full">
			{/* HERO SECTION */}
			<section
				className="relative w-full h-[300px] md:h-[400px]  pt-20 bg-center bg-cover bg-no-repeat flex items-center justify-center"
				style={{ backgroundImage: `url(${careersHeroBg})` }}
			>
				<div className="absolute inset-0 bg-black bg-opacity-80"></div>
				<motion.div
					className="relative z-10 text-center px-4"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
				>
					<h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
						Careers
					</h1>
					<p className="text-white max-w-xl mx-auto">
						Explore opportunities to join our team and shape the future of
						finance and management.
					</p>
				</motion.div>
			</section>

			{/* NO JOB OPENINGS */}
			<section className="py-12 bg-white">
				<div className="max-w-4xl mx-auto px-4 text-center">
					<motion.h2
						className="text-2xl md:text-3xl font-bold text-navyblue mb-4"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						There are currently no job openings
					</motion.h2>
					<motion.p
						className="text-gray-700 mb-6"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						In the meantime, please drop us a message for further information.
					</motion.p>

					<motion.a
						href="/contact"
						className="inline-block bg-accentcolor text-navyblue font-semibold py-3 px-6 rounded-md hover:bg-secondaryblue hover:text-white transition-colors"
						initial={{ scale: 0.9 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Send Message
					</motion.a>
				</div>
			</section>
		</div>
	);
};

export default CareersPage;
