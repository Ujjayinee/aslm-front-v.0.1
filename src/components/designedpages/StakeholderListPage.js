import { Container } from "@mui/system";
import { useState, useEffect } from "react";
import "./StakeholderListPage.css";
import axios from "axios";

function StakeholderListPage(){
    const [stakeholderData, setStakeholderData]=useState([]);
   
    
    
    useEffect(()=>{
        axios.get("http://localhost:8189/stakeholders").then((response)=>{
            // console.log(response);
            setStakeholderData(response.data);
            console.log("data",stakeholderData);

            for(var i=0; i<response.data.length; i++){

            }
            
            
        })
    },[])

    return(
        <div>
           
           <Container><br/><center><h1>Stakeholder List</h1></center><hr/></Container><br/>
            {
                stakeholderData.map((ele)=>{
                    console.log("ele:",ele.stakeholderName);
                    return(
                        <div>
                            <Container>
                            <div class="card shadow-lg bg-body">
                                <h5 class="card-header ">{ele.stakeholderName}</h5>
                                    <div class="card-body">
                                        <p class="card-text">Mobile No: {ele.stakeholderMobileNo} | E-mail: {ele.stakeholderEmail}</p>
                                    </div>
                            </div><br/></Container>
                        </div>
                        
                    )
                })
            }
        </div>
    )
}
export default StakeholderListPage;