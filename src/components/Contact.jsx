import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import emailjs from "emailjs-com";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q0jj7re",
        "template_ajvccmo",
        e.target,
        "pkHhiz1mxXW2QzvU9"
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          Toastify({
            text: "Message is sent successfully",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"
          }).showToast();
        },
        (error) => {
          console.error("Error:", error.text);
          Toastify({
            text: "An error occurred. Please try again later.",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)"
          }).showToast();
        }
      );

    e.target.reset();
  };

  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <Reveal>
        <div className="grid md:grid-cols-2 place-items-center">
          <div>
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold mb-5">
                Contact <span>Me</span>
              </h3>
              <div className="text-justify leading-7 w-11/12 mx-auto">
                <p>Let's Connect! </p>
                <p>
                  I’m always excited to connect with new people, explore
                  opportunities, and collaborate on innovative projects. Whether
                  you have a question, a project idea, or just want to say
                  hello, feel free to reach out to me. You can contact me
                  through the form below, or drop me an email directly. I look
                  forward to hearing from you!
                </p>
              </div>
            </div>

            <div className="flex mt-10 items-center gap-7">
              <div className="bg-gray-800/40 p-4 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-purple-500 transition-transform duration-300">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  8<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>Projects</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-purple-500 transition-transform duration-300">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  1 yr<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>years of experience</span>
                </p>
              </div>

              <div className="bg-gray-800/40 p-5 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-purple-500 transition-transform duration-300">
                <h3 className="md:text-4xl text-2xl font-semibold text-white">
                  3<span>+</span>
                </h3>
                <p className="text-xs md:text-base">
                  <span>happy clients</span>
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={sendEmail}
            className="max-w-6xl p-5 md:p-12"
            id="form"
          >
            <p className="text-gray-100 font-bold text-xl mb-2">
              Let´s connect!
            </p>
            <input
              type="text"
              id="name"
              placeholder="Your Name ..."
              name="name"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email ..."
              name="email"
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="4"
              placeholder="Your Message ..."
              className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
              required
            />
            <button
              type="submit"
              className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color hover:bg-purple-700 hover:shadow-md hover:shadow-purple-500 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
