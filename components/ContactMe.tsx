import Link from "next/link"
import React from "react"

function ContactMe() {
  return (
    <div className="flex flex-col gap-4 mb-20">
      <h1 className="text-2xl font-bold">Contact Me</h1>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        You can reach out to me on{" "}
        <Link
          href="https://www.linkedin.com/in/adharsh-boddul-6847a3235/"
          target="_blank"
          className="text-blue-500"
        >
          LinkedIn
        </Link>{" "}
        or{" "}
        <Link href="mailto:adharshcodes@gmail.com" className="text-blue-500">
          adharshcodes@gmail.com
        </Link>
      </p>
    </div>
  )
}

export default ContactMe
