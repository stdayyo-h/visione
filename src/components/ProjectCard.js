import React from 'react'
import Requirements from './Requirements'

import Correct from '../assets/images/check.png'
import Ongoing from '../assets/images/ongoing.png'
import Wrong from '../assets/images/Wrong.png'
const ProjectCard = ({index,pname}) => {
  return (
    <div className='card w-full bg-white shadow-xl m-2 p-2'>
<div className='flex flex-row text-4xl'>
        {pname}
        </div>  

      <div className='flex flex-row justify-evenly w-full text-xl'>
        <div>NOT STARTED</div>
        <div>ON GOING</div>
        <div>COMPLETED</div>
        
        </div>
        <div className='flex flex-row justify-evenly w-full text-xl '>
        <div><Requirements name={"API Integration"} status={Wrong}/></div>
        <div><Requirements name={"MongoDb Database setup"} status={Ongoing}/></div>
        <div><Requirements name={"Redis Integration"} status={Correct}/></div>
        
        </div>
      
    </div>
  )
}

export default ProjectCard