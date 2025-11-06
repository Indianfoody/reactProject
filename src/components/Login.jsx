import React from "react";
import { useNavigate } from "react-router-dom";



function Login(){
     const navigate = useNavigate();
     const handleClick = () =>{
    navigate("/Navbar"); 
    };
     
    return(
        <>
        <div>
            <p>LoginPage</p>
          
           <form>
            <input type="email" placeholder="Email"/><br/>
            <input type="password" placeholder="password"/><br/>
            <button style={{border:'1px'}}  onClick={handleClick}>Submit</button>
           
           </form>
        </div>
        </>
    );
}
export default  Login;