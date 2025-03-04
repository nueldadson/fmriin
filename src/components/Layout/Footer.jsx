import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes.js";

// React Icons (FontAwesome)
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	// faMapMarkerAlt,
	// faEnvelopeOpenText,
	// faClipboardCheck,
	faFacebookF,
	faTwitter,
	faLinkedinIn,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Logo } from "../../assets/images/index.js";

// Replace this with your actual logo
const footerLogo = "https://via.placeholder.com/180x60?text=FMRIN+Logo+Here";

const PreFooterAndFooter = () => {
	return (
		<>
			{/* ========== PRE-FOOTER SECTION ========== */}
			<section className="relative bg-gradient-to-r from-navyblue to-secondaryblue text-white py-12 overflow-hidden">
				{/* Decorative wave at the bottom */}
				<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
					<svg
						className="relative block w-[calc(100%+1.3px)] h-[60px]"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none"
					>
						<path
							d="M985.66,27.39c-80.77,22.08-158.81,57.75-239.58,79.53-82.7,22.42-168.41,30.71-253.73,23.49-86.89-7.4-172.49-33.82-258.23-47.19C165,72.4,83.55,69.42,0,78.74V120h1200V0C1121.1,3.44,1055.77,6.43,985.66,27.39Z"
							fill="#ffffff"
						/>
					</svg>
				</div>

				<div className="max-w-7xl mx-auto px-4 relative">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
						{/* Our Location */}
						<div className="bg-white bg-opacity-10 p-6 rounded-lg flex flex-col items-center hover:bg-opacity-20 transition transform hover:scale-[1.02]">
							<div className="text-4xl mb-4">
								{/* <FontAwesomeIcon icon={faMapMarkerAlt} /> */}
							</div>
							<h3 className="text-xl font-semibold mb-2">Our Location</h3>
							<p className="text-sm mb-4 max-w-xs">
								View our location and find our contact details for visits and
								more inquiries about our services.
							</p>
							<Link
								to="/contact"
								className="inline-flex items-center gap-2 bg-accentcolor text-navyblue font-semibold px-4 py-2 rounded-md hover:bg-white transition-colors"
							>
								Locate our office
								<FontAwesomeIcon icon={faArrowRight} />
							</Link>
						</div>

						{/* Drop a Line */}
						<div className="bg-white bg-opacity-10 p-6 rounded-lg flex flex-col items-center hover:bg-opacity-20 transition transform hover:scale-[1.02]">
							<div className="text-4xl mb-4">
								{/* <FontAwesomeIcon icon={faEnvelopeOpenText} /> */}
							</div>
							<h3 className="text-xl font-semibold mb-2">Drop a Line</h3>
							<p className="text-sm mb-4 max-w-xs">
								You may contact us by filling out this form anytime you need
								professional support.
							</p>
							<Link
								to="/contact"
								className="inline-flex items-center gap-2 bg-accentcolor text-navyblue font-semibold px-4 py-2 rounded-md hover:bg-white transition-colors"
							>
								Fill the form
								<FontAwesomeIcon icon={faArrowRight} />
							</Link>
						</div>

						{/* Application */}
						<div className="bg-white bg-opacity-10 p-6 rounded-lg flex flex-col items-center hover:bg-opacity-20 transition transform hover:scale-[1.02]">
							<div className="text-4xl mb-4">
								{/* <FontAwesomeIcon icon={faClipboardCheck} /> */}
							</div>
							<h3 className="text-xl font-semibold mb-2">Application</h3>
							<p className="text-sm mb-4 max-w-xs">
								Potential members and learners are welcome to apply with us and
								begin their education right away!
							</p>
							<Link
								to="/apply"
								className="inline-flex items-center gap-2 bg-accentcolor text-navyblue font-semibold px-4 py-2 rounded-md hover:bg-white transition-colors"
							>
								Apply Now
								<FontAwesomeIcon icon={faArrowRight} />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* ========== FOOTER SECTION ========== */}
			<footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
				<div className="max-w-7xl mx-auto px-4">
					{/* Top row: Logo & Nav Links */}
					<div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
						{/* Footer Logo */}
						<Link to="/" className="mb-6 md:mb-0 flex-shrink-0">
							<img
								src={Logo}
								alt="FMRIN Logo"
								className="h-16 w-auto object-contain"
							/>
						</Link>

						{/* Navigation Links (mapping routes) */}
						<ul className="flex flex-wrap gap-6 text-sm">
							{routes.map(({ label, path }) => (
								<li key={path}>
									<Link
										to={path}
										className="hover:text-accentcolor transition-colors"
									>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Middle row: Social Icons */}
					<div className="flex items-center justify-start md:justify-end gap-6 mb-6">
						<a
							href="https://www.facebook.com/"
							title="Facebook"
							aria-label="Facebook"
							target="_blank"
							rel="noopener noreferrer"
							className="text-xl hover:text-accentcolor transition-colors"
						>
							<FontAwesomeIcon icon={faFacebookF} />
						</a>
						<a
							href="https://x.com/"
							title="Twitter"
							aria-label="Twitter"
							target="_blank"
							rel="noopener noreferrer"
							className="text-xl hover:text-accentcolor transition-colors"
						>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a
							href="https://linkedin.com/"
							title="LinkedIn"
							aria-label="LinkedIn"
							target="_blank"
							rel="noopener noreferrer"
							className="text-xl hover:text-accentcolor transition-colors"
						>
							<FontAwesomeIcon icon={faLinkedinIn} />
						</a>
						<a
							href="https://www.instagram.com/"
							title="Instagram"
							aria-label="Instagram"
							target="_blank"
							rel="noopener noreferrer"
							className="text-xl hover:text-accentcolor transition-colors"
						>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</div>

					{/* Bottom row: Copyright */}
					<div className="text-center md:text-right text-sm text-gray-500">
						&copy; {new Date().getFullYear()} Finance &amp; Management Research
						Institute Ltd/Gte (FMRIN). All rights reserved.
					</div>
				</div>
			</footer>
		</>
	);
};

export default PreFooterAndFooter;
