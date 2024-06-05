import React, { useState } from "react";

const project_data = [
  { projectName: "MothersFood", p_href: "#" },
  { projectName: "Muzigal-student", p_href: "https://muzigal.com/" },
  { projectName: "Muzigal-teachers", p_href: "https://teachers.muzigal.com/" },
  { projectName: "Stumbl", p_href: "https://stumbl.com/" },
  {
    projectName: "Stumbl-app using react-native",
    p_href:
      "https://play.google.com/store/apps/details?id=co.shopney.stumbul&hl=en_IE",
  },
  { projectName: "StartupCircle", p_href: "#" },
  { projectName: "NoxCop", p_href: "#" },
  { projectName: "Godenty", p_href: "https://www.godenty.com/" },
];
function Projects() {
  return (
    <div
      id="Projects"
      className="myproject flex flex-col items-center justify-center gap-20 mt-32 gap-y-8"
    >
      <div className="myproject-title">
        <h1 className="text-4xl md:text-5xl font-bold flex flex-col items-center gap-4 bg-gradient-to-tr from-purple-600 to-orange-500 text-transparent bg-clip-text">
          My Projects
        </h1>
      </div>
      <div className="myproject-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-2">
        {project_data.map((work, index) => (
          <a
            key={index}
            href={work.p_href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative transform transition duration-500 hover:scale-105 border border-white border-opacity-10 rounded-lg shadow-4xl hover:shadow-2xl hover:-translate-y-2 backdrop-blur-lg bg-opacity-5"
          >
            <div className="absolute inset-4  opacity-30 pointer-events-none rounded-lg"></div>
            <p>{work.projectName}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
