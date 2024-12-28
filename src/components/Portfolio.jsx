import React from "react";
import project1 from "../assets/NetflixLogo.png";
import project2 from "../assets/amazon.png";
import project4 from "../assets/evangadi1.jpg";
import project5 from "../assets/garage.jpeg";
import project6 from "../assets/images.jpeg";
import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: project1,
    title: "Project #1",
    description: "Netflix-Clone fullStack development using React.js",
    links: {
      site: "https://rebiya.github.io/NetflixClone/",
      github: "https://rebiya.github.io/NetflixClone"
    }
  },
  {
    img: project2,
    title: "Project #2",
    description:
      "A fullstack application Amazon-Clone built with React.js and Firebase.",
    links: {
      site: "https://rebu-amazon.netlify.app/",
      github: "https://github.com/Rebiya/Amazon-Clone"
    }
  },
  {
    img: project4,
    title: "Project #3",
    description: "evangadi Question and answer platform using React and Mysql",
    links: {
      site: "#",
      github: "#"
    }
  },
  {
    img: project5,
    title: "Project #4",
    description:
      "A mobile-friendly business web application using React and Mysql.",
    links: {
      site: "https://github.com/Rebiya/Garage.git",
      github: "https://github.com/Rebiya/Garage.git"
    }
  },
  {
    img: project6,
    title: "Project #5",
    description:
      "A Real Estate full-stack web app using react.js, calendly and ASP.NET.",
    links: {
      site: "https://github.com/Rebiya/Real-Estate.git",
      github: "https://github.com/Rebiya/Real-Estate.git"
    }
  }
];

const Portfolio = () => {
  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal>
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.site}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Portfolio;
