'use client';
import React, { useLayoutEffect } from 'react';
import Footer from '@/components/Footer';
import LandingPage from '@/components/LandingPage';
import Navbar from '@/components/Navbar';
import ProjectsPage from '@/components/ProjectsPage';
import ContactPage from '@/components/ContactPage';
import SlidingBar from '@/components/SlidingBar';
import Slide from '@mui/material/Slide';
import { usePopup } from '@/components/PopupContext';
import ContactPageSmall from '@/components/ContactPageSmall';
import { useState } from 'react';

export default function Home() {
  const { isPopupOpen, togglePopup } = usePopup();

    const [isSmallScreen, setIsSmallScreen] = useState(false);
  
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1200); // Define your desired breakpoint here
    };
  
   
    // Then con

  useLayoutEffect(() => {

    //contactPageHandling
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleOutsideClick = (e) => {
      if (isPopupOpen && !document.getElementById('contact-fancy-text').contains(e.target)) {
        togglePopup();
        document.querySelector("body").style.overflow = "auto";
      }
    };

    if (isPopupOpen) {
      document.querySelector("body").style.overflow = "hidden";
      document.addEventListener('click', handleOutsideClick, true);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      document.querySelector("body").style.overflow = "auto";
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, [isPopupOpen, togglePopup]);

  return (
    <main className="text-[#121212] dark:text-[#EAEAEA] bg-bg1 bg-no-repeat dark:bg-bg2 dark:bg-no-repeat relative">
      <div className="bg-[#DED5D4] bg-opacity-50 dark:bg-[#303030] dark:bg-opacity-50 overflow-y-scroll scrollbar-hide mx-3 md:mx-6">
        <Navbar />
        {/* <ChatPage /> */}
        <LandingPage />
        <ProjectsPage />
        <SlidingBar />
        <Footer />
      </div>
      <Slide direction="up" in={isPopupOpen} mountOnEnter unmountOnExit>
      <div id="contact-fancy-text" className="sticky bottom-0 left-0 right-0">
        {isSmallScreen ? <ContactPageSmall /> : <ContactPage />}
      </div>
    </Slide>
    </main>
  );
}
