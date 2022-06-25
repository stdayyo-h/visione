import React from 'react'

const Requirements = ({name,status}) => {
  return (
    <div class="card w-96 bg-white text-black">
  <div class="card-body items-center text-center">
    <h2>{name}</h2>
{/*     
    <h2>Redis Integration</h2>
    <h2>Mail Hog</h2> */}
    <img src={status} className="h-[30px] w-[30px]"></img>
  </div>
</div>
  )
}

export default Requirements