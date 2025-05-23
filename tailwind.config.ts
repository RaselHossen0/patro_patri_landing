import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors from PatroPatri logo
        burgundy: {
          DEFAULT: '#8B2332',
          light: '#A54A57',
          dark: '#6A1A26',
        },
        gold: {
          DEFAULT: '#CEA55D',
          light: '#DEBF85',
          dark: '#B38D45',
        },
        teal: {
          DEFAULT: '#1D7A74',
          light: '#3A9E97',
          dark: '#155953',
        },
        darkSlate: '#2D3E4F',
        green: '#2A7D4F',
        
        // UI Colors
        appBackground: '#FDF6E3',
        backgroundDark: '#ECE6D5',
        surface: '#FFFFFF',
        surfaceAccent: '#F9F5ED',
        error: '#B00020',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-pattern.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
