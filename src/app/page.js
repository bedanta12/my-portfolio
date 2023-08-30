'use client'
import Footer from '@/components/Footer'
import LandingPage from '@/components/LandingPage'
// import LeftSidebar from '@/components/LeftSidebar'
import Navbar from '@/components/Navbar'
import ProjectsPage from '@/components/ProjectsPage'
import SkillsPage from '@/components/SkillsPage'
import SlidingBar from '@/components/SlidingBar'

export default function Home() {
  return (
    <main className="text-[#121212] dark:text-[#EAEAEA] relative">
      
      <div className="bg-[#DED5D4] dark:bg-[#303030] rounded-2xl mt-6 mb-6 mx-6 overflow-clip">
        
        {/* <LeftSidebar /> */}
        <Navbar />
        {/* <ChatPage /> */}
        <LandingPage />
        <ProjectsPage />
        <SlidingBar/>
        {/* <SkillsPage /> */}
        <Footer/>
      </div>
    </main>
  )
}
