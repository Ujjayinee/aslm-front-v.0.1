import "./EmployeeListPage.css";
import { Container } from "@mui/system";
import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Avatar from 'react-avatar';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


function EmployeeList(){
    const [employeeData, setEmployeeData]=useState([]);
    
    const [query,setQuery]=useState("");
    console.log(query);
   
    
    
    useEffect(()=>{
        axios.get("http://localhost:8200/employees").then((response)=>{
            // console.log(response);
            setEmployeeData(response.data);
            console.log("data",employeeData);

            for(var i=0; i<response.data.length; i++){
            }    
        })
    },[])
    return(
        <div>
            <Container><br/>
                <div class="empsearch">
                    <center>
                        <input type="text"  
                                placeholder="Search Employee Name[Format: abcdefg]" 
                                class="search text-center" 
                                onChange={(e)=> setQuery(e.target.value)}>
                        </input>
                    </center>
                </div>
            </Container><br/><br/>
            {
                employeeData.filter((ele)=>ele.empName.toLowerCase().includes(query)).map((ele)=>{
                    <li key={ele.empId}></li>
                    console.log("ele:",ele.empName);
                    return(
                        <div class="emplist">
                            <Container>
                                 <div class="card shadow-sm bg-body">                                        
                                    <div class="card-body bg- text-dark bg-gradient">
                                        <div class="row">
                                            <div class="col-sm-3">   
                                               <Avatar name= {ele.empName} 
                                                class="avatarc"
                                                 colour={'primary'}
                                                  size='170' round
                                                   />
                                            </div>                                           
                                            <div class="col-sm-6">
                                                <h1 class="card-title fw-normal fw-bold">{ele.empName}</h1>
                                                <h4 class="card-des">{ele.empDesignation}</h4>
                                                <p class="card-text">
                                                    Project: {ele.empProjectName} | Supervisor: {ele.supervisorName}
                                                </p>
                                                <p class="card-text">
                                                    <span><EmailOutlinedIcon/></span>  {ele.empEmail} | <i class="bi bi-telephone-fill"></i> {ele.empMobileNo}
                                                </p>
                                                <p class="card-text" color="black">
                                                    <span> <LocationOnOutlinedIcon/></span> {ele.empAddress}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                            </Container>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default EmployeeList;