import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import rebu1 from "./../assets/loved.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  const menuVariants = {
    open: { x: 0, transition: { stiffness: 20, damping: 15 } },
    closed: { x: "-100%", transition: { stiffness: 20, damping: 15 } }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-25 backdrop-blur-md z-50">
      <div className="max-w-[1300px] mx-auto flex justify-between text-gray-200 text-xl items-center px-12 h-20 cursor-pointer">
        <Link
          to="home"
          smooth={true}
          offset={-70}
          duration={500}
          onClick={closeNav}
        >
          Rebu.M
        </Link>

        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          {["home", "about", "portfolio", "experience", "contact"].map(
            (section) => (
              <li key={section}>
                <Link to={section} smooth={true} offset={-70} duration={500}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            )
          )}
        </ul>

        <div onClick={toggleNav} className="md:hidden z-50 text-gray-200">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-[#190B1F] z-40"
        >
          <ul className="font-semibold text-2xl space-y-8 mt-12 text-center">
            <li className="flex justify-center">
              <img
                src={rebu1}
                alt=""
                className="w-28 h-28 rounded-full border-4 border-gray-200 shadow-lg"
              />
            </li>
            {["home", "about", "portfolio", "experience", "contact"].map(
              (section) => (
                <li key={section}>
                  <Link
                    to={section}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={closeNav}
                    className="hover:text-purple-400 transition duration-300"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
