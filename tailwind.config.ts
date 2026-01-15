import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a4d2e',
          dark: '#1a4d2e',
        },
        secondary: {
          DEFAULT: '#2d5f3f',
          green: '#2d5f3f',
        },
        light: {
          green: '#3a7350',
        },
        background: '#f8f9fa',
        text: {
          primary: '#1a1a1a',
          secondary: '#ffffff',
        },
        accent: {
          pink: '#ff6b9d',
        },
        border: {
          DEFAULT: '#e5e7eb',
        },
      },
    },
  },
  plugins: [],
};

export default config;
