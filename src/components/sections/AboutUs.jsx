import React from "react";
import { motion } from "framer-motion";

// Replace these with your actual images or imported assets
const aboutImg1 =
	"https://res.cloudinary.com/dt1vxscki/image/upload/v1741106698/advisory-board-members-meeting-b_gn4jl1.webp";
const aboutImg2 =
	"https://res.cloudinary.com/dt1vxscki/image/upload/v1741106697/business-analyst-looking-into-st_o8q0qf.webp";
const aboutImg3 =
	"https://res.cloudinary.com/dt1vxscki/image/upload/v1741106697/cheerful-business-colleagues-che_hzcy86.webp";

const AboutUs = () => {
	return (
		<section className="py-12 bg-white ">
			<div className="max-w-7xl mx-auto px-4">
				{/* Section container */}
				<div className="grid grid-cols-1 md:grid-cols-2 md:gap-0 gap-12 items-center ">
					{/* IMAGE COLLAGE - LEFT COLUMN */}
					<motion.div
						className="relative flex justify-cente "
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }} // Animation replays on re-scroll
					>
						{/* Main (largest) image */}
						<div className="w-2/3 h-auto  relative">
							<img
								src={aboutImg1}
								alt="FMRIN about 1"
								className="rounded-lg shadow-lg w-full h-auto"
							/>
						</div>

						{/* Smaller stacked images */}
						<div className="absolute -bottom-8 right-16 w-1/3">
							<img
								src={aboutImg2}
								alt="FMRIN about 2"
								className="rounded-lg shadow-md mb-4"
							/>
							<img
								src={aboutImg3}
								alt="FMRIN about 3"
								className="rounded-lg shadow-md"
							/>
						</div>
					</motion.div>

					{/* TEXT CONTENT - RIGHT COLUMN */}
					<motion.div
						className="space-y-4 md:space-y-6"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }} // Animation replays on re-scroll
					>
						{/* Main heading */}
						<h2 className="text-3xl md:text-4xl font-bold text-navyblue leading-tight">
							Learn &amp; Grow Your{" "}
							<span className="text-secondaryblue">Skills</span> From Anywhere
						</h2>

						{/* Subtitle/description */}
						<p className="text-gray-700 text-base md:text-lg">
							This institution provides specialized education in finance and
							management, emphasizing practical application. Graduate using a
							practice-oriented approach that blends theory with real-world
							insights. Take charge of your future with flexible learning and
							expert mentorship.
						</p>

						{/* Key points (Finance & Management, Flexible Learning, etc.) */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
							<div>
								<h3 className="text-secondaryblue font-semibold mb-2">
									Finance &amp; Management
								</h3>
								<p className="text-gray-600 text-sm">
									We provide practical, qualitative education and training in
									finance and management to help you excel in the business
									world.
								</p>
							</div>
							<div>
								<h3 className="text-secondaryblue font-semibold mb-2">
									Flexible Learning
								</h3>
								<p className="text-gray-600 text-sm">
									Study online or in-person, allowing you to learn at your own
									pace, wherever you are.
								</p>
							</div>
							<div>
								<h3 className="text-secondaryblue font-semibold mb-2">
									Excellent Administrators
								</h3>
								<p className="text-gray-600 text-sm">
									Our expert faculty and administrators enhance the potential of
									current and future leaders, ensuring success both locally and
									internationally.
								</p>
							</div>
							<div>
								<h3 className="text-secondaryblue font-semibold mb-2">
									Comprehensive Resources
								</h3>
								<p className="text-gray-600 text-sm">
									Access a wide array of learning materials, research journals,
									and networking events to broaden your professional horizons.
								</p>
							</div>
						</div>

						{/* Call to action button (optional) */}
						<div className="mt-6">
							<a
								href="/about"
								className="inline-block bg-accentcolor text-navyblue font-semibold py-3 px-6 rounded-md shadow hover:bg-secondaryblue hover:text-white transition-colors"
							>
								Learn More
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
