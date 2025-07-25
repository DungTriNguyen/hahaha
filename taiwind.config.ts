import typography from "@tailwindcss/typography";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/js/in-view-animation.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [typography],
};
