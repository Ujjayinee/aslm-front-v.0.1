/*import classes from "./EmployeeLoginPage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Container } from "@mui/system";

function EmployeeLoginPage(){
  
  const [wrong, setWrong] = useState('');
  const [empEmail,setEmpEmail]=useState("");
  const [empPassword, setEmpPassword] = useState(""); 
  const handleSubmit = (e) => {
    e.preventDefault();
    const empData = {empEmail,empPassword};
    console.log("emp data: ",empData);
    axios.get("http://localhost:8200/employees").then((response) => {
      for(let i=0;i<response.data.length;i++){
        console.log(response.data[i].empEmail,response.data[i].empPassword);
        if(empEmail==response.data[i].empEmail && empPassword==response.data[i].empPassword){
          console.log("password match");
          sessionStorage.setItem("empId",parseInt( response.data[i].empId));
          sessionStorage.setItem("email", empEmail);
          sessionStorage.setItem("password", empPassword);
          window.location.assign("/employeedashboard");
          alert("Welcome");
          break;
        }
        else{
          setWrong("please enter correct mobile number or password");
        }
      }
    })
  }
  return(
    <div>
      <div class="backgroundloginpage"></div>
      <Container>
      <form class="loginform" onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <br/><br/><br/><br/>
              <div class="input-div one focus">
                <div class="i"><i class="bi bi-person-fill"></i></div>
                <div>
                  
                  <input type="text" 
                        placeholder="Enter Email Id" 
                        value={empEmail} 
                        onChange={(e)=>setEmpEmail(e.target.value)}></input>
                </div>
              </div>
              <div class="input-div two">
                <div class="i"><i class="bi bi-lock-fill"></i></div>
                <div>
                  <input type="password" placeholder="Enter Password" value={empPassword} onChange={(e)=>setEmpPassword(e.target.value)}></input>
                </div>
              </div><br/>
              
                <button type="submit">LOGIN</button><br/>
                <p class="text-danger">{wrong}</p>
                <p>forget password?
                <Link to="/resetpassword" class="clickhere"> Click here</Link>
                </p>
                 </form>
      </Container>      
    </div>
  )
}
export default EmployeeLoginPage;
*/

/**
 * <form class="loginform" onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <br/><br/><br/><br/>

                <input type="text" placeholder="Enter email id" value={empEmail} onChange={(e)=>setEmpEmail(e.target.value)}></input><br/><br/>
                <input type="password" placeholder="Enter Password" value={empPassword} onChange={(e)=>setEmpPassword(e.target.value)}></input><br/>
                <button type="submit">LOGIN</button><br/>
                <p class="text-danger">{wrong}</p>
                <p>forget password?
                <Link to="/resetpassword" class="clickhere"> Click here</Link>
            </p>
                 </form>
 */


                 import "./EmployeeLoginPage.css"
                 import 'bootstrap/dist/css/bootstrap.min.css';
                 import { Link, useNavigate } from "react-router-dom";
                 import React from "react";
                 import { useState } from "react";
                 import axios from "axios";
                 import { Container } from "@mui/system";
                 function EmployeeLoginPage(){
                     const [wrong, setWrong] = useState('');
                     const [empEmail,setEmpEmail]=useState("");
                     const [empPassword, setEmpPassword] = useState("");
                 
                   
                   const handleSubmit = (e) => {
                     e.preventDefault();
                     
                     const empData = {empEmail,empPassword};
                     console.log("emp data: ",empData);
                     axios.get("http://localhost:8200/employees").then((response) => {
                 for(let i=0;i<response.data.length;i++){
                   console.log(response.data[i].empEmail,response.data[i].empPassword);
                 
                 
                   if (empEmail=="admin@gmail.com" && empPassword=="admin"){
                     window.location.assign("/flow");
                     alert("Welcome");
                     break;
                   }
                   else if(empEmail==response.data[i].empEmail && empPassword==response.data[i].empPassword){
                 
                     console.log("password match");
                    
                       sessionStorage.setItem("empId",parseInt( response.data[i].empId));
                       sessionStorage.setItem("empName",response.data[i].empName);
                       sessionStorage.setItem("empDepartment",response.data[i].empDepartment);
                       sessionStorage.setItem("empProjectName",response.data[i].empProjectName);
                       sessionStorage.setItem("empDesignation",response.data[i].empDesignation);
                       sessionStorage.setItem("supervisorName",response.data[i].supervisorName);
                       sessionStorage.setItem("empDesignation",response.data[i].empDesignation);
                       sessionStorage.setItem("projectId",response.data[i].projectId);
                       sessionStorage.setItem("empPassword",response.data[i].empPassword);
                       sessionStorage.setItem("email", empEmail);
                       sessionStorage.setItem("password", empPassword);
                     
                     window.location.assign("/employeedashboard");
                     alert("Welcome");
                    break;
                 
                   }
                   
                   else{
                     // alert("Wrong");
                     setWrong("please enter correct mobile number or password");
                     
                   }
                 
                 }
                 
                 })
                     
                   }
                 
                     return(
                         <div>
                          <div class="backgroundloginpage"></div><br/>
                            <div class="login-box">
                   <h2>Login</h2>
                   <form onSubmit={handleSubmit}>
                     <div class="user-box">
                       <input type="email" name="zczd" required="" value={empEmail} onChange={(e)=>setEmpEmail(e.target.value)}></input>
                       <label>Email</label>
                     </div>
                     <div class="user-box">
                       <input type="password" name="xc" required="" value={empPassword} onChange={(e)=>setEmpPassword(e.target.value)}></input>
                       <label>Password</label>
                     </div>
                     <a type="button" href="" onClick={handleSubmit}>
                       <span></span>
                       <span></span>
                       <span></span>
                       <span></span>
                       Login
                     </a>
                     <p class="text-danger">{wrong}</p>
                   </form>
                 </div>
                 
                         </div>
                     );
                 }
                 export default EmployeeLoginPage;