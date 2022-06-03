import React, { useContext }  from "react";
import styles from "../styles.module.css"
import {useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Navbar =()=>{
    const {isAuth,logout} =useContext(AuthContext);
    const navigate =useNavigate()
    const handleLogin=()=>{
       navigate("/login");
       if(isAuth){
          logout();
          navigate("/")
       }
       else{
           navigate("/login")
       }
    }
    return(
        <div className={styles.Navbar}>
            <Link to="/">Home</Link>
            <Link to="/feed">Feed</Link>
          <button onClick={handleLogin}>{isAuth ? "Logout" : "Login"}</button>
        </div>
    )
}
export default Navbar;