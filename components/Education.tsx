import React from "react"

interface EducationItem {
  id: number
  startDate: string
  endDate: string
  universityName: string
  address: string
  courseName: string
}

const EducationData: EducationItem[] = [
  {
    id: 2,
    startDate: "2020 ",
    endDate: "2024",
    universityName: "Trinity College of Engineering",
    address: "Karimnagar, Telengana",
    courseName: "B.Tech. in Computer Science",
  },
  {
    id: 1,
    startDate: "2018",
    endDate: "2020",
    universityName: "B.N.N College",
    address: "Bhiwandi, Maharastra",
    courseName: "Science",
  },
]

const Education: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full -z-10">
      <h1 className="text-2xl font-bold">Education</h1>

      <ol className="relative border-s border-gray-800 dark:border-gray-700">
        {EducationData.map((educationDetails, index) => {
          const {
            id,
            courseName,
            startDate,
            address,
            universityName,
            endDate,
          } = educationDetails
          return (
            <li
              key={id}
              className={`ms-4 ${
                index === EducationData.length - 1 ? "mb-2" : "mb-10"
              }`}
            >
              <div className="absolute w-3 h-3 bg-gray-800 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {startDate} - {endDate || "Present"}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {courseName} at {universityName}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {address}
              </p>
            </li>
          )
        })}
      </ol>

{/*         
<div className="flex flex-col gap-8 w-full max-w-4xl mx-auto py-16 px-4">
<h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
  Education Journey
</h1>

<ol className="relative border-l-2 border-purple-300 dark:border-purple-800">
  {EducationData.map((educationDetails, index) => {
    const {
      id,
      courseName, 
      startDate,
      address,
      universityName,
      endDate,
    } = educationDetails
    return (
      <li
        key={id}
        className={`ms-6 ${
          index === EducationData.length - 1 ? "mb-4" : "mb-12"
        }`}
      >
        <div className="absolute w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mt-2 -start-2 border-2 border-white dark:border-gray-900 shadow-lg shadow-purple-500/50"></div>
        <time className="mb-2 text-sm font-medium text-purple-600 dark:text-purple-400 flex items-center">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
          </svg>
          {startDate} - {endDate || "Present"}
        </time>
        <div className="p-6 bg-white rounded-lg border border-purple-100 shadow-xl dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {courseName}
          </h3>
          <div className="flex items-center text-purple-600 dark:text-purple-400 mb-2">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 3.94 1.687a1 1 0 00.788 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm9.3 2.908a1 1 0 00-1.364 1.364l1.254 1.254a1 1 0 001.364 0l1.254-1.254a1 1 0 00-1.364-1.364l-.572.572-.572-.572z"/>
            </svg>
            {universityName}
          </div>
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
            </svg>
            {address}
          </div>
        </div>
      </li>
    )
  })}
</ol>
</div>  */}
    </div>

  
  )
}

export default Education
