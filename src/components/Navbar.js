import Link from 'next/link';
import React from 'react';
import ThemeButton from './ThemeButton';


const Navbar = () => {
  return (
    <section>
    {/* <div className="h-6 w-full z-10 bg-[#FFF8F8] dark:bg-[#121212] fixed top-0 left-0 right-0"></div> */}
    <nav className="flex flex-row justify-between px-4 pb-4 mt-10 items-center fixed left-6 top-0 right-6 z-20 rounded-2xl overflow-hidden">
      <svg width="72" height="40" viewBox="0 0 72 40" className="dark:stroke-[#FFF8F8] stroke-[#121212] fill-transparent">
        <rect x="16" y="14" width="16" height="16" rx="8" className='dark:fill-[#FFF8F8] fill-[#121212]'/>
        <rect x="48" y="14" width="16" height="16" rx="8" className='dark:fill-[#FFF8F8] fill-[#121212]'/>
        <path d="M35 26H46"  stroke-width="2" stroke-linecap="round"/>
        <rect x="1" y="1" width="70" height="38" rx="19" stroke-width="2"/>
      </svg>
      <ThemeButton/>
      <div className="flex flex-row gap-6 font-medium pr-6">
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
    </section>
    );
};

export default Navbar;
