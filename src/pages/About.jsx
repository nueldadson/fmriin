import React from "react";
import { motion } from "framer-motion";
import {
	FaSearch,
	FaCertificate,
	FaUserTie,
	FaGraduationCap,
	FaBookOpen,
} from "react-icons/fa";

// Replace with your own hero background image
const heroBg =
	"https://res.cloudinary.com/dt1vxscki/image/upload/v1741106081/wmremove-transformed_ojlvv2.webp";

const About = () => {
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
						About Us
					</h1>
					<p className="text-white max-w-xl mx-auto">
						Discover who we are and how we empower finance and management
						professionals worldwide.
					</p>
				</motion.div>
			</section>

			{/* ABOUT FMRIN SECTION */}
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
							Finance and Management Research Institute Ltd/Gte (FMRIN)
						</h2>
						<p className="text-gray-700 max-w-6xl mx-auto leading-relaxed">
							We are professional educators of dual distinction. Our members and
							students are groomed in two major courses of finance and
							management that season in research. This earns them a dual
							qualification as finance and management professional
							administrators. Students have a great advantage in achieving
							career development as professionals in two major courses: finance
							and management. With well-equipped knowledge in finance and
							management and in-depth knowledge in research for greater
							improvement and efficiency that bring in more effectiveness and
							profitability. We enhance the potential of the present and future
							leaders in both the private and public sectors, allowing them to
							perform optimally, excel, and compete favorably both locally and
							internationally in their life endeavors. This is achieved through
							the provision of practical, qualitative education and training we
							give to our students and members. We are also set up to bring to
							light the most up-to-date developments in finance and management.
							Business dealings and engagement are in dire need of finance and
							management in order to grow very well, and for this reason,
							adequate and effective research will bring this out for better
							performance and achievement.
						</p>
					</motion.div>
				</div>
			</section>

			{/* OUR VISION SECTION */}
			<section className="py-12 bg-gray-50">
				<div className="max-w-6xl mx-auto px-4">
					<motion.div
						className="text-center"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						<h2 className="text-2xl md:text-3xl font-bold text-navyblue mb-4">
							Our Vision
						</h2>
						<p className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
							We bring to light the most up-to-date developments in finance and
							management. We enhance the potential of the present and future
							leaders in both the private and public sectors, allowing them to
							perform optimally, excel, and compete favourably both locally and
							internationally in their life endeavours. We bring the right
							people together to challenge established thinking and drive
							transformation.
						</p>
					</motion.div>
				</div>
			</section>

			{/* FOCUS AREAS SECTION */}
			<section className="py-12 bg-white">
				<div className="max-w-7xl mx-auto px-4">
					<motion.div
						className="text-center mb-10"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						<h2 className="text-2xl md:text-3xl font-bold text-navyblue mb-4">
							We bring the right people together to challenge established
							thinking and drive transformation
						</h2>
						<p className="text-gray-700 max-w-3xl mx-auto">
							Our core pillars of success include research, certification,
							professional development, and more.
						</p>
					</motion.div>

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
								Conducting in-depth research to keep finance and management
								professionals ahead of the curve.
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
								Providing recognized qualifications that validate expertise and
								boost career prospects.
							</p>
						</div>

						{/* Professional */}
						<div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center">
							<div className="text-accentcolor text-4xl mb-4">
								<FaUserTie />
							</div>
							<h3 className="text-navyblue text-lg font-semibold mb-2">
								Professional
							</h3>
							<p className="text-gray-700 text-sm">
								Supporting professionals at every stage of their career, from
								foundational training to executive leadership.
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
								Delivering high-quality programs that blend theory with
								practical application in finance and management.
							</p>
						</div>

						{/* Information */}
						<div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center">
							<div className="text-accentcolor text-4xl mb-4">
								<FaBookOpen />
							</div>
							<h3 className="text-navyblue text-lg font-semibold mb-2">
								Information
							</h3>
							<p className="text-gray-700 text-sm">
								Sharing insights, research findings, and best practices to keep
								you informed of industry trends.
							</p>
						</div>

						{/* (Optional) Another pillar or placeholder */}
						<div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center text-center">
							<div className="text-accentcolor text-4xl mb-4">
								<FaSearch />
							</div>
							<h3 className="text-navyblue text-lg font-semibold mb-2">
								Collaboration
							</h3>
							<p className="text-gray-700 text-sm">
								Working closely with global partners to enhance the learning
								experience and broaden our reach.
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/*
        If you want to include the "Our Location / Drop a Line / Application" 
        pre-footer from previous designs, you can import and place it here. 
        Or simply rely on your global footer.
      */}

			{/* OPTIONAL CTA SECTION */}

			<section className="py-12 bg-gradient-to-r from-navyblue to-secondaryblue text-white text-center">
				<div className="max-w-5xl mx-auto px-4">
					<motion.h2
						className="text-2xl md:text-3xl font-bold mb-4"
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						Ready to Learn More?
					</motion.h2>
					<motion.p
						className="max-w-2xl mx-auto mb-6"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						viewport={{ once: true }}
					>
						Discover our range of programs, membership benefits, and research
						initiatives that shape the future of finance and management.
					</motion.p>
					<motion.a
						href="/course-programme"
						className="inline-block bg-accentcolor text-navyblue font-semibold py-3 px-6 rounded-md hover:bg-white transition-colors"
						initial={{ scale: 0.9 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						View Programs
					</motion.a>
				</div>
			</section>
		</div>
	);
};

export default About;
