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

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
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
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
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
    </div>
  )
}

export default Education
