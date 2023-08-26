/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		container: {
			center: true,
			padding: "16px",
		},
		extend: {
			fontFamily: {
				inter: ["Inter"],
			},
			colors: {
				main: "#F4F4F4",
				"abu-genre": "#E9E9E9",
				"main-abu": "#F1F1F1",
				"main-detail-abu": "#BDBDBD",
				merah: "#8F2020",
				dasar: "#FF78C4",
				dark: "#292929",
				orange: "#FF7A00",
				"text-abu": "#535F6C",
				"red-icon": "#F96C6C",
				oren: "#F0864E",
				"detail-icon": "#636363",
			},
		},
	},
	plugins: [],
};
