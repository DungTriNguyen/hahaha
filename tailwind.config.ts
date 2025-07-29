import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,html}"],
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
};

export default config;
