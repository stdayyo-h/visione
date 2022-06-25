import { React, useState, useEffect } from "react";

const SkillBox = ({ skill_name, setSkillsArray, index }) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setSkillsArray((prev) => {
      // console.log("previous state : ");
      let state = [...prev];
      state[index] = checked;
      return state;
    });
  }, [checked]);
  return (
    <div class="flex items-start mx-5 py-6">
      <input
        type="checkbox"
        class="border-gray-300 rounded h-5 w-5  mr-2"
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
      />
      <div class="flex flex-col ">
        <h1 class="text-gray-700 font-medium leading-none">{skill_name}</h1>
      </div>
    </div>
  );
};

export default SkillBox;
