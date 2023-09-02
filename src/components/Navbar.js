import React from 'react';
import ThemeButton from './ThemeButton';


const Navbar = () => {
  
  return (    
    <nav className="flex flex-row justify-between p-4 items-center fixed left-6 top-0 right-6 z-20 overflow-hidden scrollbar-hide bg-[#DED5D4] dark:bg-[#303030]">
      <svg width="72" height="40" viewBox="0 0 72 40" className="dark:stroke-[#FFF8F8] stroke-[#121212] fill-transparent">
        <rect x="16" y="14" width="16" height="16" rx="8" className='dark:fill-[#FFF8F8] fill-[#121212]'/>
        <rect x="48" y="14" width="16" height="16" rx="8" className='dark:fill-[#FFF8F8] fill-[#121212]'/>
        <path d="M35 26H46"  stroke-width="2" stroke-linecap="round"/>
        <rect x="1" y="1" width="70" height="38" rx="19" stroke-width="2"/>
      </svg>
      <ThemeButton/>
      <div className="flex flex-row gap-6 font-medium pr-6">
        <a>
          Contact
        </a>
        <a>
          Know Me!
        </a>
        <a href='https://drive.google.com/file/d/1teguoPNWgoDj3p1hDeEX_PcjqBuPF7NN/view?usp=drive_link' target='_blank'>
          Resume
        </a>
      </div>
    </nav>
    
    );
};

export default Navbar;
