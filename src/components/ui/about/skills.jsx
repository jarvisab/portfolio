"use client";

import { skillList } from "@/data";

export default function Skills() {
  function changeBackground(e, color) {
    e.currentTarget.style.background = color;
  }

  function resetBackground(e) {
    e.currentTarget.style.background = 'transparent';
  }

  return (
    <div className="py-3 sm:mx-3 lg:mx-0">
      <h2 className="title">Tech I Have Made Use Of</h2>
      <div className="grid grid-cols-5 gap-3 my-5 text-slate-700 ">
        {skillList.map((skill, index) => {
          return (
            <div
              key={index}
              className="skills-icon flex max-md:flex-col max-md:justify-center max-md:items-center"
              onMouseOver={(e) => changeBackground(e, `#${skill.color}`)}
              onMouseOut={resetBackground}
            >
              <skill.icon className="max-md:pt-1" />
              <div className="text-sm md:ms-2 max-md:text-[10px] max-md:block">
                {skill.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
