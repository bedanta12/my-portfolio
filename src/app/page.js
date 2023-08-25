'use client'
import LandingPage from '@/components/LandingPage'
// import LeftSidebar from '@/components/LeftSidebar'
import Navbar from '@/components/Navbar'
import ProjectsPage from '@/components/ProjectsPage'
import SkillsPage from '@/components/SkillsPage'
import SlidingBar from '@/components/SlidingBar'

export default function Home() {
  return (
    <main className="p-6 text-[#121212] dark:text-[#EAEAEA]">
      <div className="bg-[#DED5D4] dark:bg-[#303030] rounded-2xl">
        {/* <LeftSidebar /> */}
        <Navbar />
        {/* <ChatPage /> */}
        <LandingPage />
        <ProjectsPage />
        <SlidingBar/>
        {/* <SkillsPage /> */}
      </div>
    </main>
  )
}
