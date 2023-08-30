'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeButton = () => {
  const { theme, setTheme } = useTheme()
  const toggle = () =>{    
    if (theme==='light') setTheme('dark');
    else setTheme('light');
  }
  
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    console.log(theme);
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
        <div className="flex items-center">
            <input
              type="checkbox"
              id="darkModeToggle"
              className="hidden"
              checked={theme==='dark'}
              onChange={toggle}
              onClick={toggle}
            />
            <label
              htmlFor="darkModeToggle"
              className={`flex items-center bg-[#FF4900] rounded-full gap-2 p-2 font-medium flex-row relative`}
            >
              <div
                className={`fixed w-3.5 h-3.5 rounded-full transition-transform duration-300 transform ${
                  theme==='dark' ? 'bg-[#121212] translate-x-6' : 'translate-x-0 bg-[#FFF8F8]'
                }`}
              />
              <span className={`text-[#FFF8F8] ${theme==='dark' ? 'transition-opacity ease-in duration-280 opacity-100' : 'transition-opacity ease-out duration-280 opacity-0'}`}>
              밤
              </span>
              <span className={`text-[#121212] ${theme==='dark' ? 'transition-opacity ease-out duration-280 opacity-0' : 'transition-opacity ease-in duration-280 opacity-100'}`}>
              광
              </span>
            </label>
    </div>
  )
}

export default ThemeButton

{/* <div className="relative w-48 h-24 cursor-pointer" onClick={toggleDarkMode}>
      <div
        className={`absolute w-24 h-24 flex items-center justify-center rounded-full font-bold text-sm transition-all duration-500 ${
          isDarkMode ? 'bg-black text-white left-0' : 'bg-white text-black right-0'
        }`}
      >
        {isDarkMode ? 'Dark' : 'Light'}
      </div>
    </div> */}