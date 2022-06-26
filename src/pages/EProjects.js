import { React, useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import Requirements from "../components/Requirements";
import { BASE_URL } from "../constants/urls";
import Correct from "../assets/images/check.png";
import Ongoing from "../assets/images/ongoing.png";
import Wrong from "../assets/images/Wrong.png";
const EProjects = ({ emp }) => {
  let [employee, setEmployee] = useState(["ashwin"]);
  let [projects, setProjects] = useState(["projects"]);
  useEffect(() => {
    getEmployeeData();
    getProjectData();
  }, []);

  let getEmployeeData = async () => {
    let response = await fetch(`${BASE_URL}/employees`);
    let data = await response.json();
    setEmployee(data);

    // console.log("data",data);
  };
  let getProjectData = async () => {
    let response = await fetch(`${BASE_URL}/projects`);
    let data = await response.json();
    setProjects(data);

    // console.log("data",data);
  };
  return (
    <div className="bg-white min-h-screen flex-col w-full">
      <div>
        <h2 className="text-3xl text-white-800 font-bold underline">
          My Projects
        </h2>
      </div>
      <ProjectCard className="" pname={"Aranghu"} />
      <ProjectCard pname={"Pdus"} />
      <ProjectCard pname={"You App"} />

      {emp.current_projects !== undefined &&
        emp?.current_projects.map((proj, index) => (
          <span className="flex items-center text-xl font-bold">
            <p>
              {
                projects.filter((e) => {
                  console.log(e["id"] == proj);
                  return e["id"] == proj;
                })[0].project_name
              }
            </p>
          </span>
        ))}
    </div>
  );
};

export default EProjects;
