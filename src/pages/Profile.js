import {React,useState,useEffect} from "react";
import { BASE_URL } from "../constants/urls";

const Profile = ({emp}) => {
  const [skill1,setSkill1]=useState(['a']);
  
  
useEffect(() => {
   getSkills()
 
},[])
async function getSkills()
{
     const response = await fetch(
        `${BASE_URL}/skills`,
        

      );
      const resp = await response.json();
      // console.log(resp)
      setSkill1(resp)
      

}
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 drop-shadow-xl min-h-full">
    <div className="flex  p-2 m-2 text-black">
      <div className="">
        <h6 className="text-2xl font-bold underlined ">My Experiance Level</h6>
        <hr className="h-1 rounded-sm bg-black"></hr>
        <div className="flex items-center flex-col">

      {emp.skills!==undefined && 
      emp?.skills.map((skill,index)=>(
        <span className="flex items-center text-xl font-bold">
        <p>{skill1.filter((e)=>{
      console.log(e['id']==skill);
      return e['id']==skill;
     
   })[0].skill_name}</p>
        
      </span>
           
          ))}
        

        
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
