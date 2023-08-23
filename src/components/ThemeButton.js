'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeButton = () => {
  const { currentTheme, setTheme } = useTheme()

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-row bg-[#FF4900] rounded-full gap-2 p-2 font-medium">
      <div>
        밤
      </div>
      <div>
        광
      </div>
            {/* <button className='bg-[#F1EDFF] p-3 border border-[#2B0C7D] rounded-l-md'
            onClick={() => {setTheme('light');}}>
                <Image 
                src="/light-icon.svg" 
                alt='light-icon'
                width={22} 
                height={22}
                />
            </button>
            <button className='bg-[#8A68FF] p-3 border border-[#2B0C7D] border-l-0 rounded-r-md'
            onClick={() => {setTheme('dark');}}>
                <Image 
                src="/dark-icon.svg" 
                alt='dark-icon'
                width={22} 
                height={22}
                />
            </button> */}
        </div>
  )
}

export default ThemeButton