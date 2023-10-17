import ThemeButton from './ThemeButton';
import { usePopup } from './PopupContext';
import Link from 'next/link';
import React, { useState } from 'react';
import Collapse from 'react-collapse';

const Navbar = () => {
  const { isPopupOpen, togglePopup } = usePopup();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (    
    <nav className="flex flex-row items-center mt-2 lg:mt-0  justify-between pt-2 pr-4 md:p-4 fixed left-3 right-3 md:left-6 top-0 md:right-6 z-20 overflow-hidden scrollbar-hide backdrop-blur">
      <Link href='/' style={{alignSelf:"start"}} >
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
      <div className="flex flex-col md:hidden text-[16px] ">
      <span onClick={toggleMenu} className="cursor-pointer self-end mb-4">
        {isOpen ? (
          <span className="flex items-center">
            <span className="mr-1">Close</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <g opacity="0.6">
    <rect x="17.3911" width="3.68925" height="24.595" transform="rotate(45 17.3911 0)" fill="#121212"/>
    <path d="M10.0322 7.42358H4.81484L8.47071e-05 2.60883L2.60878 0.000137626L10.0322 7.42358Z" fill="#121212"/>
    <rect x="19.9995" y="17.3912" width="3.68925" height="14.0687" transform="rotate(135 19.9995 17.3912)" fill="#121212"/>
  </g>
</svg>

          </span>
        ) : (
          'Menu'
        )}
      </span>
      <Collapse isOpened={isOpen} className="z-30 absolute right-0 top-12">
  <ul className="flex flex-col items-end justify-center">
     <li className="mb-3">
      <Link href="/knowme">Know Me!</Link>
    </li>
    <li className="mb-3">
      <button type="button" onClick={togglePopup}>Contact</button>
    </li>
    <li className="mb-3">
      <a href="https://drive.google.com/file/d/1teguoPNWgoDj3p1hDeEX_PcjqBuPF7NN/view?usp=drive_link" target="_blank">
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
