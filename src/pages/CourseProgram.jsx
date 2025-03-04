import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	FaSearch,
	FaLightbulb,
	FaGraduationCap,
	FaCertificate,
	FaBuilding,
	FaChalkboardTeacher,
} from "react-icons/fa";

/* 
  Replace with your own background image for the hero section, e.g.:
  "https://your-cdn.com/fmrin-course-bg.jpg"
*/
const heroBg =
	"https://res.cloudinary.com/dt1vxscki/image/upload/v1741106081/wmremove-transformed_ojlvv2.webp";

/**
 * Each course object includes:
 * - id: Unique string for the accordion
 * - title: Display name (BPC, FMP-1, etc.)
 * - description: EXACT text from your screenshots
 * - subjectTaking: EXACT subject lists from your screenshots
 * - paymentDetails: EXACT fee details from your screenshots
 */
const courseData = [
	{
		id: "bpc",
		title: "Basic Professional Certificate (BPC)",
		description:
			"This is the make up level to meet up with the require subjects needed to start from level 1 – FMP1",
		subjectTaking: [
			"1. Accounting",
			"2. English",
			"3. Government",
			"4. Mathematics",
			"5. Economics",
			"6. Commerce",
			"7. Business Methods",
			"8. Computer Informations System",
		],
		subjectTakingExtra:
			"any 5 subjects including English, Mathematics and Accounts",
		paymentDetails: [
			"Registration Fee: ₦5,000",
			"Tuition Fee: ₦20,000 per Subject",
			"Exemption Fee per Subject: ₦10,000",
		],
	},
	{
		id: "fmp1",
		title: "Finance and Management Professional (FMP) 1",
		description:
			"This level is the foundation stage into the professional level. This level is in two modules. Student can take each subject separately or as a group. Entry requirement: 5 credits of required subjects in WACE, GCE, NECO, SSCE, ND, NCE, BPC, or other related courses.",
		subjectTaking: [
			"First Module:",
			"1. Financial Accounting 1",
			"2. Business Communication",
			"3. Principles of Business Law 1",
			" ",
			"Second Module:",
			"4. Statistics 1",
			"5. Business Organisation and Administration 1",
			"6. Business Information Management",
		],
		subjectTakingExtra: "6",
		paymentDetails: [
			"Registration Fee: ₦5,000",
			"Tuition Fee: ₦25,000 per Subject",
			"Exemption Fee per Subject: ₦10,000",
		],
	},
	{
		id: "fmp2",
		title: "Finance and Management Professional (FMP) 2",
		description:
		"This level is second stage. Student can take each subject separately or as a group. Entry requirement: ND, NCE, FMP1, or other related certificate.",
		subjectTaking: [
			"First Module:",
			"1. Financial Accounting 2",
			"2. Taxation",
			"3. Budgetary and Control",
			"",
			"Second Module:",
			"4. General Management",
			"5. Finance and Management Research Project",
			"6. Management Accounts",
		],
		subjectTakingExtra: "6",
		paymentDetails: [
			"Registration Fee: ₦5,000",
			"Tuition Fee: ₦30,000 per Subject",
			"Exemption Fee per Subject: ₦15,000",
		],
	},
	{
		id: "fmp3",
		title: "Finance and Management Professional (FMP) 3",
		description:
		"This level is for professional expert. Student can take each subject separately or as a group. Entry requirement: FMP2, Bsc, HND, Msc, MBA, or other related certificate.",
		subjectTaking: [
			"First Module:",
			"1. Audit Standard and Practice",
			"2. Commercial Law",
			"3. Budgetary and Control",
			"",
			"Second Module:",
			"4. Research Project 1",
			"5. Investment and Portfolio Management",
			"6. Ethical and Professional Standards 1",
		],
		subjectTakingExtra: "6",
		paymentDetails: [
			"Registration Fee: ₦5,000",
			"Tuition Fee: ₦35,000 per Subject",
			"Exemption Fee per Subject: ₦20,000",
		],
	},
	{
		id: "ffmp",
		title: "Fellow Finance and Management Professional (FFMP)",
		description:
			"This level is for highly professional expert and is the final stage. Entry requirement: FMP3, Msc, MBA, Phd, or other related certificate.",
		subjectTaking: [
			"1. Corporate Finance and Reporting",
			"2. Pure Management",
			"3. Research Project 2",
			"4. Ethical and Professional Standards 2",
		],
		subjectTakingExtra: "4",
		paymentDetails: [
			"Registration Fee: ₦5,000",
			"Tuition Fee: ₦40,000 per Subject",
			"Exemption Fee per Subject: ₦25,000",
		],
	},
];

