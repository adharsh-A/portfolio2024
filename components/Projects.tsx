import Link from "next/link"
import React from "react"
import { Button } from "./ui/button"

const projects = [
  {
    id: 1,
    title: "Real-Time Chat Application",
    description:
      "Built a feature-rich real-time chat application to enable seamless communication between users with a focus on performance and responsiveness.",
    link: "https://chat-app-frontend1.vercel.app/",
    code: "https://github.com/adharsh-A/chat-app-frontend",
    previewVideo: "/videos/chat.mp4",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "Socket",
      "Shadcn UI",
      "framer-motion",
      "PostgreSQL",
      "Tailwind CSS",
      "Redux Toolkit",
      "JWT",
    ],
  },
  {
    id: 2,
    title: "Talent Finder - Full-Stack Job Marketplace Platform",
    description:
      "Developed a platform to connect companies and candidates, emphasizing seamless user experience and secure data handling.",
    link: "https://talent-finder-frontend.vercel.app/",
    code: "https://github.com/adharsh-A/talent-finder-frontend",
    previewVideo: "/videos/talent.mp4",
    technologies: [
"React",
      "Node",
      "Tailwind CSS", 
      "Express",
      "Three.js",
      "Socket",
      "PostgreSQL",
      "Redux Toolkit",
      "JWT",
      "Sequielize ORM",
    ],
  },
  {
    id: 3,
    title: " E-commerce Platform with Admin Dashboard",
    description:
      "Built a comprehensive e-commerce application with features for product management, shopping cart,order management, secure payments integration and admin panel.",
    link: "https://jumpsquad.vercel.app/",
    code: "https://github.com/adharsh-A/jumpsquad-ecom-frontend",
    previewVideo: "/videos/jumpsquad.mp4",
    technologies: [
      "React",
      "Three.js",
      "Node",
      "CSS",
      "Material UI",
      "Tailwind CSS", 
      "Express",
      "Context API",
      "JWT",
      "MongoDB",
      "Mongoose ODM",
      "PayPal Payments",
    ],
  },
  {
    id: 4,
    title: "Marketing Budget Calculator",
    description:
      " Effortlessly allocate your marketing budget across Instagram, Google, and YouTube with real-time insights for maximum ROI. ",
    link: "https://marketing-budget-calculator.vercel.app/",
    code: "https://github.com/adharsh-A/MarketingBudgetCalculator",
    previewVideo: "/videos/market.mp4",
    technologies: [
      "React",
      "CSS",
      "Tailwind CSS",
      "Context API",
      "Framer Motion",
      "Shadcn UI",
      
    ],
  },
  {
    id: 5,
    title: "Paypal Clone-Frontend",
    description:
      "frontend of paypal clone",
    link: "https://paypal-frontend-clone.vercel.app/",
    code: "https://github.com/adharsh-A/PayPal-Frontend-Clone",
    previewVideo: "/videos/paypal.mp4",
    technologies: [
      "React",
      "CSS",
      "Tailwind CSS",
      "Context API",
    ],
  },
  {
    id: 6,
    title: "30+ Mini Projects in JavaScript",
    description:
      "Explore my diverse web applications showcasing front-end development, API integration, and user interface design skills.",
    link: "https://js-portfolio24.netlify.app/",
    code: "https://github.com/adharsh-A/JS30",
    previewVideo: "/videos/js30.mp4",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    
    ],
  },
]

function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((projectDetails) => {
          const {
            id,
            code,
            description,
            link,
            previewVideo,
            technologies,
            title,
          } = projectDetails

          return (
            <div
              key={id}
              className="flex flex-col border rounded-md dark:border-gray-700"
            >
              <video
                src={previewVideo}
                autoPlay
                muted
                loop
                className="rounded-t-md"
              />
              <div className="flex flex-col gap-3 p-4 grow">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {description}
                </p>
                <div className="flex flex-wrap gap-[4px]">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="bg-slate-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  <Link href={link} target="_blank">
                    <Button variant="default">View</Button>
                  </Link>
                  <Link href={code} target="_blank">
                    <Button variant="outline">Code</Button>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
