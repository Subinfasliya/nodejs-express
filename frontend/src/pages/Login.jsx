import React, { useState } from "react";
import { userLogin } from "../services/authService";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await userLogin(formData)
    } catch(error){
      console.log(error);
      
    }
    
  };

  return (
    <>
      <h2>Login Page</h2>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <button type="submit">Sign In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
