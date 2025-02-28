import React from 'react'
import { useAuth } from "../context/auth.js";
import {NavLink,Link} from 'react-router-dom'
import {GiShoppingBag} from 'react-icons/gi'

import toast from "react-hot-toast";
const Header = () => {

  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    //localstorage clear...we did not require refresh
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");///remove from localstroagemon

    toast.success("Logout Successfully");}
  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to="/"  className="navbar-brand" href="#"> <GiShoppingBag/> Ecommerce App</Link>
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
          <NavLink to="/" className="nav-link" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category" className="nav-link" >Category</NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink to="/register" className="nav-link" href="#">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signin" className="nav-link" href="#">Login</NavLink>
        </li> */}
       {!auth.user?(<> 
       <li className="nav-item">
          <NavLink to="/register" className="nav-link" href="#">Register</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signin" className="nav-link" href="#">Login</NavLink>
        </li></>):(<> 
        <li className="nav-item">
          <NavLink to="/signin" className="nav-link"   onClick={handleLogout} href="#">Logout</NavLink>
        </li></>)} 
        
       
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link" href="#">Cart(0)</NavLink>
        </li>
      </ul>
    
    </div>
  </div>
</nav>

    </>
  )
}

export default Header