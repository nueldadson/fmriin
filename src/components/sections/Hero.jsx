import React, { useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import './hero.css';
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
const HeroImg1 =
	"https://res.cloudinary.com/dt1vxscki/image/upload/v1741106081/person-office-analyzing-checking_yc9lgr.webp";
const HeroImg2 =
	"https://res.cloudinary.com/dt1vxscki/image/upload/v1741106081/two-handsome-successful-african-_deycfx.webp";
const HeroImg3 =
	"https://res.cloudinary.com/dt1vxscki/image/upload/v1741106081/wmremove-transformed_ojlvv2.webp";

const Hero = () => {
	// Track the current slide
	const [currentIndex, setCurrentIndex] = useState(0);

	// Define your slides
	const sliderContent = [
		{
			image: HeroImg1,
			heading: "Excellent Administrators",
			subheading: "Empower Your Future",
			text: "We enhance the potential of the present and future leaders in both the private and public sectors, allowing them to perform optimally, excel, and compete favorably both locally and internationally in their life endeavors.",
			cta: "Explore Programs",
			ctaLink: "/course-programme",
		},
		{
			image: HeroImg2,
			heading: "Flexible Learning",
			subheading: "Study On Your Terms",
			text: "We are doing both online and in-person class lectures, which makes learning at your leisure and convenience. Online learning allows you to study at your leisure and in the convenience of your own home.",
			cta: "View Courses",
			ctaLink: "/course-programme",
		},
		{
			image: HeroImg3,
			heading: "Finance & Management",
			subheading: "Excellence in Finance & Management",
			text: "We provide practical, qualitative education and training to our students and members. For them to perform optimally, excel, and compete favourably in their business and labour markets.",
			cta: "Apply Now",
			ctaLink: "/apply",
		},
	];

	// Auto-play logic
	useEffect(() => {
		// Small delay before starting the rotation
		const initialTransition = setTimeout(() => {
			setCurrentIndex(1);
		}, 50);

		// Rotate slides every 5 seconds
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderContent.length);
		}, 5000);

		return () => {
			clearInterval(interval);
			clearTimeout(initialTransition);
		};
	}, [sliderContent.length]);

	return (
		<div className="flex min-h-[430px]" style={{ height: "100vh" }}>
			<AwesomeSlider
				animation="cubeAnimation"
				selected={currentIndex}
				buttons={false} // Hide built-in slider arrows
				mobileTouch={false} // Disable swipe on mobile if desired
				className="w-full overflow-hidden bg-transparent min-h-[430px]"
				style={{ height: "100vh" }}
				infinite
			>
				{sliderContent.map((slide, index) => (
					<div
						key={index}
						className="w-full h-full relative"
						style={{
							minHeight: "430px",
							height: "100vh",
							backgroundImage: `url(${slide.image})`,
							backgroundPosition: "center",
							backgroundSize: "cover",
							backgroundRepeat: "no-repeat",
						}}
					>
						{/* Navy-to-transparent gradient overlay */}
						<div className="absolute inset-0 bg-gradient-to-r from-navyblue/90 to-transparent"></div>

						{/* Text content container (left-aligned) */}
						<div className="relative z-10 flex items-center h-full px-6 md:px-12">
							<div className="max-w-xl">
								{/* Subheading in accent color */}
								<h2 className="text-accentcolor text-lg md:text-xl font-semibold tracking-wide mb-2">
									{slide.subheading}
								</h2>

								{/* Main heading in white */}
								<h1 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight">
									{slide.heading}
								</h1>

								{/* Paragraph text in white */}
								<p className="text-white mb-6 md:mb-8">{slide.text}</p>

								{/* CTA Button in accent color */}
								<a
									href={slide.ctaLink}
									className="inline-block bg-accentcolor text-navyblue font-semibold py-3 px-6 rounded-md shadow hover:bg-secondaryblue hover:text-white transition-colors"
								>
									{slide.cta}
								</a>
							</div>
						</div>
					</div>
				))}
			</AwesomeSlider>
		</div>
	);
};

export default Hero;
