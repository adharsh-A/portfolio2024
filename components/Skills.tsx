"use client"
import React from "react"
import { motion } from "framer-motion"

const skillsData = [
  // Backend Development
  "Node.js", "GoLang", "RESTful APIs", "WebSockets (Socket.io)",
  "Kafka", "RabbitMQ", "GraphQL",
  "Authentication (JWT, OAuth)","Sequelize",
  "PostgreSQL", "MySQL", "MongoDB","Mongoose","Redis", "Supabase",

  // DevOps & Deployment
  "AWS", "Deployment (Netlify, Vercel, AWS)",
  "Git", "GitHub",

  // Testing & Quality Assurance
  "Testing (Jest, Cypress)",

  // Frontend Development
  "JavaScript", "TypeScript", "React", "React Native", "Expo","Next.js", "Redux Toolkit",
  "Zustand", "RTK Query", "HTML", "CSS", "SCSS", "Tailwind CSS",
  "Material UI", "Responsive Design", "SEO Optimization", "Vite"
];



function Skills() {
  return (
    // <div className="flex flex-col gap-4 w-full">
    //   <h1 className="text-2xl font-bold">Skills</h1>
    //   <div className="flex flex-wrap gap-2">
    //     {skillsData.map((skill, index) => (
    //       <motion.span
    //         key={index}
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ duration: 0.5, delay: index * 0.1 }}
    //         // whileHover={{ scale: 1.1, backgroundColor: "#4a5568", color: "#edf2f7" }} // Change colors on hover
    //         whileInView={{ opacity: [0, 1], y: [20, 0] }} // Animate on entr
    //         // exit={{ opacity: [1, 0], y: [0, 20] }} // Animate on exit
    //         className="cursor-pointer bg-gray-500 text-gray-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
    //       >
    //         {skill}
    //       </motion.span>
    //     ))}

    //   </div>
    // </div>
    <div className="flex flex-col gap-4 w-full">
    <h1 className="text-2xl font-bold text-gray-100 dark:text-gray-100">Skills</h1>
    <div className="flex flex-wrap gap-3">
      {skillsData.map((skill, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          className="cursor-pointer bg-gray-800 text-gray-200 text-sm font-medium px-3 py-1.5 rounded-md border border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 hover:bg-gray-700 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>
  )
}

export default Skills
