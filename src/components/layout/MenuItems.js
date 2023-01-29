import "./MenuItems.css";

import React, { useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function MenuItems({item}){

    const [open, setOpen] = useState(false)

    if(item.childrens){
        return(
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <p>
                        {item.icon && <i className={item.icon}></i>}
                        {item.title }
                    </p>
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="sidebar-content">
                { item.childrens.map((child, index) => <MenuItems key={index} item={child} />) }
                </div>
            </div>
        )
    }else{
        return(
            <a href={item.path || "#"} className="sidebar-item plain">
                
                   
                    {item.icon && <i className={item.icon}></i>}
                        {item.title}
                    
                
            </a>
        )
    }
}
export default MenuItems;