import React from "react";
import { motion } from "framer-motion";

// Example membership data
const membershipData = [
	{
		title: "Fellow Member (FFM)",
		description:
			"Requires M.Sc., MBA, Ph.D., or related qualifications with 20 years of working experience in finance, management, or related practice.",
		link: "/membership",
	},
	{
		title: "Full Member (MFM)",
		description:
			"Requires M.Sc., MBA, or related qualification with 10 years of working experience in finance, management, or related practice.",
		link: "/membership",
	},
	{
		title: "Associate Member (AFM)",
		description:
			"Requires B.Sc., HND, or related qualification with 5 years of working experience in accounting, banking, finance, or management.",
		link: "/membership",
	},
	{
		title: "Graduate Member (GFM)",
		description:
			"Requires B.Sc., HND, or related qualifications with fewer than 5 years of working experience in finance or management fields.",
		link: "/membership",
	},
	{
		title: "Licentiate Member (LFM)",
		description:
			"Registered students automatically become members upon admission to the Finance & Management Research Institute.",
		link: "/membership",
	},
	{
		title: "Corporate Member (CFM)",
		description:
			"Open to accomplished individuals or organizations with a minimum of 10 years in a senior management position or operational experience.",
		link: "/membership",
	},
];

const About = () => {
	return (
		<section className="py-12 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4">
				{/* ABOUT US & EXPANDED KNOWLEDGE */}
				<motion.div
					className="mb-12"
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.3 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl font-bold text-navyblue mb-4">ABOUT US</h2>
					<h3 className="text-xl font-semibold text-secondaryblue mb-2">
						Expanded Knowledge
					</h3>
					<p className="text-gray-700 leading-relaxed">
						Finance and Management Research Institute Ltd/Gte (FMRI) is set up
						to conduct in-depth research into the two core areas of finance and
						management and to bring to light the most up-to-date developments in
						finance and management. Business dealings and engagement are in dire
						need of finance and management in order to grow rapidly and
						efficiently; for this reason, adequate and effective thorough
						research will bring this out for better performance and achievement.
					</p>
				</motion.div>

				{/* MEMBERSHIP CATEGORIES */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3, delay: 0.1 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl font-bold text-navyblue mb-6 text-center">
						Membership Categories
					</h2>
					<p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
						Join the FMRIN community at a level that matches your experience and
						career goals.
					</p>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
						{membershipData.map((member, index) => (
							<motion.div
								key={index}
								className="bg-white border-l-4 border-accentcolor p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform"
								// Stagger each card’s entrance
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: index * 0.1 }}
								viewport={{ once: true }}
							>
								<h3 className="text-xl font-semibold text-navyblue mb-2">
									{member.title}
								</h3>
								<p className="text-gray-700 mb-4">{member.description}</p>
								<a
									href={member.link}
									className="text-secondaryblue font-medium hover:underline"
								>
									Learn More
								</a>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;
