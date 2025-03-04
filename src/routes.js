// src/routes.js
import React from "react";
import {
	CourseProgram,
	Home,
	Membership,
	About,
	Contact,
	ResearchJournal,
	Careers,
	TrainingSeminar,
	Apply,
} from "./pages";

export const routes = [
	{
		label: "Home",
		path: "/",
		component: Home,
		title: "FMRIN | Home",
		description: "Welcome to FMRIN home page.",
	},
	{
		label: "Course Programme",
		path: "/course-programme",
		component: CourseProgram,
		title: "FMRIN | Course Programme",
		description:
			"Discover our comprehensive levels of courses designed to help you excel in finance and management.",
	},
	{
		label: "Membership",
		path: "/membership",
		component: Membership,
		title: "FMRIN | Membership",
		description:
			"Join our vibrant community and unlock exclusive benefits as a member of FMRIN.",
	},
	{
		// PARENT route with a subRoutes array
		label: "The Institute",
		// No direct path or component here (it's just a parent for subRoutes)
		subRoutes: [
			{
				label: "About Us",
				path: "/about",
				component: About,
				title: "FMRIN | About Us",
				description:
					"Discover who we are and how we empower finance and management professionals worldwide.",
			},
			{
				label: "Training & Seminar",
				path: "/training-seminar",
				component: TrainingSeminar,
				title: "FMRIN | Training & Seminar",
				description:
					"Enhance your skills with our specialized training programs.",
			},
			{
				label: "Careers",
				path: "/careers",
				component: Careers,
				title: "FMRIN | Careers",
				description:
					"Join our team and shape the future of finance and management.",
			},
		],
	},
	{
		label: "Research Journal",
		path: "/research-journal",
		component: ResearchJournal,
		title: "FMRIN | Research Journal",
		description: "Explore our latest finance and management research.",
	},
	{
		label: "Contact Us",
		path: "/contact",
		component: Contact,
		title: "FMRIN | Contact Us",
		description: "Get in touch with our team for inquiries and support.",
	},
	{
		label: "Application",
		path: "/apply",
		component: Apply,
		title: "FMRIN | Application",
		description: "Application Form",
	},
];
