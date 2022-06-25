import React from "react";
import Requirements from "./Requirements";

import Correct from "../assets/images/check.png";
import Ongoing from "../assets/images/ongoing.png";
import Wrong from "../assets/images/Wrong.png";
const EmployeeCard = ({ index, e }) => {
  return (
    <div class="card w-full h-45 bg-black text-white">
    <div class="card-body items-center text-center">
    <div class="avatar">
  <div class="w-24 rounded-full">
    <img src={e.emp_image} />
  </div>
</div>
      <h2 class="card-title">{e.employee_name}</h2>
      <p>{e.email}</p>
    </div>
  </div>
  );
};

export default EmployeeCard;
