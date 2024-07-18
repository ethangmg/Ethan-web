import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",          
        "gradient-blackCherry":'linear-gradient(43deg, #110409 0%, #4c0011 45%, #e10058 100%)',
        "gradient-second":'linear-gradient(43deg, #blue 0%, #4c0011 45%, #e10058 100%)',
        "gradient-reverse-blackCherry":'linear-gradient(43deg, #e10058 0%, #4c0011 45%, #110409 100%)',
        "gradient-teal":'linear-gradient(43deg, #065f46 0%, #1f2937 45%, #030712 100%)',
      },
      colors:{
        blackCherry:'#110409'
      },
      boxShadow: {
        '3xl':"-1px -1px 37px 11px rgba(190,18,60,0.75);"
      }
    },
  },
  plugins: [],
};
export default config;
