import React from "react";

function Personal({formData, handleChange}){
  return(
    <form className="PageContainer">
      <input type="text" name="firstName" placeholder="First Name..." value={formData.firstName} onChange={handleChange} />
      <input type="text" name="lastName" placeholder="Last Name..." value={formData.lastName} onChange={handleChange}/>
      <input type="text" name="bday" placeholder="Birthday..."value={formData.bday} onChange={handleChange} />
    </form>
  );
}
export default Personal;