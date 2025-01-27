import React from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import ShinyEffect from "./ShinyEffect";

const skills = [
  { title: "HTML5", proficiency: 90 },
  { title: "CSS3", proficiency: 85 },
  { title: "JavaScript", proficiency: 80 },
  { title: "React", proficiency: 75 },
  { title: "Node.js", proficiency: 70 },
  { title: "Tailwind CSS", proficiency: 80 },
  { title: "Bootstrap", proficiency: 70 },
  { title: "MySQL", proficiency: 80 }
];

const About = () => {
  return (
    <div className="mt-16 mb-16 w-full mx-auto relative bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[var(--text-color)] bg-opacity-0 backdrop-blur-sm p-6"
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 mt-12"
      >
        <h2 className="text-3xl font-bold text-[var(--text-color)] mb-4 w-full text-center">
          Tech Stack
        </h2>
        <br />
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            proficiency={skill.proficiency}
          />
        ))}
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default About;
