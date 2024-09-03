import "./Acount.css";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import Login from "./Login";






const Acount=()=>{
    return(
        <div className="acount-1">
          <div className="acount-2">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please</p>
            <p> with your persional info</p>
            <button>SIGN IN</button>
          </div>

          <div className="acount-3">
            <h1>Creacte Acount</h1>
            <div className="acount-4">
                <div> <span><FaFacebook /></span></div>
                <div><span><FaGooglePlusG /></span></div>
                <div><span><FaLinkedinIn /></span></div>
            </div>
            <p>or use your Email for Registration</p>
            <form>
            <input type="text"  placeholder="Name"></input>
            <input type="text"  placeholder="Email"></input>
            <input type="password"  placeholder="Password"></input>
            <button>SIGN UP</button>
            </form>
          </div>
        </div>
    )
}
export default Acount;