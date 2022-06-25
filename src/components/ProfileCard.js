import {React,useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { PROFILE } from '../constants/routes'
import { BASE_URL } from '../constants/urls'
import Profile from '../pages/Profile'

const ProfileCard = ({emp}) => {
  const [skill1,setSkill1]=useState(['a']);
  
  
useEffect(() => {
   getSkills();
 
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
  // console.log(emp);
  // console.log(skill1);
  return (
<div className='flex flex-col'>
<div class="card w-96 bg-white rounded-none shadow-xl text-black ">
    <figure><img src={emp.emp_image} alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title text-black">{emp.employee_name}</h2>
      <p>
      <div class="badge bg-white m-2 h-7 w-40font-bold text-black">django</div>  
      <div class="badge bg-white m-2 h-7 w-40font-bold text-black">mongodb</div>  
      </p>
      
    </div>
    <Profile emp={emp}/>
  </div>
</div>
    
    
  )
}

export default ProfileCard