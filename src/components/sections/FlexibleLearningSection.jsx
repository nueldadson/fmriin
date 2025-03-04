import React from "react";
import { motion } from "framer-motion";

// Replace these placeholders with your actual image URLs or imports
const learningImg1 =
	"https://res.cloudinary.com/dt1vxscki/image/upload/v1741109710/study-group-african-people_1_ivoupm.webp";
const learningImg2 =
	"https://res.cloudinary.com/dt1vxscki/image/upload/v1741109710/front-view-man-making-plans-rede_vce16l.webp";

const FlexibleLearningSection = () => {
	return (
		<section className="py-12 bg-white">
			<div className="max-w-7xl mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					{/* Text Column */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }} // replay animation on re-scroll
					>
						<h2 className="text-3xl md:text-4xl font-bold text-navyblue mb-4">
							Flexible Learning
						</h2>
						<p className="text-gray-700 mb-6 text-base md:text-lg leading-relaxed">
							Online learning allows you to study at your leisure and in the
							convenience of your own home. There are also lectures in the
							classroom.
						</p>
						<a
							href="/apply"
							className="inline-block bg-accentcolor text-navyblue font-semibold py-2 px-6 rounded-md hover:bg-secondaryblue hover:text-white transition-colors"
						>
							Apply
						</a>
					</motion.div>

					{/* Image Column */}
					<motion.div
						className="relative overflow-hidden"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }} // replay animation on re-scroll
					>
						{/* Main image */}
						<img
							src={learningImg1}
							alt="Online learning at home"
							className="w-full h-auto rounded-lg shadow-md"
						/>
						{/* Overlapping secondary image */}
						<img
							src={learningImg2}
							alt="Classroom lecture"
							className="w-1/2 h-auto rounded-lg shadow-md absolute bottom-0 right-0 translate-x-[10%] translate-y-[10%] border-4 border-white"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default FlexibleLearningSection;
