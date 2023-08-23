import Link from 'next/link';
import React from 'react';
import ThemeButton from './ThemeButton';


const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between p-4 items-center">
      <svg width="72" height="40" viewBox="0 0 72 40" className="dark:stroke-[#FFF8F8] stroke-[#121212] fill-transparent">
        <rect x="16" y="14" width="16" height="16" rx="8" className='dark:fill-[#FFF8F8] fill-[#121212]'/>
        <rect x="48" y="14" width="16" height="16" rx="8" className='dark:fill-[#FFF8F8] fill-[#121212]'/>
        <path d="M35 26H46"  stroke-width="2" stroke-linecap="round"/>
        <rect x="1" y="1" width="70" height="38" rx="19" stroke-width="2"/>
      </svg>
      <ThemeButton />
      <div className="flex flex-row mr-12 gap-6 font-medium">
        <div>
          Contact
        </div>
        <div>
          Know Me!
        </div>
        <div>
          Resume
        </div>
      </div>
        
      </nav>
    );
};

export default Navbar;
