import React from "react";

function FitnessLogistics({formData, handleChange}){
  return(
    <form className="PageContainer">
      <input type="text" name="age" placeholder="Age..." value={formData.age === 0 ? "":formData.age} onChange={handleChange}/>
      <input type="text" name="height" placeholder="Height..." value={formData.height === 0 ? "" : formData.height} onChange={handleChange}/>
      <input type="text" name="weight" placeholder="Weight..." value={formData.weight === 0 ? "" : formData.weight} onChange={handleChange} />
    </form>
  );
}
export default FitnessLogistics;