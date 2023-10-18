import ThemeButton from './ThemeButton';
import { usePopup } from './PopupContext';
import Link from 'next/link';
import React, { useState } from 'react';
import Collapse from 'react-collapse';
import "../app/navBarButton.css";

const Navbar = () => {
  const { isPopupOpen, togglePopup } = usePopup();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (    
    <nav className="flex flex-row justify-between pt-1 pr-4 md:p-4 items-center fixed left-3 right-3 md:left-6 top-0 md:right-6 z-20 overflow-hidden scrollbar-hide backdrop-blur">
      <Link href='/'>
        <svg width="72" height="40" viewBox="0 0 72 40" className="dark:stroke-[#FFF8F8] stroke-[#121212] fill-transparent scale-[60%] md:scale-100 md:w-[72px] md:h-[40px]">
          <rect x="16" y="14" width="16" height="16" rx="8" className='dark:fill-[#FFF8F8] fill-[#121212]'/>
          <rect x="48" y="14" width="16" height="16" rx="8" className='dark:fill-[#FFF8F8] fill-[#121212]'/>
          <path d="M35 26H46"  stroke-width="2" stroke-linecap="round"/>
          <rect x="1" y="1" width="70" height="38" rx="19" stroke-width="2"/>
        </svg>
      </Link>
      <ThemeButton/>
      <div className="hidden flex-row gap-6 font-medium pr-6 md:flex">
        <button onClick={togglePopup}>
          Contact
        </button>
        <Link href='/knowme'>
          Know Me!
        </Link>
        <a href='https://drive.google.com/file/d/1teguoPNWgoDj3p1hDeEX_PcjqBuPF7NN/view?usp=drive_link' target='_blank'>
          Resume
        </a>
      </div>
      <div className='flex flex-col md:hidden text-[16px]'>
        <span onClick={toggleMenu}>Menu</span>
        <Collapse isOpened={isOpen} className="z-30 absolute right-0 top-10">
        <ul>
          <li>
          <button onClick={togglePopup}>
          Contact
        </button>
          </li>
          <li>
          <Link href='/knowme'>
          Know Me!
        </Link>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1teguoPNWgoDj3p1hDeEX_PcjqBuPF7NN/view?usp=drive_link' target='_blank'>
          Resume
        </a>
        </li>
        </ul>
        </Collapse>
      </div>
    </nav>
    
    );
};

export default Navbar;
