module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#433738",
				secondary: "#c49b63",
				cream: "#dfcda9",
				white: "#f8f7f7",
				black: "#000000",
				teal: "#3d8d7a",
				accent: "#ff6600",
				green: "#3D8D7A",
			},
			fontFamily: {
				roboto: ["Roboto", "sans-serif"],
				"big-shoulders": ['"Big Shoulders"', "sans-serif"],
			},
			borderRadius: {
				DEFAULT: "0.5rem",
			},
		},
	},
	plugins: [],
};
