import React from "react";

const TestimonialCard = ({ name, quote, photo }) => {
  return (
    <div className="flex flex-col items-center justify-start w-72 p-6 border border-purple-600 rounded-lg shadow-md bg-purple-700/10 hover:shadow-purple-300 hover:shadow-md hover:border-purple-300 transition duration-300">
      <div className="mb-4">
        <img
          src={photo}
          alt={name}
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
      </div>
      <h2 className="text-[var(--text-color)] text-lg font-semibold mb-2">
        {name}
      </h2>
      <p className="text-[var(--text-color)] text-sm italic">{`"${quote}"`}</p>
    </div>
  );
};

export default TestimonialCard;
