import React, { useEffect, useState } from "react";

const SkillCard = ({ title, proficiency }) => {
  const [skillLevel, setSkillLevel] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = proficiency;
    if (start < end) {
      const interval = setInterval(() => {
        start += 1;
        setSkillLevel(start);
        if (start === end) {
          clearInterval(interval);
        }
      }, 20); // Smooth animation interval
    }
  }, [proficiency]);

  return (
    <div className="flex items-center w-full gap-4 p-2">
      {/* Skill Name */}
      <h3 className="text-sm font-semibold text-[var(--text-color)]">
        {title}
      </h3>

      {/* Progress Bar */}
      <div className="flex-1 h-3 bg-gray-300 rounded-full">
        <div
          className="h-3 bg-purple-500 rounded-full"
          style={{ width: `${skillLevel}%` }}
        ></div>
      </div>

      {/* Skill Percentage */}
      <p className="text-sm text-[var(--text-color)]">{skillLevel}%</p>
    </div>
  );
};

export default SkillCard;
