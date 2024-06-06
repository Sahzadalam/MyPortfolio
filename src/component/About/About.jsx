import React from "react";
import Profile_img from "../../assets/Profile_img.png";

function About() {
  return (
    <div
      id="About"
      className=" flex flex-col items-center justify-center gap-20 md:gap-10 lg:gap-20 mt-28 md:mt-28 mx-4 lg:mx-20 "
    >
      <div className="about-title relative   ">
        <h1 className=" text-4xl md:text-5xl font-bold bg-gradient-to-tr from-purple-600 to-orange-500 text-transparent bg-clip-text ">
          About Me
        </h1>
      </div>
      <div className="about-section flex flex-col md:flex-row gap-10 md:gap-20 ">
        <div className="about-left">
         
        </div>
        <div className="about-right mt-10 md:mt-0 flex flex-col gap-10 ">
          <div className="about-para">
            <p className="text-base md:text-lg max-w-5xl">
              Hello, I am [Sahzad Alam], a full stack developer with extensive
              experience in ReactJS, NodeJS, NextJS, MySQL, and React Native
              with total 3 years and 10 months experience. I have contributed to
              over six projects, handling both front-end and back-end
              development tasks. Please take a moment to review my portfolio
              below to see my work and accomplishments.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill flex items-center gap-4 md:gap-6 lg:gap-12 mb-4 md:mb-6 lg:mb-8 transition duration-300 transform hover:scale-105 max-w ">
              <p className="text-base md:text-lg font-semibold min-w-28">
                HTML , CSS ,SCSS & Tailwind CSS
              </p>
              <hr
                className="w-1/2 h-1 md:h-2 rounded-full bg-gradient-to-tr from-purple-600 to-orange-500"
                style={{ width: "80%" }}
              />
            </div>
            <div className="about-skill flex items-center gap-4 md:gap-6 lg:gap-12 mb-4 md:mb-6 lg:mb-8 transition duration-300 transform hover:scale-105">
              <p className="text-base md:text-lg font-semibold min-w-28">
                JavaScript
              </p>
              <hr
                className="w-1/2 h-1 md:h-2 rounded-full bg-gradient-to-tr from-purple-600 to-orange-500"
                style={{ width: "70%" }}
              />
            </div>
            <div className="about-skill flex items-center gap-4 md:gap-6 lg:gap-12 mb-4 md:mb-6 lg:mb-8 transition duration-300 transform hover:scale-105">
              <p className="text-base md:text-lg font-semibold min-w-28">
                React JS
              </p>
              <hr
                className="w-1/2 h-1 md:h-2 rounded-full bg-gradient-to-tr from-purple-600 to-orange-500"
                style={{ width: "60%" }}
              />
            </div>
            <div className="about-skill flex items-center gap-4 md:gap-6 lg:gap-12 mb-4 md:mb-6 lg:mb-8 transition duration-300 transform hover:scale-105">
              <p className="text-base md:text-lg font-semibold min-w-28">
                Next JS
              </p>
              <hr
                className="w-1/2 h-1 md:h-2 rounded-full bg-gradient-to-tr from-purple-600 to-orange-500"
                style={{ width: "60%" }}
              />
            </div>
            <div className="about-skill flex items-center gap-4 md:gap-6 lg:gap-12 mb-4 md:mb-6 lg:mb-8 transition duration-300 transform hover:scale-105">
              <p className="text-base md:text-lg font-semibold min-w-28">
                Node JS
              </p>
              <hr
                className="w-1/2 h-1 md:h-2 rounded-full bg-gradient-to-tr from-purple-600 to-orange-500"
                style={{ width: "60%" }}
              />
            </div>
            <div className="about-skill flex items-center gap-4 md:gap-6 lg:gap-12 mb-4 md:mb-6 lg:mb-8 transition duration-300 transform hover:scale-105">
              <p className="text-base md:text-lg font-semibold min-w-28">
                React-Native
              </p>
              <hr
                className="w-1/2 h-1 md:h-2 rounded-full bg-gradient-to-tr from-purple-600 to-orange-500"
                style={{ width: "60%" }}
              />
            </div>
            <div className="about-skill flex items-center gap-4 md:gap-6 lg:gap-12 mb-4 md:mb-6 lg:mb-8 transition duration-300 transform hover:scale-105">
              <p className="text-base md:text-lg font-semibold min-w-28">
                Open AI
              </p>
              <hr
                className="w-1/2 h-1 md:h-2 rounded-full bg-gradient-to-tr from-purple-600 to-orange-500"
                style={{ width: "60%" }}
              />
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default About;
