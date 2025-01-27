import React from "react";
import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12">
      <div className="space-y-4">
        <h3 className="text-2xl text-[var(--text-color)] font-semibold">
          Rebu
        </h3>
        <div className="flex flex-row gap-6 text-[var(--text-color)] text-4xl">
          <a href="https://github.com/Rebiya">
            <FaGithubSquare />
          </a>
          <a href="https://www.instagram.com/rebiya/">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/rebiya-musema-4678582a4/">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <p className="text-[var(--text-color)]">
        © 2024 Rebu. All Rights Reserved. <br />
        Created by Rebiya Musema
      </p>
    </div>
  );
};

export default Footer;
