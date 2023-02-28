import React from "react";
import { SkillsObject } from "../types";

const Skills = (props: any) => {
  const skills: SkillsObject = props.skills;

  return (
    <article className="" id="skills">
      <div className="flex flex-wrap">
        <div className="block w-full">
          <h2>My Skills</h2>
        </div>
        <div className="flex flex-wrap mx-auto">
          <div className=" md:w-1/4 border border-gray-300 shadow-lg shadow-black rounded-lg w-full p-4 grow m-6">
            <h3 className="text-center font-bold text-xl">Languages</h3>
            <ul className="">
              {skills.languages.map((skill) => (
                <li key={skill.name} className="flex">
                  <i className={`${skill.icon} p-2`}></i>
                  <p className="p-2">{skill.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className=" md:w-1/4 border border-gray-300 shadow-lg shadow-black rounded-lg w-full p-4 grow m-6">
            <h3 className="text-center font-bold text-xl">Front End</h3>
            <ul className="">
              {skills.frontend.map((skill) => (
                <li key={skill.name} className="flex">
                  <i className={`${skill.icon} p-2`}></i>
                  <p className="p-2">{skill.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className=" md:w-1/4 border border-gray-300 shadow-lg shadow-black rounded-lg w-full p-4 grow m-6">
            <h3 className="text-center font-bold text-xl">Back End</h3>
            <ul className="">
              {skills.backend.map((skill) => (
                <li key={skill.name} className="flex">
                  <i className={`${skill.icon} p-2`}></i>
                  <p className="p-2">{skill.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className=" md:w-1/4 border border-gray-300 shadow-lg shadow-black rounded-lg w-full p-4 grow m-6">
            <h3 className="text-center font-bold text-xl">Frameworks</h3>
            <ul className="">
              {skills.frameworks.map((skill) => (
                <li key={skill.name} className="flex">
                  <i className={`${skill.icon} p-2`}></i>
                  <p className="p-2">{skill.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className=" md:w-1/4 border border-gray-300 shadow-lg shadow-black rounded-lg w-full p-4 grow m-6">
            <h3 className="text-center font-bold text-xl">Database</h3>
            <ul className="">
              {skills.database.map((skill) => (
                <li key={skill.name} className="flex">
                  <i className={`${skill.icon} p-2`}></i>
                  <p className="p-2">{skill.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className=" md:w-1/4 border border-gray-300 shadow-lg shadow-black rounded-lg w-full p-4 grow m-6">
            <h3 className="text-center font-bold text-xl">Tools</h3>
            <ul className="">
              {skills.tools.map((skill) => (
                <li key={skill.name} className="flex">
                  <i className={`${skill.icon} p-2`}></i>
                  <p className="p-2">{skill.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Skills;
