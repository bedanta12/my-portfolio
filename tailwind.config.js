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
        'cover1': "url('/cover1.png')",
        'cover2': "url('/cover2.png')",
        'cover3': "url('/cover3.png')",
        'cover4': "url('/cover4.png')",
        'image1': "url('/bedanta1.png')"
      },
      boxShadow: {
        custom1: "0px 4px 18px 0px rgba(43, 12, 125, 0.32)",
        custom2: "0px 4px 18px 0px rgba(255, 255, 255, 0.32)"
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        marquee2: 'marquee2 15s linear infinite',
        fadein: 'fadein',
        fadeout: 'fadeout'
      },
      keyframes: {
        fadein: {
          '0%': { transform: 'opacity(0.0)' },
          '50%': { transform: 'opacity(0.0)' },
          '100%': { transform: 'opacity(1.0)' },
        },
        fadeout: {
          '0%': { transform: 'opacity(1.0)' },
          '50%': { transform: 'opacity(1.0)' },
          '100%': { transform: 'opacity(0.0)' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
