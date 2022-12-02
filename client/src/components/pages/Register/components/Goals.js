import React from "react";

function Goals({formData, handleChange}){
  return(
    <form className="PageContainer">
      <input type="text" name="goalWeight" placeholder="Desired Weight..." value={formData.goalWeight == 0?"":formData.goalWeight} onChange={handleChange} />
      <input type="text" name="goal" placeholder="Goal..." value={formData.goal} onChange={handleChange}/>
    </form>
  );
}
export default Goals;