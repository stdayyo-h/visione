import { React, useState, useEffect } from "react";
import ECard from "../components/Ecard";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import { USER_PROJECTS } from "../constants/routes";
import { BASE_URL } from "../constants/urls";
import EProjects from "./EProjects";
import Navbar from "../components/Navbar";
const Employee_DashBoard = () => {
  let [employee, setEmployee] = useState(["ashwin"]);

  useEffect(() => {
    getEmployeeData().then(() => {});
  }, []);
  let getEmployeeData = async () => {
    let response = await fetch(`${BASE_URL}/employees`);
    let data = await response.json();
    setEmployee(data);

  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-row bg-white min-h-screen text-black w-full">
        <ProfileCard emp={employee[0]} />

        <div className="p-2 w-full">


          <EProjects emp={employee[0]} />
        </div>
      </div>
    </div>
  );
};

export default Employee_DashBoard;
