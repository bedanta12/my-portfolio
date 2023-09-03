'use client'
import Footer from '@/components/Footer'
import LandingPage from '@/components/LandingPage'
import Navbar from '@/components/Navbar'
import ProjectsPage from '@/components/ProjectsPage'
import ContactPage from '@/components/ContactPage'
import SlidingBar from '@/components/SlidingBar'
import { usePopup } from '@/components/PopupContext';

export default function Home() {
  const { isPopupOpen, togglePopup } = usePopup();

  return (
    <main className="text-[#121212] dark:text-[#EAEAEA] relative">
      
      <div className="bg-[#DED5D4] dark:bg-[#303030] overflow-y-scroll scrollbar-hide mx-6">
        <Navbar />
        {/* <ChatPage /> */}
        <LandingPage />
        <ProjectsPage />
        <SlidingBar/>
        <Footer/>
      </div>
      <div className={`sticky bottom-0 left-0 right-0  transition-transform ease-in-out duration-700 transform ${isPopupOpen ? 'translate-y-0' : 'translate-y-full'} `}>
        <ContactPage/>
      </div>
    </main>
  )
}
