"use client"
import React from "react"
import { motion } from "framer-motion"

const skillsData = [
  "HTML",
  "CSS",
  "React",
  // "Next.js",
  "Redux Toolkit",
  "JavaScript",
  "Tailwind CSS",
  "Responsive Design",
  "Material UI",
  "SCSS",
  "Git",
  "GitHub",
  "Node.js",
  "PostreSQL",
  "Socket.io",
  "Express",
  "MongoDB",
  "MySQL",
  "TypeScript",
  "RESTful API's",
  "AWS",
  "Authentication (JWT, OAuth,)",
  "Testing (Jest, Cypress)",
  "Deployment (Netlify, Vercel,AWS,etc)",
  "Mongoose",
  "Sequelize",
  "Supabase",  
  "SEO Optimization",
  "Vite",

]

function Skills() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Skills</h1>
      <div className="flex flex-wrap gap-2">
      {skillsData.map((skill, index) => (
  <motion.span
  key={index}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
  whileHover={{ scale: 1.1, backgroundColor: "#4a5568", color: "#edf2f7" }} // Change colors on hover
          whileInView={{ opacity: [0, 1], y: [20, 0] }} // Animate on entr
  exit={{ opacity: [1, 0], y: [0, 20] }} // Animate on exit
    className="cursor-pointer bg-gray-500 text-gray-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
      >
    {skill}
  </motion.span>
))}

      </div>
    </div>
  )
}

export default Skills
