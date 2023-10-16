'use client'
import { useLayoutEffect } from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ContactPage from '@/components/ContactPage'
import Slide from '@mui/material/Slide';
import { usePopup } from '@/components/PopupContext';
import AboutLandingPage from '@/components/AboutLandingPage';

export default function Home() {
  const { isPopupOpen, togglePopup } = usePopup();

  useLayoutEffect(() => {
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
      document.querySelector("body").style.overflow = "auto";
      document.removeEventListener('click', handleOutsideClick, true);
    };
  }, [isPopupOpen, togglePopup]);
  return (
    <main className="text-[#121212] dark:text-[#EAEAEA] relative">
      <div className="bg-[#DED5D4] dark:bg-[#303030] overflow-y-scroll scrollbar-hide mx-6">
        <Navbar/>
        <AboutLandingPage/>
        <Footer/>
      </div>
      <Slide direction="up" in={isPopupOpen} mountOnEnter unmountOnExit>
        <div className={`sticky bottom-0 left-0 right-0`}>
          <ContactPage/>
        </div>
      </Slide>
    </main>
  )
}
