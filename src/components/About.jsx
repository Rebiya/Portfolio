import React from "react";
import { motion } from "framer-motion";
import ShinyEffect from "./ShinyEffect";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiMysql
} from "react-icons/di";
import { FaBootstrap, FaNodeJs, FaAws } from "react-icons/fa";
import {
  SiCplusplus,
  SiDotnet,
  SiExpress,
  SiTailwindcss,
  SiJquery,
  SiMongodb
} from "react-icons/si";

const About = () => {
  return (
    <div
      className="mt-16 mb-16 w-full mx-auto relative"
      style={{ backgroundColor: "transparent" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-gray-200 bg-opacity-0 backdrop-blur-sm p-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400 text-center">
          About Me
        </h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-xl mb-6 text-center"
        >
          My name is{" "}
          <span className="font-bold text-purple-500">Rebiya Musema</span>, a
          21-year-old third-year Information System student at AAU. With a deep
          passion for technology, I specialize in web development and artificial
          intelligence. My academic journey and hands-on projects have equipped
          me with a robust understanding of cutting-edge tech, driving my
          enthusiasm to innovate and excel in the ever-evolving digital
          landscape.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg md:text-xl mb-6 text-center"
        >
          <strong>Information System Analyst & Web Developer:</strong> I enjoy
          optimizing system workflows, developing robust back-end solutions, and
          enhancing user interfaces to ensure seamless functionality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="grid grid-cols-2 gap-2 text-center"
        >
          <div>
            <p>
              <strong>Birthday:</strong> 05 Oct 2003
            </p>
            <p>
              <strong>City:</strong> Addis Ababa, Ethiopia
            </p>
            <p>
              <strong>Freelance:</strong> Available
            </p>
          </div>
          <div>
            <p>
              <strong>Phone:</strong> +251 993044432
            </p>
            <p>
              <strong>Email:</strong> rebum.19@gmail.com
            </p>
            <p>
              <strong>Age:</strong> 21
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-wrap  items-center gap-5 mx-16 mt-12 py-8 text-6xl"
      >
        <h2 className="text-3xl font-bold text-gray-300 mb-4 w-full text-center">
          Tech Stack
        </h2>
        <DiHtml5 className="text-orange-600" />
        <DiCss3 className="text-blue-600" />
        <DiJavascript1 className="text-yellow-500" />
        <DiReact className="text-blue-500" />
        <FaNodeJs className="text-green-500" />
        <SiCplusplus className="text-blue-800" />
        <SiDotnet className="text-purple-500" />
        <SiExpress className="text-gray-400" />
        <SiTailwindcss className="text-teal-400" />
        <FaBootstrap className="text-purple-600" />
        <SiJquery className="text-blue-700" />
        <DiMysql className="text-orange-600" />
        <SiMongodb className="text-green-600" />
        <FaAws className="text-orange-400" />
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default About;
