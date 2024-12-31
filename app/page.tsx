// Code-split components using dynamic imports for better performance
import dynamic from "next/dynamic"

// Keep Intro and CustomDock non-dynamic since they are above the fold
import Intro from "@/components/Intro"
import { CustomDock } from "@/components/CustomDock"

// Dynamically import components below the fold
const Education = dynamic(() => import("@/components/Education"), {
  ssr: true,
})
const Skills = dynamic(() => import("@/components/Skills"), {
  ssr: true,
})
const Projects = dynamic(() => import("@/components/Projects"), {
  ssr: true,
})
const ContactMe = dynamic(() => import("@/components/ContactMe"), {
  ssr: true,
})
const Meteors = dynamic(() => import("@/components/magicui/meteors"), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:gap-12 gap-8 md:p-24 p-10 relative overflow-hidden lg:w-10/12 sm:w-full mx-auto">
      <div className="fixed inset-0 pointer-events-none light-mode-fade-bottom dark:fade-bottom z-10 bg-white/10 dark:bg-black/10" />
      <CustomDock />
      <Intro />
      {/* <WorkExperience /> */}
      <Education />
      <Skills />
      <Projects />
      <ContactMe />
      <Meteors number={20} />
    </main>
  )
}
