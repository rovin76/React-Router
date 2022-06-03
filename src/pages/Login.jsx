import React, { useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContext";
import styles from "../styles.module.css"
const Login=()=>{
    const [loginCreds,setLoginCred]=useState("");
    const {login} = useContext(AuthContext);
    const onChange=(e)=>{
        const {name,value}=e.target;
        setLoginCred({...loginCreds,[name]:value,})
    }
    const handleSubmit=(e)=>{
          e.preventDefault();   
          login();
    }
    
    return(
        <div>
            <h1>Login</h1>
            <form className={styles.form_body} onSubmit={handleSubmit} >
                <input name="email" type="email" placeholder="Email"  onChange={onChange}/>
                <input name="password" type="password" placeholder="Password" onChange={onChange}/>
                <input type="submit" value="login" />
            </form>
        </div>
    )
}
export default Login;