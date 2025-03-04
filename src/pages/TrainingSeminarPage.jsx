import React from "react";
import { motion } from "framer-motion";

// Example hero background
const trainingHeroBg =
	"https://res.cloudinary.com/dt1vxscki/image/upload/v1741106081/wmremove-transformed_ojlvv2.webp";

const TrainingSeminarPage = () => {
	return (
		<div className="w-full">
			{/* HERO SECTION */}
			<section
				className="relative w-full h-[300px] md:h-[400px] pt-20 bg-center bg-cover bg-no-repeat flex items-center justify-center"
				style={{ backgroundImage: `url(${trainingHeroBg})` }}
			>
				<div className="absolute inset-0 bg-black bg-opacity-80"></div>
				<motion.div
					className="relative z-10 text-center px-4"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
				>
					<h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
						Training &amp; Seminar
					</h1>
					<p className="text-white max-w-xl mx-auto">
						Enhance your knowledge and skills with our specialized training
						programs and seminars.
					</p>
				</motion.div>
			</section>

			{/* TRAINING DETAILS */}
			<section className="py-12 bg-white">
				<div className="max-w-6xl mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						<h2 className="text-2xl md:text-3xl font-bold text-navyblue mb-4">
							Knowledge: Training &amp; Seminar
						</h2>
						<p className="text-gray-700 leading-relaxed mb-6">
							We do organize training and seminars on subject matter in the area
							of specialization. The organization are in dear need of a well
							qualify and knowledgeable individual that will bring in more
							insightful knowledge for effectiveness and efficiency that bring
							greater development. Therefore, comes the need for good training
							and seminars, adequate lectures that will bring better performance
							and achievement. You or your organization can make yourself
							available for the following courses for training and seminars:
						</p>

						<ul className="list-disc list-inside bg-gray-100 p-4 rounded-md shadow mb-8 space-y-2">
							<li>Principles of Accounting Practices</li>
							<li>Computer Information System in an Organisation</li>
							<li>Office Practices and Principles</li>
							<li>Finance and Management in an Organisation Setting</li>
							<li>Computer Operation and Processing</li>
							<li>Internal Audit and control in an organization</li>
							<li>Taxation Principles and Practices</li>
							<li>Internal control System in an organization</li>
							<li>Office Administration and practice</li>
							<li>
								Motivational attitude and human relation in an organization,
								etc.
							</li>
						</ul>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						<h3 className="text-xl font-bold text-secondaryblue mb-2">
							External Student Examination Program
						</h3>
						<p className="text-gray-700 mb-6 leading-relaxed">
							We do run an external student examination program for both our
							internal and external students. External candidates benefit from
							sitting for an examination in their desired subjects. The beauty
							of it all is that any subject passed is passed forever, and a
							detailed result will be issued for certification.
						</p>

						<h3 className="text-xl font-bold text-secondaryblue mb-2">
							Research Journal Program
						</h3>
						<p className="text-gray-700 mb-6 leading-relaxed">
							Periodically, we organize research projects where we invite anyone
							interested to participate. The result of the research project is
							published in our research journal and bulletin for the benefit of
							everyone.
						</p>
					</motion.div>
				</div>
			</section>

			{/* CTA SECTION */}
			<section className="py-12 bg-gradient-to-r from-navyblue to-secondaryblue text-white text-center">
				<div className="max-w-5xl mx-auto px-4">
					<motion.h2
						className="text-2xl md:text-3xl font-bold mb-4"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						Become A Member!
					</motion.h2>
					<motion.p
						className="max-w-2xl mx-auto mb-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						Join our community and take the next step in your finance and
						management career. Collaborate, network, and grow with us.
					</motion.p>
					<motion.a
						href="/apply"
						className="inline-block bg-accentcolor text-navyblue font-semibold py-3 px-6 rounded-md hover:bg-white transition-colors"
						initial={{ scale: 0.9 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Apply Now
					</motion.a>
				</div>
			</section>
		</div>
	);
};

export default TrainingSeminarPage;
