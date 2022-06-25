import React from 'react'
import { Link } from 'react-router-dom'
import { PROJECT_DASHBOARD } from '../constants/routes'

function Projstat({name, stat, img}) {
    
  return (
    <div>
        <div class="card card-compact ml-6 w-72 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" className='h-60' /></figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <input type="range" min="0" max="100" value={stat} class="range range-primary h-2" />
    <div class="card-actions justify-end">
      <Link to={PROJECT_DASHBOARD}><button class="btn btn-primary">Details</button></Link>
      
    </div>
  </div>
</div>
    </div>
  )
}

export default Projstat