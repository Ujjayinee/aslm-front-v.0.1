import "./MegaMenu.css";
import { Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuItems from "./MenuItems";
import items from "./sidebar.json"
import axios from "axios";
import {  useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Offcanvas from 'react-bootstrap/Offcanvas';
import "rsuite/dist/rsuite.min.css";
import { Container } from "@mui/system";

function MegaMenu(){



    const [productData, setProductData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:9100/products").then((response)=>{
            // console.log(response);
            setProductData(response.data);
            console.log("data",productData);
            for(var i=0; i<response.data.length; i++){
            }
        })
    },[])






    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const empId = sessionStorage.getItem('empId');
    const location = useLocation();
    
    const [employee,setEmployee] = useState({});

    console.log(empId);
    async function getDetails(){
        await axios
        .get("http://localhost:8200/employee/"+empId[0].toString())
        .then((response)=>{
            // console.log(response.data);
            setEmployee(response.data);          
        });
        console.log(employee);
    }
    // console.log(empId);
    useEffect(()=>{
        getDetails();
    }, []);




    return(
        <div>
            <div>
                <header class="employeeheader">
                    <div class="logo">Axis Saral</div>
                    <div class="logoo"><AccountCircleIcon fontSize="large"/>Welcome {employee.empName}</div>
                </header>
            </div>
            <div class="smnav">            
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <button class="navbar-toggler px-0" type="button" data-mdb-toggle="collapse"
                          data-mdb-target="#navbarExampleOnHover" aria-controls="navbarExampleOnHover" aria-expanded="false"
                          aria-label="Toggle navigation">    
                        </button>
                        <div class="collapse navbar-collapse" id="navbarExampleOnHover">
                            <ul class="navbar-nav me-auto ps-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" href="/employeedashboard">Dashboard</a>
                                </li> 
                                <li class="nav-item">
                                    <a class="nav-link" href="/myprofile">My Profile</a>
                                </li> 
                                <li class="nav-item dropdown dropdown-hover position-static">
                                    <a class="nav-link" 
                                        href="#" 
                                        id="navbarDropdown" 
                                        role="button"
                                        data-mdb-toggle="dropdown" 
                                        aria-expanded="false">
                                        Bank Policy
                                    </a>
                                    
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <div class="container">
                                            <div class="row my-4">
                                                <div class="col-md-6 col-lg-5 mb-3 mb-lg-0">
                                                    <div class="list-group list-group-flush dropend">
                                                        <p class="mb-0 list-group-item text-uppercase font-weight-bold"><b>Policies</b></p>
                                                        <a href="/csp" class="list-group-item list-group-item-action">Cyber Security Policy</a>
                                                        <a href="/bcp" class="list-group-item list-group-item-action">Business Continuity Plan</a>
                                                        <a href="/cce" class="list-group-item list-group-item-action">Code of Conduct & Ethics</a>
                                                        <a href="/cg" class="list-group-item list-group-item-action">Corporate Governance</a>
                                                        <a href="/dc" class="list-group-item list-group-item-action">Dress Code</a>
                                                        <a href="" class="list-group-item list-group-item-action">Gifting Policy</a>
                                                        
                                                    </div>
                                                    <div class="pt-2">
                                                        
                                                        <div class="bg-image hover-overlay shadow-1-strong rounded ripple mb-4"
                                                            data-mdb-ripple-color="light">
                                                            <img src="https://images.pexels.com/photos/7735699/pexels-photo-7735699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid" />
                                                        
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                                                    <div class="list-group list-group-flush dropend">
                                                                                                        
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                                    <div class="list-group list-group-flush">
                                                        <a class="list-group-item list-group-item-action"></a>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-lg-3">
                                                    <div class="list-group list-group-flush">
                                                    <a class="list-group-item list-group-item-action"></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </li>
                            
                            <li class="nav-item dropdown dropdown-hover position-static">
                                <a class="nav-link" href="/products" id="navbarDropdown" role="button"
                                    data-mdb-toggle="dropdown" aria-expanded="false">
                                    Department
                                </a>
                                
                                <div class="dropdown-menu w-90 mt-0" aria-labelledby="navbarDropdown">
                                    <div class="container">
                                        <div class="row my-4">
                                            <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                                                <div class="list-group list-group-flush">
                                                    <p class="mb-0 list-group-item text-uppercase font-weight-bold"><b>Information Technology</b></p>
                                                    <a href="" class="list-group-item list-group-item-action">Database(SOP)</a>
                                                    <a href="" class="list-group-item list-group-item-action">Middleware(SOP)</a>
                                                    <a href="" class="list-group-item list-group-item-action">Incident Management</a>
                                                    <a href="" class="list-group-item list-group-item-action">Project Management</a>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-3 mb-3 mb-lg-0">
                                                <div class="list-group list-group-flush">
                                                    <p class="mb-0 list-group-item text-uppercase font-weight-bold"><b>Sales</b></p>
                                                    <a href="" class="list-group-item list-group-item-action">Database(SOP)</a>
                                                    <a href="" class="list-group-item list-group-item-action">Middleware(SOP)</a>
                                                    <a href="" class="list-group-item list-group-item-action">Incident Management</a>
                                                    <a href="" class="list-group-item list-group-item-action">Project Management</a>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-3 mb-3 mb-md-0">
                                                <div class="list-group list-group-flush">
                                                    <p class="mb-0 list-group-item text-uppercase font-weight-bold"><b>Financial Dept.</b></p>
                                                    <a href="" class="list-group-item list-group-item-action">Database(SOP)</a>
                                                    <a href="" class="list-group-item list-group-item-action">Middleware(SOP)</a>
                                                    <a href="" class="list-group-item list-group-item-action">Incident Management</a>
                                                    <a href="" class="list-group-item list-group-item-action">Project Management</a>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-lg-3">
                                                <div class="list-group list-group-flush">
                                                <p class="mb-0 list-group-item text-uppercase font-weight-bold"><b>HR Department</b></p>
                                                    <a href="" class="list-group-item list-group-item-action">Database(SOP)</a>
                                                    <a href="" class="list-group-item list-group-item-action">Middleware(SOP)</a>
                                                    <a href="" class="list-group-item list-group-item-action">Incident Management</a>
                                                    <a href="" class="list-group-item list-group-item-action">Project Management</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">SCD</a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="/bankemployees">Employee List</a>
                            </li> 
                            <li class="nav-item">    
                              <a class="nav-link" href="products">Explore Product</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#">Project Details</a>
                            </li>
                            
                            <li class="nav-item">
                              <a class="nav-link"></a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link"></a>
                            </li> 
                            <li class="nav-item">
                              <a class="nav-link"></a>
                            </li> 
                            <li class="nav-item">
                              <a class="nav-link"></a>
                            </li> 
                            <li class="nav-item">
                              <a class="nav-link"></a>
                            </li> 
                            <li class="nav-item">
                              <a class="nav-link"><i class="bi bi-bell"></i></a>
                            </li>    
                            <li class="nav-item">
                              <a class="nav-link" href="#">Log Out </a>
                            </li>                        
                        </ul>
                    </div>
                </div>
            </nav>
        </div>   
        </div>    
    )
}
export default MegaMenu;


/**
 * <li>
                            <div class="btn-group dropend">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropend
  </button>
  <ul class="dropdown-menu">
  <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action two</a></li>
    <li><a class="dropdown-item" href="#">Action three</a></li>
  </ul>
</div>
                            </li>  
 */
/**
 *  <a class="list-group-item list-group-item-action dropdown-toggle"
                                                            data-bs-toggle="dropdown" aria-expanded="false">
                                                            Dropend Button
                                                        </a>
                                                        <ul class="dropdown-menu">
                                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                                            <li><a class="dropdown-item" href="#">Action two</a></li>
                                                            <li><a class="dropdown-item" href="#">Action three</a></li>
                                                        </ul>   
 */