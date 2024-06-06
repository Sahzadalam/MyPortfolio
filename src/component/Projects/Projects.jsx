import React, { useState } from "react";

const project_data = [
  {
    projectName: "MothersFood",
    p_href: "#",
    p_description: ["Food delievery web app using ReactJs,NodeJS and Firebase"],
  },
  {
    projectName: "Muzigal-student",
    p_href: "https://muzigal.com/",
    p_description: [
      "Music learning platfor for students",
      "Used ReactJS,NextJS,NodeJS and mySQL",
    ],
  },
  {
    projectName: "Muzigal-teachers",
    p_href: "https://teachers.muzigal.com/",
    p_description: [
      "Music teaching platfor for teachers",
      "Used ReactJS,NextJS,NodeJS and mySQL",
    ],
  },
  {
    projectName: "Stumbl",
    p_href: "https://stumbl.com/",
    p_description: [
      "Ecommerce platform for GenZ customers",
      "Used ReactJS,NextJS,NodeJS,serverless framework,AWS Lambda and AWS DynamDB",
    ],
  },
  {
    projectName: "Stumbl-app using react-native",
    p_href:
      "https://play.google.com/store/apps/details?id=co.shopney.stumbul&hl=en_IE",
    p_description: [
      "Ecommerce android/IOS apk for GenZ customers",
      "User React-Native",
      "Integrated google login, facebook login and apple login",
    ],
  },
  {
    projectName: "StartupCircle",
    p_href: "#",
    p_description: [
      "Helper tool for early stage startup founders",
      "Used ReactJS,NextJs,NodeJS,MySQL and OpenAI 3.5",
    ],
  },
  {
    projectName: "NoxCop web app and android/ios apk",
    p_href: "#",
    p_description: [
      "Restaurant management web app for emloyee of restaurant",
      "Used ReactJS,NextJS,NodeJS,React-Native and mySQL,",
      "Integrated QRcode scanner in the React-native app to get customer details",
    ],
  },
  {
    projectName: "Godenty",
    p_href: "https://www.godenty.com/",
    p_description: [
      "CLinic/Doctor management web app for doctor,clinic and admin",
      "Used ReactJS,taiwindCSS , NodeJS, and mySQL,",
      "Managed team over 6 people acted as a Team Lead",
    ],
  },
];

import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Project.css";

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

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
        {project_data.map((work) => (
          <div
            key={work.p_no} // Use p_no as key
            onClick={() => handleImageClick(work)}
            className="relative transform transition duration-500 hover:scale-105 border border-white border-opacity-10 rounded-lg shadow-4xl hover:shadow-2xl hover:-translate-y-2 backdrop-blur-lg bg-opacity-5 cursor-pointer text-center"
          >
            <p>{work.projectName}</p>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header>
          <Modal.Title className="title">
            <div>{selectedProject?.projectName}</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="sub-title">Project Details</p>
          {selectedProject ? (
            <ul className="des-list">
              {selectedProject.p_description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>No Description</p>
          )}
        </Modal.Body>
        <div class="modal-footer">
          <button
            type="button"
            className="close-btn"
            data-dismiss="modal"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Projects;
