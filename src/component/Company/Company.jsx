import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min';
const companies = [
  {
    companyName: "Truequations Pvt Ltd",
    duration: "Oct 2023 - present",
    description: [
      "Worked and Leaded 5 member team on Nox-Cop project its one of clients project as a Restaurant internal tool based on Node Js , Express Js , mySQL , React Js , react-native.",
      "Working on Godenty project and leading 10 members team to develop the application. Its a web application for doctors and clinics when a clinic can create posts and its availiblity and doctor can be booked for consultant or doctor can book a cabin in a clinic. This is based on React js, Node js, MySQL,express",
    ],
  },
  {
    companyName: "Handajitech Solution",
    duration: "Jan 2022 - Sep 2023",
    description: [
      "Worked on web frontend using React js, next js with node",
      "Worked on backend using node , Serverless framework ,AWS DynamoDB",
      "Worked on IOS/Android app using React-Native (Note:- I owned the part of app development IOS/Android.)",
      "Worked as full stack developer on web application,Android/IOS application using react js,node js,react-native with serverless and dynamoDB. Worked on www.stumble.co under handajitech pvt ltd",
      "Handajitech shifted me to STUMBL for 6 - 7 months",
      "Again back to Origin company from Stumbl/Shouto.",
      "Worked on OpenAI based web applications its live startupcircle.ai",
    ],
  },
  {
    companyName: "Muzigal",
    duration: "Feb 2021 - Jan 2022",
    description: [
      "Worked on web frontend for student web using React js , Next and Node",
      "Worked on web frontend for teachers web using React js , Next and Node",
      "Worked on Flutter app for students.",
    ],
  },
  {
    companyName: "MothersFood",
    duration: "Sep 2020 - Jan 2021",
    description: [
      " Worked on web frontend using React js , Next and Node",
      "(note:- its domain was mothersfood.in previously when I worked there.Now its Yamizo)",
    ],
  },
];
function Company() {
  return (
    <div className="accordion  " id="Company">
      <div className="about-title relative flex justify-center items-center p-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-tr from-purple-600 to-orange-500 text-transparent bg-clip-text">
          Companies
        </h1>
      </div>
      <div className="flex flex-col relative  ">
        <div className="hs-accordion-group" data-hs-accordion-always-open="">
          {companies.map((company, index) => (
            <div
              key={index}
              className="hs-accordion bg-black border border-white border-opacity-10 w-3/5 mx-auto rounded-md"
              id="hs-basic-always-open-heading-two"
            >
              <button
                className="hs-accordion-toggle hs-accordion-active:text-blue-900 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:outline-none dark:focus:text-neutral-400 px-4"
                aria-controls="hs-basic-always-open-collapse-two"
              >
                <svg
                  className="hs-accordion-active:hidden block size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <svg
                  className="hs-accordion-active:block hidden size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                </svg>
                {company.companyName} - {company.duration}
              </button>
              <div
                id="hs-basic-always-open-collapse-two"
                className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300 px-3"
                aria-labelledby="hs-basic-always-open-heading-two"
              >
                <ul className="list-disc px-3 text-gray-800 dark:text-neutral-200">
                  {company.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Company;
