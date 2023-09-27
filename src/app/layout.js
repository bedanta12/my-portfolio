"use client"
import './globals.css'
import { ThemeProvider } from 'next-themes';
import CursorProvider from '../components/CursorProvider';
import { PopupProvider } from '@/components/PopupContext';
import localFont from "next/font/local";
const aeonik = localFont({src: "../../fonts/Aeonik-Regular.ttf"})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#FFF8F8] dark:bg-[#121212] scrollbar-hide" style={aeonik.style}>
        <ThemeProvider enableSystem={true} attribute="class">
          {/* <CursorProvider> */}
            <PopupProvider>
              {children}
            </PopupProvider>
          {/* </CursorProvider> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
