import React, { useState } from "react";

export function Contactus() {
  const [user, setUser] = useState({ fullname: "", email: "", password: "" });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    const {fullname, email, password} = user;
    const response = await fetch(
      "https://contact-form-b46f1-default-rtdb.firebaseio.com/userRecords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
          fullname,
          email,
          password
        })
      }
    );
    if(response){
      setUser({ fullname: "", email: "", password: "" });
      alert("data Stored")
    }
    else{
      alert("Fill the Form")
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full Name</label>
      <input type="text" name="fullname" onChange={handleChange} value={user.name}/>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" onChange={handleChange} />
      <label htmlFor="password">Passoword</label>
      <input type="password" name="password" onChange={handleChange} />
      <button>Register</button>
    </form>
  );
}
