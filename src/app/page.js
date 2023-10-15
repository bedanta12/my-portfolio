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
import LoadingScreen from '../app/loading';
import React, { useState, useEffect } from 'react';
import styles from 'src/app/globals.css';

export default function Home() {
  const { isPopupOpen, togglePopup } = usePopup();
  const [isLoading, setIsLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2400);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setShowLoading(false);
      }, 500);
    }
  }, [isLoading]);

  const loadingContainerStyle = {
    
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: isLoading ? 1 : 1,
    transition: ' transform 1.5s',   // Please Set the loading slide up opacity/speed here !!
    transform: isLoading ? 'translateY(0)' : 'translateY(-190%)',
    zIndex: 99999,
  };

  return (
    <main className="text-[#121212] dark:text-[#EAEAEA] bg-bg1 bg-no-repeat dark:bg-bg2 dark:bg-no-repeat relative">
    
    {showLoading && (
        <div style={loadingContainerStyle}>
          <LoadingScreen />
        </div>
    )}
      
          
        <div className="bg-[#DED5D4] bg-opacity-50 dark:bg-[#303030] dark:bg-opacity-50 overflow-y-scroll scrollbar-hide mx-3 md:mx-6">  
        
          <Navbar />
          {/* <ChatPage /> */}
          <LandingPage />
          <ProjectsPage />
          <SlidingBar />
          <Footer />
          </div>  
      
      
      
      
      <Slide direction="up" in={isPopupOpen} mountOnEnter unmountOnExit>
        <div className="sticky bottom-0 left-0 right-0">
          <ContactPage/>
        </div>
      </Slide>
      {/* {window?.innerWidth<768&&<Slide direction="up" in={isPopupOpen} mountOnEnter unmountOnExit>
        <div className="sticky bottom-0 left-0 right-0">
          <ContactPageSmall/>
        </div>
      </Slide>} */}
    </main>
  )
}
