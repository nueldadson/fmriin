import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
	return (
		<div className="w-full bg-[#eab308] text-white flex flex-row justify-between max-[650px]:justify-center items-center h-[42px] fixed top-0 z-40 text-sm px-44 max-[1150px]:px-24 max-[940px]:px-14 max-[450px]:px-4 max-[360px]:px-2">
			{/* Left Section */}
			<div className="flex items-center gap-4 max-[650px]:w-full max-[650px]:justify-between max-[360px]:gap-0 ">
				<div className="flex items-center gap-1 ">
					<FiPhone className="text-xs" />
					<a href="tel:+2348094029139">(234) 809 402 9139</a>
				</div>
				<div className="flex items-center gap-1">
					<MdEmail className="text-xs" />
					<a href="infofmrin@gmail.com">infofmrin@gmail.com</a>
				</div>
			</div>

			{/* Center Section */}
			<div className="text-xs font-bold max-[870px]:hidden">
				Finance & Management Research Institute Ltd/Gte
			</div>

			{/* Right Section */}
			<div className="flex items-center gap-4 max-[650px]:hidden">
				<span className="text-xs">Follow Us:</span>
				<a
					href="https://linkedin.com"
					title="LinkedIn"
					aria-label="LinkedIn"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin />
				</a>
				<a
					href="https://www.instagram.com/"
					title="Instagram"
					aria-label="Instagram"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaInstagram />
				</a>
				<a
					href="https://www.facebook.com/"
					title="Facebook"
					aria-label="Facebook"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaFacebook />
				</a>
				<a
					href="https://x.com/"
					title="Twitter"
					aria-label="Twitter"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaTwitter />
				</a>
			</div>
		</div>
	);
};

export default TopNav;
