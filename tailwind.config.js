/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit", // Ensure JIT mode is enabled
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				jost: ["Jost", "sans-serif"],
				inter: ["Inter", "sans-serif"],
			},
			colors: {
				navyblue: "#003366",
				secondaryblue: "#0055A5",
				accentcolor: "#FFCC00",
			},
		},
	},
	plugins: [],
};

