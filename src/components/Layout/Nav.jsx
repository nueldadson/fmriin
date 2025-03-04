import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Logowhite, Logo } from "../../assets/images";
import { routes } from "../../routes.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
	faLinkedin,
	faInstagram,
	faFacebook,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FaSearch, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";

const Nav = () => {
	const navigate = useNavigate();
	const [isScrolled, setIsScrolled] = useState(false);
	// We'll use dropdownOpen for desktop and mobileMenuOpen for sidebar state.
	const [dropdownOpen, setDropdownOpen] = useState(null);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () =>
			setIsScrolled(window.scrollY > window.innerHeight);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleSidebar = () => setIsOpen(!isOpen);

	const navToAccount = () => {
		navigate("/account");
	};

	return (
		<>
			{/* Navigation Bar */}
			<header
				className="bg-gradient-to-r from-navyblue to-secondaryblue
 w-full h-[75px] rounded-[100px] flex items-center justify-between z-40 px-20 transition-all duration-300 max-sm:justify-between max-sm:px-5 max-sm:rounded-none"
			>
				{/* Logo */}
				<Link to="/" className="flex items-center w-12">
					<img
						src={isScrolled ? Logo : Logowhite}
						alt="Company Logo"
						className="h-full"
					/>
				</Link>

				{/* Desktop Navigation */}
				<nav className="flex h-full items-center">
					<ul className="flex space-x-6 justify-end mr-5 items-center text-md max-[1200px]:hidden">
						{routes.map((route) => {
							if (route.subRoutes) {
								return (
									<li
										key={route.label}
										className="relative"
										onMouseEnter={() => setDropdownOpen(route.label)}
										onMouseLeave={() => setDropdownOpen(null)}
									>
										<button
											type="button"
											className="cursor-pointer font-semibold text-white hover:text-brightbrown focus:outline-none"
											onClick={() =>
												setDropdownOpen((prev) =>
													prev === route.label ? null : route.label,
												)
											}
										>
											{route.label}
										</button>
										{/* Dropdown Menu */}
										<ul
											className={`absolute left-0  bg-white text-black min-w-[150px] rounded-md shadow-md transition-all transform duration-150 ease-in-out z-50 ${
												dropdownOpen === route.label
													? "opacity-100 translate-y-0 pointer-events-auto"
													: "opacity-0 translate-y-1 pointer-events-none"
											}`}
										>
											{route.subRoutes.map((sub) => (
												<li key={sub.path}>
													<Link
														to={sub.path}
														className="block px-4 py-2 hover:bg-gray-200"
													>
														{sub.label}
													</Link>
												</li>
											))}
										</ul>
									</li>
								);
							} else {
								return (
									<li key={route.path}>
										<Link
											to={route.path}
											className="font-semibold text-white hover:text-brightbrown"
										>
											{route.label}
										</Link>
									</li>
								);
							}
						})}
					</ul>
				</nav>

				{/* Mobile Menu Button */}
				<button
					onClick={toggleSidebar}
					className="flex justify-end hidden max-[1200px]:block"
					aria-label="Toggle Navigation"
				>
					<FontAwesomeIcon
						icon={isOpen ? faTimes : faBars}
						className={`text-[24px] ${isOpen ? "text-black" : "text-white"}`}
					/>
				</button>
			</header>

			{/* Sidebar (Mobile Menu) */}
			<aside
				className={`py-8 px-12 z-50 overflow-y-auto fixed top-0 right-0 h-full w-full bg-white text-black transition-transform duration-300 transform ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				{/* Close Button */}
				<button
					onClick={toggleSidebar}
					className="absolute right-14 top-6 text-black text-4xl cursor-pointer"
					aria-label="Close Navigation"
				>
					<FontAwesomeIcon icon={faTimes} />
				</button>

				{/* Mobile Navigation Links */}
				<ul>
					{routes.map((route) => {
						if (route.subRoutes) {
							return (
								<li
									key={route.label}
									className="py-6 border-b border-b-slate-400"
								>
									<button
										type="button"
										className="w-full text-left font-semibold text-xl flex justify-between items-center"
										onClick={() =>
											setDropdownOpen((prev) =>
												prev === route.label ? null : route.label,
											)
										}
									>
										<span>{route.label}</span>
										<svg
											className={`w-5 h-5 transform transition-transform ${
												dropdownOpen === route.label ? "rotate-180" : ""
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
									</button>
									{dropdownOpen === route.label && (
										<ul className="mt-2 ml-4 space-y-2">
											{route.subRoutes.map((sub) => (
												<li key={sub.path}>
													<Link
														to={sub.path}
														className="block text-xl font-medium hover:text-brightbrown"
														onClick={() => {
															setIsOpen(false);
															window.scrollTo(0, 0);
														}}
													>
														{sub.label}
													</Link>
												</li>
											))}
										</ul>
									)}
								</li>
							);
						} else {
							return (
								<li
									key={route.path}
									className="py-6 border-b border-b-slate-400 hover:text-brightbrown"
								>
									<Link
										to={route.path}
										onClick={() => {
											setIsOpen(false);
											window.scrollTo(0, 0);
										}}
										className="text-xl font-semibold block"
									>
										{route.label}
									</Link>
								</li>
							);
						}
					})}
				</ul>

				{/* Social Media Links */}
				<div className="flex justify-center mt-4 space-x-6 text-4xl text-brown mb-10">
					<a
						href="https://linkedin.com"
						title="LinkedIn"
						aria-label="LinkedIn"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a
						href="https://www.instagram.com/crochetelo_/"
						title="Instagram"
						aria-label="Instagram"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a
						href="https://www.facebook.com/crochetelo"
						title="Facebook"
						aria-label="Facebook"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faFacebook} />
					</a>
					<a
						href="https://x.com/Crochetelo_"
						title="Twitter"
						aria-label="Twitter"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FontAwesomeIcon icon={faTwitter} />
					</a>
				</div>
			</aside>
		</>
	);
};

export default Nav;
