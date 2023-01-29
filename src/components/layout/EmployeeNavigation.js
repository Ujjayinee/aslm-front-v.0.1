import classes from "./EmployeeNavigation.module.css"
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



function EmployeeNavigation(){
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
                <header className={classes.employeeheader}>
                    <div className={classes.logo}>Axis Saral</div>
                    <div className={classes.logoo}><AccountCircleIcon fontSize="large"/>Welcome {employee.empName}</div>
                </header>
            </div>
            <div>
                <header className={classes.smallnavbar}>
                    
                    <nav>
                        <ul>
                            <li>
                                <Link to="/employeedashboard"><DashboardIcon/>DASHBOARD</Link>
                            </li>     
                            <li>
                                <Link onClick={handleShow}><MenuIcon/>MENU</Link>
                                
                            </li>  
                            <li>
                                <Link to="/empnotification"><NotificationsIcon/>NOTIFICATION</Link>
                            </li> 
                            <li>
                                <Link to="/">LOGOUT<LogoutIcon/></Link>
                            </li> 
                                         
                        </ul>
                    </nav>
                </header>
            </div>

            <div>
                <Offcanvas show={show} onHide={handleClose} backdrop="static" className={classes.sidebar}>
                    <Offcanvas.Header closeButton className={classes.sidehead}>
                        <Offcanvas.Title><MenuIcon/>MENU</Offcanvas.Title>
                        <hr/>
                    </Offcanvas.Header>
                    <div className={classes.mysidebar}>
                        {items.map((item, index) => <MenuItems key={index} item={item} />)}
                    </div>
                </Offcanvas>
            
            </div>
            </div>
    )
}
export default EmployeeNavigation;
