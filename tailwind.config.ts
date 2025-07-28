import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        title: "var(--title-color)",
        card: "var(--card-color)",
        numberCard: "var(--number-card)",
        numberCardHover: "var(--number-card-hover)",
        descriptionCard: "var(--description-card)",
        button: "var(--button-color)",
        buttonIcon: "var(--button-icon)",
        dateCard: "var(--date-card)",
      },
    },
  },
  content: ["./src/**/*.{ts,tsx,js,jsx,html}"], // chỉnh đường dẫn đúng dự án
};

export default config;
