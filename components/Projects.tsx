"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Real-Time Chat Application (Full Stack)",
    description:
      "Built a feature-rich real-time chat application to enable seamless communication between users with a focus on performance and responsiveness.",
    link: "https://chat-app-frontend1.vercel.app/",
    code: "https://github.com/adharsh-A/chat-app-frontend",
    previewVideo: "/videos/chat.webm",
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
    title: "Talent Finder - Job Marketplace Platform (Full Stack)",
    description:
      "Developed a platform to connect companies and candidates, emphasizing seamless user experience and secure data handling.",
    link: "https://talent-finder-frontend.vercel.app/",
    code: "https://github.com/adharsh-A/talent-finder-frontend",
    previewVideo: "/videos/talent.webm",
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
    title: " E-commerce Platform with Admin Dashboard (Full Stack)",
    description:
      "Built a comprehensive e-commerce application with features for product management, shopping cart,order management, secure payments integration and admin panel.",
    link: "https://jumpsquad.vercel.app/",
    code: "https://github.com/adharsh-A/jumpsquad-ecom-frontend",
    previewVideo: "/videos/jumpsquad.webm",
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
    title: "Landing Page-Frontend Showcase (Frontend)",
    description:
      "built an elegant and responsive landing page that showcases the skills and experience of a frontend developer and animation with Framer Motion.",
    link: "https://landing-page1-navy.vercel.app/",
    code: "https://github.com/adharsh-A/landing-page-1",
    previewVideo: "/videos/landing1.webm",
    technologies: [
      "React",
      "CSS",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  // {
  //   id: 5,
  //   title: "Marketing Budget Calculator",
  //   description:
  //     " Effortlessly allocate your marketing budget across Instagram, Google, and YouTube with real-time insights for maximum ROI. ",
  //   link: "https://marketing-budget-calculator.vercel.app/",
  //   code: "https://github.com/adharsh-A/MarketingBudgetCalculator",
  //   previewVideo: "/videos/market.webm",
  //   technologies: [
  //     "React",
  //     "CSS",
  //     "Tailwind CSS",
  //     "Context API",
  //     "Framer Motion",
  //     "Shadcn UI",
  //   ],
  // },
  {
    id: 5,
    title: "3D Interactive Landing Page (Frontend)",
    description: "A visually stunning landing page featuring interactive 3D elements, built using modern web technologies for an engaging user experience.",
    link: "https://0-3d-landing-page.vercel.app/",
    code: "https://github.com/adharsh-A/0-3d-landing-page",
    previewVideo: "/videos/3d-page.webm",
    technologies: ["React", "ThreeJS", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "Paypal Clone (Frontend)",
    description: "frontend of paypal clone",
    link: "https://paypal-frontend-clone.vercel.app/",
    code: "https://github.com/adharsh-A/PayPal-Frontend-Clone",
    previewVideo: "/videos/paypal.webm",
    technologies: ["React", "CSS", "Tailwind CSS", "Context API"],
  },
  {
    id: 7,
    title: "30+ Mini Projects in JavaScript",
    description:
      "Explore my diverse web applications showcasing front-end development, API integration, and user interface design skills.",
    link: "https://js-portfolio24.netlify.app/",
    code: "https://github.com/adharsh-A/JS30",
    previewVideo: "/videos/js30.webm",
    technologies: ["JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
];

function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((projectDetails,index) => {
          const {
            id,
            code,
            description,
            link,
            previewVideo,
            technologies,
            title,
          } = projectDetails;

          return (
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }} // Trigger when in view
              viewport={{ once: false, amount: 0.15 }} // Trigger only once
              exit={{ opacity: 0, x:-200 }} // Exit state
              transition={{ duration: 1,delay:index*0.2  }}
              key={id}
              className="flex flex-col border rounded-md dark:border-gray-700"
            >
              <video
                src={previewVideo}
                autoPlay
                muted
                loop
                className="rounded-t-md"
                aria-label={`${title} preview video`}
              />
              <div className="flex flex-col gap-3 p-4 grow">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="bg-slate-100 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
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
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
