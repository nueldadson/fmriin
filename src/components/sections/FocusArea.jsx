import React from "react";
import { motion } from "framer-motion";
// Example icons from react-icons (install with `npm i react-icons`)
import { FaGraduationCap, FaBuilding, FaCertificate } from "react-icons/fa";

const focusAreas = [
	{
		title: "Education",
		description:
			"To teach, train, and educate people or students on the subjects of finance and management.",
		icon: <FaGraduationCap />,
	},
	{
		title: "Organisation",
		description:
			"Disseminating knowledge and information in finance and management with research findings.",
		icon: <FaBuilding />,
	},
	{
		title: "Certification",
		description:
			"Awarding certificates to members, students, and the general public.",
		icon: <FaCertificate />,
	},
];

const FocusArea = () => {
	return (
		<section className="py-12 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				{/* Title and tagline */}
				<motion.div
					className="mb-10 text-center"
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					viewport={{ once: true }} // replays animation on re-scroll
				>
					<h2 className="text-2xl md:text-3xl font-bold text-navyblue mb-4">
						We bring the right people together to challenge established thinking
						and drive transformation
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Our approach ensures continuous growth and innovation in the fields
						of finance and management.
					</p>
				</motion.div>

				{/* Three-column focus areas */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{focusAreas.map((area, index) => (
						<motion.div
							key={index}
							className="bg-gray-100 rounded-lg p-6 text-center shadow hover:shadow-lg transition-shadow"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
							viewport={{ once: true }} // replays animation on re-scroll
						>
							<div className="text-accentcolor text-5xl mb-4 mx-auto flex items-center justify-center">
								{area.icon}
							</div>
							<h3 className="text-navyblue text-xl font-semibold mb-2">
								{area.title}
							</h3>
							<p className="text-gray-600 text-sm md:text-base leading-relaxed">
								{area.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FocusArea;
