import React, { useState } from "react";
import Layout from "../components/Layout/Layout.js";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

// import "../styles/AuthStles.css";
import "../styles/AuthStyle.css";
export const ResetPassword= () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
   const params = useParams();
   const { resetPasswordToken }=params;
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
  
    e.preventDefault();
    try {
      
      const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/resetpassword/${resetPasswordToken}`, {
        password,confirmPassword
    });

    if (response.data.success) {
      alert(response.data.message);
      navigate("/signin");
    }

  } catch (error) {
    alert(error.response.data.message);
 
  }
  };

  return (
    <Layout title="ResetPassword - Ecommer App">
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">ForgotPassword FORM</h4>
          <div className="mb-3">
            <input
              type="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInput1"
              placeholder="Enter Your Password "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control"
              id="exampleInput2"
              placeholder="Enter Your confirmPassword "
              required
            />
          </div>
        
          <button type="submit" className="btn btn-primary">
            RESETPASSWORD
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ResetPassword;
