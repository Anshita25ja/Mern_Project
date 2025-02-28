import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const[auth,setAuth]=useAuth();


  const navigate = useNavigate();


  const handleSubmit = async (e) => {
   
    const url=process.env.REACT_APP_API
    console.log(email,password,url)
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/signin`, {
      
        email,
        password,
       
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
setAuth({...auth,
  user :res.data,
 token:res.token}
)
localStorage.setItem('auth',JSON.stringify(res.data));
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    }

  return (
    <Layout title="Register - Ecommerce App">
      <div className="form-container " style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn forgot-btn"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>

          <button type="submit" className="btn btn-primary">
            LOGIN
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Signin;
