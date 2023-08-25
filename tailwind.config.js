/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'test' : "url('/cover.png')",
        // 'sofi_bg_dark' : "url('/sofi-bg-dark.png')",
      },
      boxShadow: {
        custom1: "0px 4px 18px 0px rgba(43, 12, 125, 0.32)",
        custom2: "0px 4px 18px 0px rgba(255, 255, 255, 0.32)"
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
