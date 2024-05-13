
// import React, { useState } from "react";
// import Logo from "../../assets/Logo.png";
// import AnchorLink from 'react-anchor-link-smooth-scroll'

// function Navbar() {
//   const [showMenu, setShowMenu] = useState(false);
//   const [menu, setMenu] = useState("home");
  

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   const handleMenuClick = (menuItem) => {
//     setMenu(menuItem);
   
//   }
  

//   return (
//     <div className="flex items-center justify-between shadow-md relative">
//       <img className="mx-auto my-2 " src={Logo} alt="Logo" style={{ width: "115px" }} />
//       <div className="md:hidden" onClick={toggleMenu}>
//         <svg
//           className="w-6 h-6 cursor-pointer"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//         </svg>
//       </div>

//       <ul className={`nav-menu md:flex ${showMenu ? "block" : "hidden"} items-center md:items-stretch md:flex-rows`}>
       
//         <li id="home" className={`px-4 py-2 duration-200 font-extrabold cursor-pointer flex flex-col gap-1 ${menu === "home" ? "text-gray-500" : "text-white"}`}onClick={() => handleMenuClick("home")} >
//           <AnchorLink className="anchor-link "  href="#Home">
//           <p >Home</p></AnchorLink>
         
//         </li>
//         <li id="about" className={`px-4 py-2 duration-200 font-extrabold cursor-pointer flex flex-col gap-1 ${menu === "about" ? "text-gray-500" : "text-white"}`} onClick={() => handleMenuClick("about")} >
//         <AnchorLink className="anchor-link" offset={50} href="#About">
//           <p >About Me</p></AnchorLink>
          
//         </li>
//         <li id="projects" className={`px-4 py-2 duration-200 font-extrabold cursor-pointer flex flex-col gap-1 ${menu === "projects" ? "text-gray-500" : "text-white"}`} onClick={() => handleMenuClick("projects")} >
//           <AnchorLink className="anchor-link" offset={50} href="#Projects">
//           <p >Projects</p></AnchorLink>
          
//         </li>
//         <li id="contact" className={`px-4 py-2 duration-200 font-extrabold cursor-pointer flex flex-col gap-1 ${menu === "contact" ? "text-gray-500" : "text-white"}`} onClick={() => handleMenuClick("contact")} >
//           <AnchorLink className="anchor-link" offset={50} href="#Contact">
//           <p >Contact</p></AnchorLink>
          
//         </li>
//       </ul>

//       <div className={`md:flex ${showMenu ? "block" : "hidden"} items-center md:items-stretch md:flex-rows mx-auto my-2 px-5 py-3 rounded-full bg-gradient-to-tr from-purple-600 to-orange-500 text-white cursor-pointer font-extrabold transition duration-300 transform hover:scale-105`}>
//         <AnchorLink className="anchor-link" offset={50} href="#Contact">
//         Connect With Me</AnchorLink>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [menu, setMenu] = useState("home");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  }

  return (
    <div className="flex items-center justify-between shadow-md relative">
      <img className="mx-auto my-2 " src={Logo} alt="Logo" style={{ width: "115px" }} />
      <div className="md:hidden" onClick={toggleMenu}>
        <svg
          className="w-6 h-6 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </div>

      <ul className={`nav-menu md:flex ${showMenu ? "block" : "hidden"} items-center md:items-stretch md:flex-rows`}>
        <li id="home" className={`px-4 py-2 duration-200 font-extrabold cursor-pointer flex flex-col gap-1 ${menu === "home" ? "text-orange-500 underline" : "text-white"}`} onClick={() => handleMenuClick("home")} >
          <AnchorLink className="anchor-link " href="#Home">
            <p >Home</p>
          </AnchorLink>
        </li>
        <li id="about" className={`px-4 py-2 duration-200 font-extrabold cursor-pointer flex flex-col gap-1 ${menu === "about" ? "text-orange-500 underline" : "text-white"}`} onClick={() => handleMenuClick("about")} >
          <AnchorLink className="anchor-link" offset={50} href="#About">
            <p >About Me</p>
          </AnchorLink>
        </li>
        <li id="projects" className={`px-4 py-2 duration-200 font-extrabold cursor-pointer flex flex-col gap-1 ${menu === "projects" ? "text-orange-500 underline" : "text-white"}`} onClick={() => handleMenuClick("projects")} >
          <AnchorLink className="anchor-link" offset={50} href="#Projects">
            <p >Projects</p>
          </AnchorLink>
        </li>
        <li id="contact" className={`px-4 py-2 duration-200 font-extrabold cursor-pointer flex flex-col gap-1 ${menu === "contact" ? "text-orange-500 underline" : "text-white"}`} onClick={() => handleMenuClick("contact")} >
          <AnchorLink className="anchor-link" offset={50} href="#Contact">
            <p >Contact</p>
          </AnchorLink>
        </li>
      </ul>

      <div className={`md:flex ${showMenu ? "block" : "hidden"} items-center md:items-stretch md:flex-rows mx-auto my-2 px-5 py-3 rounded-full bg-gradient-to-tr from-purple-600 to-orange-500 text-white cursor-pointer font-extrabold transition duration-300 transform hover:scale-105`}>
        <AnchorLink className="anchor-link" offset={50} href="#Contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
