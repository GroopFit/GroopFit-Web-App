import React from "react";

function Account({formData, handleChange}){ 
    return(
      <form className="PageContainer">
        <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="text" name="username" placeholder="Username..." value={formData.username} onChange={handleChange} />
        <input type="text" name="pass" placeholder="Password..."  value={formData.pass} onChange={handleChange}/>
      </form>
    );
}
export default Account;