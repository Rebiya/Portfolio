import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import rebu1 from "./../assets/loved.png";
import { TbBrightnessUpFilled } from "react-icons/tb";
import { IoMoonSharp } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isMoon, setIsMoon] = useState(true); // State to toggle moon/star
  const [theme, setTheme] = useState("light"); // State for the theme (dark or light)

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  const toggleIcon = () => setIsMoon(!isMoon); // Toggle moon and star icon

  // Function to toggle theme between light and dark
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    } else {
      setTheme("dark");
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      const savedTheme = localStorage.getItem("theme");
      setTheme(savedTheme);
      document.body.classList.add(
        savedTheme === "dark" ? "dark-theme" : "light-theme"
      );
    } else {
      document.body.classList.add("dark-theme");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const menuVariants = {
    open: { x: 0, transition: { stiffness: 20, damping: 15 } },
    closed: { x: "-100%", transition: { stiffness: 20, damping: 15 } }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-25 backdrop-blur-md z-50">
      <div className="max-w-[1300px] mx-auto flex justify-between text-[var(--text-color)] text-xl items-center px-12 h-20 cursor-pointer">
        <div className="flex items-center gap-4">
          {isMoon ? (
            <IoMoonSharp
              size={24}
              onClick={() => {
                toggleIcon();
                toggleTheme();
              }}
            />
          ) : (
            <TbBrightnessUpFilled
              size={24}
              onClick={() => {
                toggleIcon();
                toggleTheme();
              }}
            />
          )}

          <Link
            to="home"
            smooth={true}
            offset={-70}
            duration={1000}
            onClick={closeNav}
            className="hover:text-purple-400 transition-opacity duration-300"
          >
            Rebu.M
          </Link>
        </div>

        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          {["home", "about", "portfolio", "experience", "contact"].map(
            (section) => (
              <li
                key={section}
                className="hover:text-purple-400 transition-opacity duration-300"
              >
                <Link to={section} smooth={true} offset={-70} duration={500}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            )
          )}
        </ul>

        <div
          onClick={toggleNav}
          className="md:hidden z-50 text-[var(--text-color)]"
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-[var(--bg-color)] z-40"
        >
          <ul className="font-semibold text-2xl space-y-8 mt-12 text-center">
            <li className="flex justify-center">
              <img
                src={rebu1}
                alt=""
                className="w-28 h-28 rounded-full border-4 border-[var(--text-color)] shadow-lg"
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
