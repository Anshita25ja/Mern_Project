import React, { useState } from "react";
import Layout from "../components/Layout/Layout.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// import "../styles/AuthStles.css";
import "../styles/AuthStyle.css";
const ForgotPassword= () => {

  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    console.log(email)
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`, {
      
        email
      
      });
  
      if (res.data.success) {
        navigate('/resetpassword/' + res.data.token);
      }
    
    } catch (error) {
      alert(error.response.data.message);
    
    }
  };

  return (
    <Layout title="ForgotPassword - Ecommer App">
      <div className="form-container" style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">ForgotPassword FORM</h4>
       
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInput2"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
           SUBMIT
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
