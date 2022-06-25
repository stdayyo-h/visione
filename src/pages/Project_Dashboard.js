import React from 'react'
import PTable from '../components/PTable'

const Project_Dashboard = ({name}) => {
  return (
    <div className='flex flex-col w-full bg-white text-black p-2 justify-evenly min-h-screen'>
      <heading className="text-4xl stroke-current">Project Dashboard</heading>
<div className='flex flex-row'>
<p>Project Name</p> 
<input type="email" id="email" class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Arangu" required="" />
</div>
<div className='flex flex-row'>
<p>Project Head</p> 
<input type="email" id="email" class="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Niranjan Neeru" required="" />
</div>

<div className='w-full'>
<PTable/>
</div>
    </div>
  )
}

export default Project_Dashboard