"use client"
import Image from "next/image";
import ProfilePic from "@/app/images/me1.gif";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-14 justify-between items-center -z-10">
      <div className="flex flex-col gap-2 w-full lg:w-4/5">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold mb-4"
        >
          Hi! Im Adharsh
        </motion.h1>
        <p>
          Motivated full-stack developer with a strong foundation in both
          front-end and back-end technologies. Eager to contribute to innovative
          projects while continuing to grow my skills
        </p>
        <p className="text-base text-gray-800 dark:text-gray-300 w-full">
          I am now actively seeking opportunities where I can apply this
          versatile skill set and contribute to forward-thinking web development
          projects. Feel free to explore my portfolio and reach out if youre
          interested in collaborating or learning more!
        </p>
      </div>
      <motion.div
        className="flex items-center justify-center md:mb-0 z-20"
      >
        <Image
          src={ProfilePic}
          alt="Adharsh"
          width={160}
          height={160}
          className="  border-2 border-gray-300 rounded-full object-cover"
        />
      </motion.div>
    </div>
  );
}
