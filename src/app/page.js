'use client'
import Footer from '@/components/Footer'
import LandingPage from '@/components/LandingPage'
import Navbar from '@/components/Navbar'
import ProjectsPage from '@/components/ProjectsPage'
import ContactPage from '@/components/ContactPage'
import SlidingBar from '@/components/SlidingBar'
import Slide from '@mui/material/Slide';
import { usePopup } from '@/components/PopupContext';
import ContactPageSmall from '@/components/ContactPageSmall'
import React, { useState, useEffect } from 'react';

export default function Home() {
  const { isPopupOpen, togglePopup } = usePopup();
  let width = 768;

  useEffect(() => {
    width = window.innerWidth;
  }, []);


  return (
    <main className="text-[#121212] dark:text-[#EAEAEA] bg-bg1 bg-no-repeat dark:bg-bg2 dark:bg-no-repeat relative">
      <div className="bg-[#DED5D4] bg-opacity-50 dark:bg-[#303030] dark:bg-opacity-50 overflow-y-scroll scrollbar-hide mx-3 md:mx-6">
        <Navbar />
        {/* <ChatPage /> */}
        <LandingPage />
        <ProjectsPage />
        <SlidingBar/>
        <Footer/>
      </div>
      {width>=768&&<Slide direction="up" in={isPopupOpen} mountOnEnter unmountOnExit>
        <div className="hidden md:flex sticky bottom-0 left-0 right-0">
          <ContactPage/>
        </div>
      </Slide>}
      {width<768&&<Slide direction="up" in={isPopupOpen} mountOnEnter unmountOnExit>
        <div className="md:hidden flex sticky bottom-0 left-0 right-0">
          <ContactPageSmall/>
        </div>
      </Slide>}
    </main>
  )
}
