import { React, useState, useEffect } from "react";
import ECard from "../components/Ecard";
import { Link } from "react-router-dom";
import ProfileCard from "../components/ProfileCard";
import { USER_PROJECTS } from "../constants/routes";
import { BASE_URL } from "../constants/urls";
import Navbar from "../components/Navbar";
import Projstat from "../components/Projstat";
import axios from "axios";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import SkillBox from "../components/skillBox";
import EmployeeCard from "../components/EmployeeCard";
import {
  ChatBubbleOutline,
  FolderSharedOutlined,
  TaskAltOutlined,
} from "@mui/icons-material";
const Manager_DashBoard = () => {
  let [projects, setProjects] = useState([]);
  let [skills, setSkills] = useState([]);
  let [recEmployees, setRecEmployees] = useState([]);
  let [selectedSkills, setSelectedSkills] = useState([]);
  const [skillsArray, setSkillsArray] = useState([]);
  const [employeeArray, setEmployeeArray] = useState([]);
  const [currentJob, setCurrentJob] = useState("job");

  // let

  useEffect(() => {
    getProjects().then(() => {
      console.log("Fetched the project");
    });
    getSkills().then(() => {
      console.log("Fetched the Skills");
    });
  }, []);

  let ButtonClicked = () => {
    console.log("Button Array");
    let currentSkill = "";
    for (let i in skillsArray) {
      if (skillsArray[i]) {
        currentSkill = currentSkill + "," + skills[i];
      }
    }
    // console.log(currentSkill);
    // console.log(currentSkill.slice(1));
    postData(currentSkill.slice(1));
  };

  let getProjects = async () => {
    let response = await fetch(`${BASE_URL}/employees`);
    let data = await response.json();

    setProjects(data);
  };
  let sendMail = (name, email, job) => {
    axios
      .post(`${BASE_URL}/mail`, {
        name: name,
        job: job,
        email: email,
      })
      .then((resp) => {
        console.log(resp);
      });
  };
  let getSkills = async () => {
    let response = await fetch(`${BASE_URL}/skills`);
    let data = await response.json();
    let unique_skills = [];
    for (let i in data) {
      // console.log(data[i].skill_name);

      if (
        !unique_skills.includes(
          data[i].skill_name.split("-")[0] +
            "-" +
            data[i].skill_name.split("-")[1]
        )
      ) {
        unique_skills.push(
          data[i].skill_name.split("-")[0] +
            "-" +
            data[i].skill_name.split("-")[1]
        );
      }
    }

    setSkills(unique_skills);
  };

  let postData = (skills) => {
    axios
      .post(`${BASE_URL}/recommended`, { skills: skills })
      .then((response) => {
        console.log("POsted data");
        setEmployeeArray(response.data);
      });
  };

  const [show, setShow] = useState(false);
  const projdetails = [
    {
      name: "Hestia Web",
      stat: "50",
      img: "https://www.hestiatkmce.live/static/media/logo.da1a1da7d7df7bea4b14.png",
    },
    {
      name: "Pdus",
      stat: "90",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3x-g47lwJQOXPWNXgpGLh9_RjadAIWc2TQleMnrmSr8YrjmTtprLiafFGDNaKBYQV0g&usqp=CAU",
    },
    {
      name: "Arangu",
      stat: "70",
      img: "https://miro.medium.com/max/1400/1*BK9EPE5SkaC9Nt3P-qsXjw.jpeg",
    },
  ];
  return (
    <div className="fixed bg-white w-screen">
      <Navbar />
      <div className="flex flex-row h-screen">
        {/* Sidebar starts */}
        {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
        <div className="w-1/4 absolute sm:relative shadow md:h-full flex-col justify-between hidden sm:flex bg-slate-100">
          <div className="px-8">
            <div className="h-16 w-full flex items-center"></div>
            <ul className="mt-12">
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-grid"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={4} y={4} width={6} height={6} rx={1} />
                    <rect x={14} y={4} width={6} height={6} rx={1} />
                    <rect x={4} y={14} width={6} height={6} rx={1} />
                    <rect x={14} y={14} width={6} height={6} rx={1} />
                  </svg>
                  <span className="text-sm  ml-2">Dashboard</span>
                </div>
                <div className="py-1 px-3 rounded text-gray-500 flex items-center justify-center text-xs">
                  5
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <TaskAltOutlined />
                  <span className="text-sm  ml-2">Task List</span>
                </div>
                <div className="py-1 px-3 rounded text-gray-500 flex items-center justify-center text-xs">
                  8
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <CalendarTodayOutlinedIcon />

                  <span className="text-sm  ml-2">Schedule</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <FolderSharedOutlined />
                  <span className="text-sm  ml-2">Collabration</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <ChatBubbleOutline />
                  <span className="text-sm  ml-2">Communication</span>
                </div>
                <div className="py-1 px-3 rounded text-gray-500 flex items-center justify-center text-xs">
                  25
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-stack"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                    <polyline points="4 12 12 16 20 12" />
                    <polyline points="4 16 12 20 20 16" />
                  </svg>
                  <span className="text-sm  ml-2">File Sharing</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-settings"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  <span className="text-sm  ml-2">Settings</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="px-8">
            <ul className="w-full flex items-center justify-between">
              <li className="cursor-pointer text-white pt-5 pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-bell"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
              </li>
              <li className="cursor-pointer text-white pt-5 pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-messages"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                  <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                </svg>
              </li>
              <li className="cursor-pointer text-white pt-5 pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-settings"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
              </li>
              <li className="cursor-pointer text-white pt-5 pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-archive"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={3} y={4} width={18} height={4} rx={2} />
                  <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                  <line x1={10} y1={12} x2={14} y2={12} />
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="w-64 z-40 absolute shadow md:h-full flex-col justify-between sm:hidden  transition duration-150 ease-in-out"
          id="mobile-nav"
        >
          <div
            className="h-10 w-10 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
            id="mobile-toggler"
            onclick="sidebarHandler()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-adjustments"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFFFFF"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx={6} cy={10} r={2} />
              <line x1={6} y1={4} x2={6} y2={8} />
              <line x1={6} y1={12} x2={6} y2={20} />
              <circle cx={12} cy={16} r={2} />
              <line x1={12} y1={4} x2={12} y2={14} />
              <line x1={12} y1={18} x2={12} y2={20} />
              <circle cx={18} cy={7} r={2} />
              <line x1={18} y1={4} x2={18} y2={5} />
              <line x1={18} y1={9} x2={18} y2={20} />
            </svg>
          </div>
          <div className="px-8">
            <div className="h-16 w-full flex items-center"></div>
            <ul className="mt-12">
              <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-grid"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <rect x={4} y={4} width={6} height={6} rx={1} />
                    <rect x={14} y={4} width={6} height={6} rx={1} />
                    <rect x={4} y={14} width={6} height={6} rx={1} />
                    <rect x={14} y={14} width={6} height={6} rx={1} />
                  </svg>
                  <span className="text-sm ml-2 text-gray-800">Dashboard</span>
                </div>
                <div className="py-1 px-3 rounded text-gray-500 flex items-center justify-center text-xs">
                  5
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-puzzle"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                  </svg>
                  <span className="text-sm  ml-2">Products</span>
                </div>
                <div className="py-1 px-3 rounded text-gray-500 flex items-center justify-center text-xs">
                  8
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-compass"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="8 16 10 10 16 8 14 14 8 16" />
                    <circle cx={12} cy={12} r={9} />
                  </svg>
                  <span className="text-sm  ml-2">Performance</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-code"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="7 8 3 12 7 16" />
                    <polyline points="17 8 21 12 17 16" />
                    <line x1={14} y1={4} x2={10} y2={20} />
                  </svg>
                  <span className="text-sm  ml-2">Deliverables</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-puzzle"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                  </svg>
                  <span className="text-sm  ml-2">Invoices</span>
                </div>
                <div className="py-1 px-3 rounded text-gray-500 flex items-center justify-center text-xs">
                  25
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-stack"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                    <polyline points="4 12 12 16 20 12" />
                    <polyline points="4 16 12 20 20 16" />
                  </svg>
                  <span className="text-sm  ml-2">Inventory</span>
                </div>
              </li>
              <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-settings"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  <span className="text-sm  ml-2">Settings</span>
                </div>
              </li>
            </ul>
            <div className="flex justify-center mt-48 mb-4 w-full">
              <div className="relative ">
                <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-search"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={10} cy={10} r={7} />
                    <line x1={21} y1={21} x2={15} y2={15} />
                  </svg>
                </div>
                <input
                  className=" focus:outline-none rounded w-full text-sm text-gray-500 pl-10 py-2"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div className="px-8">
            <ul className="w-full flex items-center justify-between">
              <li className="cursor-pointer text-white pt-5 pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-bell"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
              </li>
              <li className="cursor-pointer text-white pt-5 pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-messages"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                  <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                </svg>
              </li>
              <li className="cursor-pointer text-white pt-5 pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-settings"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <circle cx={12} cy={12} r={3} />
                </svg>
              </li>
              <li className="cursor-pointer text-white pt-5 pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-archive"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={3} y={4} width={18} height={4} rx={2} />
                  <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                  <line x1={10} y1={12} x2={14} y2={12} />
                </svg>
              </li>
            </ul>
          </div>
        </div>
        {/* Sidebar ends */}

        <div className="container mx-auto md:w-4/5 w-3/4 px-6 overflow-y-auto ">
          <div className="w-full h-full rounded ">
            <div className=" mb-16"></div>
            <div className="text-gray-700 font-bold">Current Projects</div>
            <div class="flex flex-row">
              {projdetails !== undefined &&
                projdetails?.map((content, index) => (
                  <div key={index}>
                    <Projstat
                      name={content.name}
                      stat={content.stat}
                      img={content.img}
                    />
                  </div>
                ))}
            </div>
            <div className="w-full justify-center my-12">
              <div className=" top-40 bg-white shadow rounded py-12 lg:px-28 px-8 border">
                <p className="md:text-3xl text-xl font-bold text-center text-gray-700">
                  Add project
                </p>
                <div className="md:flex items-center mt-12">
                  <div className="md:w-72 flex flex-col">
                    <label className="text-base font-semibold leading-none text-gray-800">
                      Project Name
                    </label>
                    <input
                      tabIndex={0}
                      type="name"
                      className="text-base leading-none text-gray-900 p-3 focus:oultine-none mt-4 border rounded border-gray-200"
                      value={currentJob}
                      onChange={(e) => {
                        setCurrentJob(e.target.value);
                      }}
                    />
                  </div>
                  <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                    <label className="text-base font-semibold leading-none text-gray-800">
                      Project Description
                    </label>
                    <input
                      tabIndex={0}
                      type="name"
                      className="text-base leading-none text-gray-900 p-3 focus:oultine-none mt-4 border rounded border-gray-200"
                    />
                  </div>
                </div>
                <div class="containner px-20 my-20 mx-auto">
                  <div class="flex flex-row ">
                    {skills.map((e, index) => {
                      return (
                        <SkillBox
                          skill_name={e}
                          setSkillsArray={setSkillsArray}
                          index={index}
                        ></SkillBox>
                      );
                    })}
                  </div>
                  <div className="flex flex-col h-100 w-full justify-center ">
                    <button className="btn m-2" onClick={ButtonClicked}>
                      Get Employees
                    </button>
                    {employeeArray.map((e) => {
                      console.log(e);
                      return (
                        <div className="flex flex-col justify-center">
                          <EmployeeCard className="p-2" e={e}></EmployeeCard>
                          <button
                            className="bg-indigo-700 rounded-lg p-2 m-2"
                            onClick={() => {
                              sendMail(e.employee_name, e.email, currentJob);
                            }}
                          >
                            Confirm
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager_DashBoard;
