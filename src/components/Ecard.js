import React from 'react'
import { Link } from 'react-router-dom'

const ECard = ({title}) => {
 
  return (
    
        
        <div class="card w-96 h-25 shadow-xl bg-gray-900 text-white">
  <div class="card-body" >
      {title}
      </div>
</div>
        
    
  )
}

export default ECard