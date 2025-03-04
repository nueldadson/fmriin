import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Example hero background
const researchHeroBg =
	"https://res.cloudinary.com/dt1vxscki/image/upload/v1741106081/wmremove-transformed_ojlvv2.webp";

const researchQuestions = [
	{
		id: 1,
		question:
			"Question 1: The importance of finance and management in nation building?",
		answer:
			"Finance and management are pivotal to driving economic growth, enhancing corporate governance, and ensuring sustainable development within a nation...",
	},
	{
		id: 2,
		question:
			"Question 2: Is finance and management the right answer for business success?",
		answer:
			"Robust financial planning coupled with strong management strategies can significantly improve business performance...",
	},
	{
		id: 3,
		question:
			"Question 3: Finance and management research for a secular nation?",
		answer:
			"Research in finance and management can address diverse cultural, religious, and socio-economic factors that shape a secular nation’s growth...",
	},
	{
		id: 4,
		question:
			"Question 4: Foreign currency is the major effect of inflation in our nation; what can be done?",
		answer:
			"Inflation is influenced by various factors, including foreign currency fluctuations. To address this, the government and financial institutions can implement policies such as strengthening local production to reduce dependence on imports, improving foreign exchange reserves, promoting export-driven industries, and ensuring strict monetary policies to stabilize the economy.",
	},
	{
		id: 5,
		question:
			"Question 5: What steps are to be taken to bring foreign currency rates in line with local currency?",
		answer:
			"Bringing foreign currency rates in line with the local currency requires measures like boosting local production and exports, reducing reliance on imported goods, encouraging foreign investment, implementing effective monetary policies, and ensuring transparency in foreign exchange markets. Additionally, maintaining economic stability through controlled government spending and policies that support local industries can help balance currency rates.",
	},
	// Add more Q&A items as needed
];

const ResearchJournalPage = () => {
	const [openQ, setOpenQ] = useState(null);

	const handleToggle = (id) => {
		setOpenQ((prev) => (prev === id ? null : id));
	};

	return (
		<div className="w-full">
			{/* HERO SECTION */}
			<section
				className="relative w-full h-[300px] md:h-[400px] pt-20 bg-center bg-cover bg-no-repeat flex items-center justify-center"
				style={{ backgroundImage: `url(${researchHeroBg})` }}
			>
				<div className="absolute inset-0 bg-black bg-opacity-80"></div>
				<motion.div
					className="relative z-10 text-center px-4"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
				>
					<h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
						Research Journal
					</h1>
					<p className="text-white max-w-xl mx-auto">
						Explore our latest finance and management research topics and
						findings.
					</p>
				</motion.div>
			</section>

			{/* RESEARCH QUESTIONS */}
			<section className="py-12 bg-white">
				<div className="max-w-5xl mx-auto px-4">
					<motion.h2
						className="text-2xl md:text-3xl font-bold text-navyblue mb-6 text-center"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						Research Questions
					</motion.h2>
					<p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
						Participate and contribute to any of our research questions below.
						You have a chance to be featured in our published research journal
						bulletin.
					</p>

					{/* Accordion Q&A */}
					{researchQuestions.map((item) => (
						<div key={item.id} className="mb-4">
							<motion.button
								onClick={() => handleToggle(item.id)}
								className="w-full flex items-center justify-between bg-gray-50 px-4 py-3 text-left rounded-md shadow hover:shadow-md transition-shadow"
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3 }}
								viewport={{ once: true }}
							>
								<span className="text-navyblue font-semibold">
									{item.question}
								</span>
								<svg
									className={`w-5 h-5 text-navyblue transform transition-transform ${
										openQ === item.id ? "rotate-180" : "rotate-0"
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
							<AnimatePresence>
								{openQ === item.id && (
									<motion.div
										className="bg-white rounded-md shadow p-4 mt-2"
										key="content"
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3 }}
									>
										<p className="text-gray-700">{item.answer}</p>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					))}
				</div>
			</section>
		</div>
	);
};

export default ResearchJournalPage;
