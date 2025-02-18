"use client";
import Image from "next/image";
import ProfilePic from "@/app/images/me1.webp";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-14 justify-between items-center -z-10">
      <div className="flex flex-col gap-2 w-full lg:w-4/5">
        <motion.h1
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          {Array.from("Hi! Im Adharsh").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                delay: index * 0.1,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ filter: "blur(5px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          As a Full-Stack Developer, I craft robust, scalable applications with
          seamless user experiences. I create engaging interfaces and architect
          secure, high-performance backend systems - delivering end-to-end
          solutions that make an impact.{" "}
        </motion.p>
        <motion.p
          initial={{ filter: "blur(5px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base text-gray-800 dark:text-gray-300 w-full"
        >
          I prioritize writing clean, efficient code while following industry
          best practices. My problem-solving mindset drives me to optimize
          performance and create seamless user experiences. I&apos;m passionate about
          building impactful solutions and bringing innovative ideas to life.
          Check out my projects at https://github.com/adharsh-A.
        </motion.p>
      </div>
      <motion.div className="flex items-center justify-center md:mb-0 z-20">
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