const CourseProgram = () => {
	const [openItem, setOpenItem] = useState(null);

	// Toggles accordion open/close
	const handleToggle = (id) => {
		setOpenItem((prev) => (prev === id ? null : id));
	};

	return (
		<div className="w-full">
			{/* HERO / HEADING SECTION */}
			<section
				className="relative w-full h-[300px] md:h-[400px] pt-20  bg-center bg-cover bg-no-repeat flex items-center justify-center"
				style={{ backgroundImage: `url(${heroBg})` }}
			>
				{/* Dark overlay for text legibility */}
				<div className="absolute inset-0 bg-black bg-opacity-80"></div>
				<motion.div
					className="relative z-10 text-center px-4"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
				>
					<h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
						Course Programme
					</h1>
					<p className="text-white max-w-xl mx-auto">
						Discover our comprehensive levels of courses designed to help you
						excel in finance and management.
					</p>
				</motion.div>
			</section>

			{/* STUDENT PROGRAM SECTION */}
			<section className="py-12 bg-white">
				<div className="max-w-6xl mx-auto px-4">
					<motion.div
						className="text-center mb-10"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						<h2 className="text-2xl md:text-3xl font-bold text-navyblue mb-4">
							Student Programme
						</h2>
						<p className="text-gray-700 mx-auto">
							There are five levels of courses. Students can take individual
							courses or as groups with an award and certification given at a
							successful level of completion. Any subject passed is valid for
							life.
						</p>
						<p className="text-gray-700 max-w-2xl mx-auto mt-2">
							Advance at your own pace, focusing on specific subjects or
							completing entire modules as needed.
						</p>
					</motion.div>

					<motion.div
						className="bg-gray-50 p-6 rounded-lg shadow-md"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						<h3 className="text-xl font-semibold text-secondaryblue mb-2">
							Student Application Fee: <span className="font-bold">₦5,000</span>
						</h3>
						<p className="text-gray-700">
							This fee covers your initial registration, ensuring you can begin
							your journey with us before advancing to any of the course levels.
						</p>
					</motion.div>
				</div>
			</section>

			{/* ACCORDION SECTION (COURSE LEVELS) */}
			<section className="py-12 bg-gray-50">
				<div className="max-w-6xl mx-auto px-4">
					<motion.div
						className="text-center mb-10"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						<h2 className="text-2xl md:text-3xl font-bold text-navyblue mb-4">
							Our Course Levels
						</h2>
						<p className="text-gray-700 max-w-2xl mx-auto">
							Expand each section to see the exact subject lists and payment
							details for each level.
						</p>
					</motion.div>

					{courseData.map((course) => (
						<div key={course.id} className="mb-4">
							{/* Accordion Header */}
							<motion.button
								onClick={() => handleToggle(course.id)}
								className="w-full flex items-center justify-between bg-white px-4 py-3 text-left rounded-md shadow hover:shadow-md transition-shadow"
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3 }}
								viewport={{ once: true }}
							>
								<span className="text-navyblue font-semibold">
									{course.title}
								</span>
								<svg
									className={`w-5 h-5 text-navyblue transform transition-transform ${
										openItem === course.id ? "rotate-180" : "rotate-0"
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
								{openItem === course.id && (
									<motion.div
										className="bg-white rounded-md shadow p-4 mt-2"
										key="content"
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3 }}
									>
										<p className="text-gray-700 mb-4">{course.description}</p>

										{/* Subject Taking */}
										{course.subjectTaking &&
											course.subjectTaking.length > 0 && (
												<>
													<h4 className="text-secondaryblue font-semibold mb-2">
														Subject Taking ({course.subjectTakingExtra})
													</h4>
													<ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
														{course.subjectTaking.map((subj, idx) => (
															<li key={idx}>{subj}</li>
														))}
													</ul>
												</>
											)}

										{/* Payment Details */}
										<h4 className="text-secondaryblue font-semibold mb-2">
											Payment Details
										</h4>
										<ul className="list-disc list-inside text-gray-700 space-y-1">
											{course.paymentDetails.map((detail, idx) => (
												<li key={idx}>{detail}</li>
											))}
										</ul>
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
						Become A Member!
					</motion.h2>
					<motion.p
						className="max-w-2xl mx-auto mb-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
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

			{/* OUR CORE OBJECTIVES SECTION */}
			<section className="py-12 bg-white">
				<div className="max-w-6xl mx-auto px-4">
					<motion.div
						className="text-center mb-10"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						<h2 className="text-2xl md:text-3xl font-bold text-navyblue mb-4">
							Our Core Objectives
						</h2>
						<p className="text-gray-700 max-w-2xl mx-auto">
							We bring the right people together to challenge established
							thinking and drive transformation in finance and management.
						</p>
					</motion.div>

					{/* Objectives Grid */}
					<motion.div
						className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						{/* Research */}
						<div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center">
							<div className="text-accentcolor text-4xl mb-4">
								<FaSearch />
							</div>
							<h3 className="text-navyblue text-lg font-semibold mb-2">
								Research
							</h3>
							<p className="text-gray-700 text-sm">
								We conduct in-depth research into core areas of finance and
								management to keep you ahead.
							</p>
						</div>

						{/* Innovation */}
						<div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center">
							<div className="text-accentcolor text-4xl mb-4">
								<FaLightbulb />
							</div>
							<h3 className="text-navyblue text-lg font-semibold mb-2">
								Innovation
							</h3>
							<p className="text-gray-700 text-sm">
								We pioneer new approaches and solutions that foster growth and
								efficiency.
							</p>
						</div>

						{/* Education */}
						<div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center">
							<div className="text-accentcolor text-4xl mb-4">
								<FaGraduationCap />
							</div>
							<h3 className="text-navyblue text-lg font-semibold mb-2">
								Education
							</h3>
							<p className="text-gray-700 text-sm">
								We provide practical, qualitative education and training for
								both students and professionals.
							</p>
						</div>

						{/* Certification */}
						<div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center">
							<div className="text-accentcolor text-4xl mb-4">
								<FaCertificate />
							</div>
							<h3 className="text-navyblue text-lg font-semibold mb-2">
								Certification
							</h3>
							<p className="text-gray-700 text-sm">
								Earn recognized credentials to advance your career and showcase
								your expertise.
							</p>
						</div>

						{/* Organisation */}
						<div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center">
							<div className="text-accentcolor text-4xl mb-4">
								<FaBuilding />
							</div>
							<h3 className="text-navyblue text-lg font-semibold mb-2">
								Organisation
							</h3>
							<p className="text-gray-700 text-sm">
								We disseminate cutting-edge knowledge to help organizations
								thrive in competitive markets.
							</p>
						</div>

						{/* Mentorship (Optional) */}
						<div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center">
							<div className="text-accentcolor text-4xl mb-4">
								<FaChalkboardTeacher />
							</div>
							<h3 className="text-navyblue text-lg font-semibold mb-2">
								Mentorship
							</h3>
							<p className="text-gray-700 text-sm">
								Connect with industry experts who guide and support your
								professional growth.
							</p>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default CourseProgram;
