import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Example hero background (replace with your actual image)
const heroBg =
	"https://res.cloudinary.com/dt1vxscki/image/upload/v1741106081/wmremove-transformed_ojlvv2.webp";

// Dummy membership data for the accordion
const membershipCategories = [
	{
		id: "lfm",
		title: "Licentiate Member (LFM)",
		description:
			"Registered student automatically becomes a member of the Finance and Management Research Institute at the time of admission. The designation letters may be used by students for examinations, on identification letters, or on identification cards.",
		membershipFee: "",
	},
	{
		id: "gfm",
		title: "Graduate Member (GFM)",
		description:
			"Person with BSc, HND, or related qualifications with less than 5 years of working experience in accounting, banking and finance, management, or related practice. Cost N100,000.00",
		membershipFee: "Membership Fee: ₦100,000",
	},
	{
		id: "afm",
		title: "Associate Member (AFM)",
		description:
			"Person with BSc, HND, or related qualification with 5 years or more of working experience in accounting, banking and finance, management, or related practice. Cost N150,000.00",
		membershipFee: "Membership Fee: ₦150,000",
	},
	{
		id: "mfm",
		title: "Full Member (MFM)",
		description:
			"Person with MSc, MBA, or related qualification with 10 years or more of working experience in finance and management or related practice.",
		membershipFee: "Membership Fee: ₦250,00",
	},
	{
		id: "ffm",
		title: "Fellow Member (FFM)",
		description:
			"Person with MSc, MBA, Phd, or related qualifications with 20 years or more of working experience in finance and management or related practice.",
		membershipFee: "Membership Fee: ₦350,000",
	},
	{
		id: "cfm",
		title: "Corporate Member (CFM)",
		description:
			"An accomplished person or organization with years of working experience in a senior management position, or the organization has been in operation for at least 10 years with success history.",
		membershipFee: "Membership Fee: ₦350,000",
	},
];

const Membership = () => {
	const [openItem, setOpenItem] = useState(null);

	const handleToggle = (id) => {
		setOpenItem((prev) => (prev === id ? null : id));
	};

	return (
		<div className="w-full">
			{/* HERO SECTION */}
			<section
				className="relative w-full h-[300px] md:h-[400px]  pt-20 bg-center bg-cover bg-no-repeat flex items-center justify-center"
				style={{ backgroundImage: `url(${heroBg})` }}
			>
				<div className="absolute inset-0 bg-black bg-opacity-80"></div>
				<motion.div
					className="relative z-10 text-center px-4"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
				>
					<h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
						Membership
					</h1>
					<p className="text-white max-w-xl mx-auto">
						Join our vibrant community and unlock exclusive benefits as a member
						of FMRIN.
					</p>
				</motion.div>
			</section>

			{/* BENEFIT OF A MEMBER */}
			<section className="py-12 bg-white">
				<div className="max-w-6xl mx-auto px-4">
					<motion.div
						className="mb-6 text-center"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						<h2 className="text-2xl md:text-3xl font-bold text-navyblue mb-4">
							Benefit of a Member
						</h2>
						<p className="text-gray-700 max-w-2xl mx-auto">
							Enjoy a wide range of benefits, including networking
							opportunities, professional development resources, and recognition
							of your expertise.
						</p>
					</motion.div>

					<motion.ul
						className="list-disc list-inside bg-gray-50 p-6 rounded-lg shadow space-y-2"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						<li className="text-gray-700">
							Access to exclusive webinars, seminars, and industry events.
						</li>
						<li className="text-gray-700">
							Networking with top professionals in finance and management.
						</li>
						<li className="text-gray-700">
							Discounts on certification courses and study materials.
						</li>
						<li className="text-gray-700">
							Opportunity to contribute to research journals and publications.
						</li>
						<li className="text-gray-700">Mentorship and career guidance.</li>
						<li className="text-gray-700">
							Recognition of professional status and credibility.
						</li>
						{/* Add or remove benefit items as needed */}
					</motion.ul>
				</div>
			</section>

			{/* MEMBERSHIP CATEGORIES ACCORDION */}
			<section className="py-12 bg-gray-50">
				<div className="max-w-6xl mx-auto px-4">
					<motion.div
						className="text-center mb-8"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						<h2 className="text-2xl md:text-3xl font-bold text-navyblue mb-4">
							Membership Categories
						</h2>
						<p className="text-gray-700 max-w-2xl mx-auto">
							Choose the membership level that matches your experience and
							career goals. Click to expand for details.
						</p>
					</motion.div>

					{membershipCategories.map((cat) => (
						<div key={cat.id} className="mb-4">
							{/* Accordion Header */}
							<motion.button
								onClick={() => handleToggle(cat.id)}
								className="w-full flex items-center justify-between bg-white px-4 py-3 text-left rounded-md shadow hover:shadow-md transition-shadow"
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3 }}
								viewport={{ once: true }}
							>
								<span className="text-navyblue font-semibold">{cat.title}</span>
								<svg
									className={`w-5 h-5 text-navyblue transform transition-transform ${
										openItem === cat.id ? "rotate-180" : "rotate-0"
									}`}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</motion.button>

							{/* Accordion Content */}
							<AnimatePresence>
								{openItem === cat.id && (
									<motion.div
										className="bg-white rounded-md shadow p-4 mt-2"
										key="content"
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3 }}
									>
										<p className="text-gray-700 mb-3">{cat.description}</p>
										<p className="text-secondaryblue font-semibold">
											{cat.membershipFee}
										</p>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>
			</section>

			{/* CTA SECTION: BECOME A MEMBER */}
			<section className="py-12 bg-gradient-to-r from-navyblue to-secondaryblue text-white text-center">
				<div className="max-w-5xl mx-auto px-4">
					<motion.h2
						className="text-2xl md:text-3xl font-bold mb-4"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						Become a Member Today!
					</motion.h2>
					<motion.p
						className="max-w-2xl mx-auto mb-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						Ready to take the next step in your professional journey? Join FMRIN
						and unlock your full potential in finance and management.
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

export default Membership;
