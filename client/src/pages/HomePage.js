import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useAuth } from "../context/auth";
import Layout from "../components/Layout/Layout.js"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const HomePage = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   getUser();
  // }, []);
const [islogged ,setIslogged]=useState(false)
const [userData,setUserData]=useState("");
const [auth,setAuth]=useAuth();
  async function getUser() {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/user`)
      
    
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setUserData(res.data.data)
        setIslogged(res.data.success);
      
      } else {
        navigate("/signin");
        toast.error(res.data.message);
      }
    } catch (error) {
      navigate("/signin");
      console.log(error);
      toast.error("Something went wrong");
    }
  }
  async function handleLogout() {

    try {
      const response = await axios(`${process.env.REACT_APP_API}/api/v1/auth/logout`)
      
      if (response.data.success) {
        navigate("/signin");
      }
    
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }
     
  return (
    <>
    <Layout title={"Home"}>
  <h1>ansh</h1>
  {/* <p>{JSON.stringify(auth,null,4)}</p> */}
    </Layout>
    </>
  )
}

export default HomePage
