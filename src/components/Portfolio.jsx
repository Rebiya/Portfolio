import React from "react";
import project1 from "../assets/NetflixLogo.png";
import project2 from "../assets/amazon.png";
import project4 from "../assets/evangadi1.jpg";
import project5 from "../assets/garage.jpeg";
import project6 from "../assets/images.jpeg";
import project7 from "../assets/kid.avif"
import project8 from "../assets/businessL.jpeg";
import { AiFillGithub, AiOutlineGithub, AiOutlineYoutube } from "react-icons/ai";
import Reveal from "./Reveal";

const projects = [
  {
    img: project1,
    title: "Project #1",
    description: "Netflix-Clone fullStack development using React.js",
    links: {
      site: "https://rebiya.github.io/NetflixClone/",
      github: "https://rebiya.github.io/NetflixClone",
      utube:"https://youtu.be/tY4ULnryZ8o"
    }
  },
  {
    img: project2,
    title: "Project #2",
    description:
      "A fullstack application Amazon-Clone built with React.js and Firebase.",
    links: {
      site: "https://rebu-amazon.netlify.app/",
      github: "https://github.com/Rebiya/Amazon-Clone",
      utube:"https://youtu.be/rfYiQ77jWIY"
    }
  },
  {
    img: project4,
    title: "Project #3",
    description: "evangadi Question and answer platform using React and Mysql",
    links: {
      site: "https://rebiyaevangadi.netlify.app/",
      github: "https://github.com/Rebiya/Frontend-EvangadiForum",
      utube:""
    }
  },
  {
    img: project5,
    title: "Project #4",
    description:
      "A mobile-friendly business web application using React and Mysql.",
    links: {
      site: "https://mygaragehub.onrender.com/",
      github: "https://github.com/Rebiya/Garage.git",
      utube:"https://youtu.be/odORMB_daIk"
    }
  },
  {
    img: project6,
    title: "Project #5",
    description:
      "A Real Estate full-stack web app using react.js, calendly and Node.js.",
    links: {
      site: "https://realestate-rebu.netlify.app/",
      github: "https://github.com/Rebiya/Real-Estate.git",
      utube:"https://youtu.be/UuRmdEgsE14"
    }
  },
    {
    img: project7,
    title: "Project #6",
    description:
      "A kids-accessories app to suggest fresh mothers which product is better,react.js,node.js,mysql,stripe,MistralAI.",
    links: {
      site: "https://kids-accessories-ecommerce-5.onrender.com/",
      github: "https://github.com/Rebiya/kids-accessories-Ecommerce.git",
      utube:"https://youtu.be/Y3R7-EHfLJ8"
    }
  },
   {
    img: project8,
    title: "Project #7",
    description:
      " business license is a required step for operating a commercial enterprise,built with typescript,react.js,node.js,mysql.",
    links: {
      site: "https://csbusinesslicensing.netlify.app/",
      github: "https://github.com/Rebiya/customerService.git",
      utube:"https://youtu.be/YwpkcgIzUrE"
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
                  <AiOutlineGithub size={30}/>
                </a>
                  <a
                  href={project.links.utube}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300"
                >
                  <AiOutlineYoutube size={30} />
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
