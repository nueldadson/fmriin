import React from "react";
import { motion } from "framer-motion";
// Example icons from react-icons (install with `npm i react-icons`)
import {
	FaBook,
	FaLayerGroup,
	FaChartLine,
	FaChalkboardTeacher,
	FaAward,
} from "react-icons/fa";

const courses = [
	{
		title: "Basic Professional Certificate (BPC)",
		description:
			"This level is a preparatory stage in order to gain entry to the professional level.",
		icon: <FaBook />,
		link: "/course-programme",
	},
	{
		title: "Finance and Management Professional (FMP) 1",
		description:
			"This level is the foundation stage for entry into the professional level.",
		icon: <FaLayerGroup />,
		link: "/course-programme",
	},
	{
		title: "Finance and Management Professional (FMP) 2",
		description: "This level is the second part, divided into two modules.",
		icon: <FaChartLine />,
		link: "/course-programme",
	},
	{
		title: "Finance and Management Professional (FMP) 3",
		description: "This level is the last part, also in two modules.",
		icon: <FaChalkboardTeacher />,
		link: "/course-programme",
	},
	{
		title: "Fellow Finance and Management Professional (FFMP)",
		description:
			"This level is the final stage, for highly elevated professionals.",
		icon: <FaAward />,
		link: "/course-programme",
	},
];

const Program = () => {
	return (
		<section className="py-12 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4">
				{/* Heading and subheading */}
				<motion.div
					className="text-center mb-10"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					viewport={{ once: true }} // replays animation on re-scroll
				>
					<h2 className="text-3xl md:text-4xl font-bold text-navyblue mb-4">
						Course Programme
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						There are five levels of courses. Students can take them as
						individual courses or as groups, with a successful level of
						completion.
					</p>
				</motion.div>

				{/* Course cards grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{courses.map((course, index) => (
						<motion.div
							key={index}
							className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow flex flex-col"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
							viewport={{ once: true }} // replays animation on re-scroll
						>
							<div className="text-accentcolor text-4xl mb-4">
								{course.icon}
							</div>
							<h3 className="text-navyblue text-xl font-semibold mb-2">
								{course.title}
							</h3>
							<p className="text-gray-700 mb-4 flex-grow">
								{course.description}
							</p>
							<a
								href={course.link}
								className="inline-block bg-secondaryblue text-white font-semibold py-2 px-4 rounded-md hover:bg-navyblue transition-colors self-start"
							>
								Learn More
							</a>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Program;
