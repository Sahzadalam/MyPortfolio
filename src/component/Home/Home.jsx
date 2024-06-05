import React, { useState, useEffect } from "react";
import Profile_img from "../../assets/Profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Home() {
  const [typedText, setTypedText] = useState("");
  const textToType = "I'm Sahzad Alam,";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = 100; // milliseconds
    const typingSpeed = 200;
    const typingTimer = setTimeout(function type() {
      if (currentIndex < textToType.length) {
        setTypedText(textToType.substring(0, currentIndex + 1));
        currentIndex++;
        setTimeout(type, typingSpeed);
      }
    }, typingInterval);
    return () => clearTimeout(typingTimer);
  }, [textToType]);

  return (
    <div
      id="Home"
      className="flex flex-col items-center gap-7 md:gap-10 lg:gap-14"
    >
      <div className="img h-48 w-48 md:h-56 md:w-56 rounded-full overflow-hidden mt-20 md:mt-32">
        <img
          src={Profile_img}
          alt="Your Image"
          className="object-cover h-full w-full"
        />
      </div>
      <h1 className="text-3xl md:text-5xl leading-relaxed text-center md:w-10/12 lg:w-9/12 pt-3">
        <span className="font-bold bg-gradient-to-tr from-purple-600 to-orange-500 text-transparent bg-clip-text">
          {typedText}
        </span>{" "}
        Full Stack Developer (MERN).
      </h1>
      <p className="mb-4 md:mb-6 text-lg md:text-2xl text-center leading-8 md:leading-10">
        I am a Full stack develoer from Hyderabad, India with total of 3 years
        10 months experince.
      </p>
      <div className="hero-action flex flex-col md:flex-row items-center text-lg md:text-xl mb-6 md:mb-8 gap-7 md:gap-10">
        <div className="md:flex items-center md:items-stretch md:flex-rows mx-auto my-2  bg-gradient-to-r from-purple-600  to-orange-500 hover:to-blue-500 py-3 px-6 rounded-2xl shadow-xl text-white cursor-pointer font-extrabold transition duration-300 transform hover:scale-105">
          <AnchorLink className="anchor-link" offset={50} href="#Contact">
            Connect With Me
          </AnchorLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
