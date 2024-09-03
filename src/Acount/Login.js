import { BiLogoMastercard } from "react-icons/bi";
import "./Login.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Acount from "./Acount";
import { useState } from "react";






const Login=()=>{
    const [click,setlick] = useState(false);
    const handleCreat=()=>{
        window.location.href="./Acount.js"
    }
    return(
        <div className="login">
        <div className="login-1">
<span><BiLogoMastercard /></span>
<h2>Your Logo</h2>
{/* <p>Place your tagline here</p> */}
<h1>Hey! Welcome</h1>
<p>Join Use and give Information pepole</p>
        </div>

        <div className="login-2">
            <h1>Log In</h1>
            <form className="form-2">
                <div> <input type="text" placeholder="username"></input></div>
                <div><input type="password" placeholder="password"></input></div>
                <div style={{marginRight:"70px", position:"relative"}} className="login-span"><span>Forgat Password</span>
                <span onClick={handleCreat} className="login-creat">Creat Acount</span></div>
                <button>Log in</button>
            </form>
           <div className="hr-1"><span>or with</span></div>
           <div className="login-logo">
            <span style={{color:"blue", fontSize:"30px", marginRight:"100px"}}><FaFacebookSquare /></span>
            <span style={{color:"red", fontSize:"30px"}}><FaGooglePlus /></span>
            <span style={{color:"lightseagreen", fontSize:"30px", marginLeft:"100px"}}><FaTwitter /></span>
           </div>
        </div>
        </div>
    )
}
export default Login;