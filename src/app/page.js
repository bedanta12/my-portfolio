'use client'
import Footer from '@/components/Footer'
import LandingPage from '@/components/LandingPage'
// import LeftSidebar from '@/components/LeftSidebar'
import Navbar from '@/components/Navbar'
import ProjectsPage from '@/components/ProjectsPage'
import ContactPage from '@/components/ContactPage'
import SlidingBar from '@/components/SlidingBar'

export default function Home() {
  return (
    <main className="text-[#121212] dark:text-[#EAEAEA] relative px-6">
      
      <div className="bg-[#DED5D4] dark:bg-[#303030] overflow-y-scroll scrollbar-hide">
        
        {/* <LeftSidebar /> */}
        <Navbar />
        {/* <ChatPage /> */}
        <LandingPage />
        <ProjectsPage />
        <SlidingBar/>
        {/* <SkillsPage /> */}
        <Footer/>
        {/* <ContactPage/> */}
      </div>
    </main>
  )
}
