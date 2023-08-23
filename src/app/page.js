'use client'
import LandingPage from '@/components/LandingPage'
// import LeftSidebar from '@/components/LeftSidebar'
import Navbar from '@/components/Navbar'
import ProjectsPage from '@/components/ProjectsPage'
import SkillsPage from '@/components/SkillsPage'

export default function Home() {
  return (
    <main className="p-6 bg-[#FFF8F8] dark:bg-[#121212] text-[#121212] dark:text-[#EAEAEA]">
      <div className="bg-[#DED5D4] dark:bg-[#303030] rounded-2xl">
        {/* <LeftSidebar /> */}
        <Navbar />
        {/* <ChatPage /> */}
        {/* <LandingPage /> */}
        {/* <ProjectsPage /> */}
        {/* <SkillsPage /> */}
      </div>
    </main>
  )
}
