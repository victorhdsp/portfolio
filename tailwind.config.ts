import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./node_modules/@nextui-org/**/*.{js,ts,jsx,tsx}"
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          'DEFAULT': 'var(--color-purple)',
          'light': 'var(--color-purple-light)',
          'dark': 'var(--color-purple-dark)',
        },
        yellow: {
          'DEFAULT': 'var(--color-yellow)',
        },
        orange: {
          'DEFAULT': 'var(--color-orange)',
        },
      },
      spacing: {
        section: 'var(--spacing-section)',
      },
      gap: {
        sm: 'var(--gap-sm)',
        md: 'var(--gap-md)',
        lg: 'var(--gap-lg)',
      }
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
