import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "Addis Ababa University Learning Projects",
    period: "2022 - Present",
    description: "Human Resource and Student Management System."
  },
  {
    company: "Evangadi Bootcamp Learning Projects",
    period: "Present",
    description:
      "Amazon and Netflix Clone, Evangadi Forum, Abe Garage Business model full Stack applications."
  },
  {
    company: "Broker Company as FreeLancer",
    period: "2025",
    description: "House and Car Rental and Sale static website."
  },
  {
    company: "Construction Company as FreeLancer",
    period: "2025",
    description: "Human Resource Management Full-Stack website."
  },
  {
    company: "MiniMarket app as FreeLancer",
    period: "2025",
    description: "Description of the mini market and goods Static website."
  }
];

const Experience = () => {
  return (
    <div className="p-8 max-w-[380px] md:max-w-[900px] mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-16"
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="border border-purple-600 p-6 cursor-pointer rounded-lg shadow-md bg-purple-700/10 flex flex-col items-start justify-between hover:shadow-purple-50 hover:shadow-xl hover:border-purple-300 transition duration-300 "
              style={{
                height: "200px",
                minWidth: "250px"
              }}
            >
              <h2 className="text-gray-100 sm:text-sm md:text-lg font-semibold mb-2">
                {experience.company}
              </h2>
              <p className="text-gray-300 text-sm mb-4">{experience.period}</p>
              <p className="text-gray-400 text-base pb-20">
                {experience.description}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
