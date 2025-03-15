interface WorkExperienceItem {
  id: number
  startDate: string
  endDate?: string
  companyName: string
  jobTitle: string
  description: string[]
}

const workExperienceData: WorkExperienceItem[] = [
  // {
  //   id: 2,
  //   startDate: "Jul 2021",
  //   endDate: "",
  //   companyName: "Tatvasoft, Ahmedabad",
  //   jobTitle: "Software Engineer",
  //   description: [
  //     "Collaborated closely with product managers, designers, and backend engineers, leading to the timely delivery of features.",
  //     "Stayed up-to-date on the latest front-end technologies, introducing and implementing innovative solutions in the company's flagship product.",
  //     "Worked on three key projects: DEEGEE, which was based on social media NFT sharing, WTT, which was based on e-commerce, and Andrew's app, which was based on a social media platform.",
  //     "Enhanced skills in React, Typescript, HTML, CSS, JavaScript, JSON, React Hooks, Material UI, Redux, and REST API Integration.",
  //   ],
  // },
  {
    id: 1,
    startDate: "Jan 2025",
    endDate: "Present",
    companyName: "Tek Tree LLC",
    jobTitle: "Junior Full Stack Developer",
description: [
      "Developed full-stack web applications with seamless front-end and back-end integration.",
      "Implemented responsive designs to ensure optimal user experience across devices and browsers.",
      "Built scalable code using modern web technologies and best practices.",
      "Collaborated with teams to debug issues, optimize performance, and improve application scalability."
    ],
  },
]

const WorkExperience: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full -z-10">
      <h1 className="text-2xl font-bold">Work Experience</h1>

      <ol className="relative border-s border-gray-800 dark:border-gray-700">
        {workExperienceData.map((experienceDetails, index) => {
          const { id, companyName, description, jobTitle, startDate, endDate } =
            experienceDetails
          return (
            <li
              key={id}
              className={`ms-4 ${
                index === workExperienceData.length - 1 ? "mb-2" : "mb-10"
              }`}
            >
              <div className="absolute w-3 h-3 bg-gray-800 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {startDate} - {endDate || "Present"}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {jobTitle}
              </h3>
              <h2 className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {companyName}
              </h2>
              <div className="text-base font-normal text-gray-700 dark:text-gray-400 ">
                <ul>
                  {description.map((desc) => (
                    <li key={desc}>
                      <p className="text-gray-700 dark:text-gray-400">{desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ol>


{/* 
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center tracking-tight">
        Professional Journey
      </h1>

      <ol className="relative border-l-2 border-gradient-to-b from-blue-500 to-purple-500">
        {workExperienceData.map((experienceDetails, index) => {
          const { id, companyName, description, jobTitle, startDate, endDate } =
            experienceDetails
          return (
            <li
              key={id}
              className={`ml-6 ${
                index === workExperienceData.length - 1 ? 'mb-0' : 'mb-16'
              }`}
            >
              <div className="absolute w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 -left-2 border-2 border-white dark:border-gray-900 shadow-lg"></div>
              <time className="mb-3 text-sm font-medium text-blue-500 dark:text-blue-400 flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
                {startDate} - {endDate || "Present"}
              </time>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 hover:text-blue-600 transition-colors duration-200">
                {jobTitle}
              </h3>
              <h2 className="mb-4 text-lg font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200">
                {companyName}
              </h2>
              <div className="text-base text-gray-700 dark:text-gray-300">
                <ul className="space-y-4">
                  {description.map((desc) => (
                    <li key={desc} className="flex items-start">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-blue-500 rounded-full mr-3"></span>
                      <p className="flex-1 leading-relaxed hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                        {desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          )
        })}
      </ol>
    </div> */}
    </div>
  )
}

export default WorkExperience
