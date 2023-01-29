import { Container } from "@mui/system";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CurrentProjectList.css";

function CurrentProjectListPage(){
    const [projectData, setProjectData]=useState([]);
      
    useEffect(()=>{
        axios.get("http://localhost:8189/projects").then((response)=>{
            // console.log(response);
            setProjectData(response.data);
            console.log("data",projectData);

            for(var i=0; i<response.data.length; i++){

            }
        })
        
    },[]);

 /*   const [stakeholderId,setStakeholderId]=useState(0);
    const [projectId, setProjectId] = useState(0);

    

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const stakeholderData = {stakeholderId,projectId};
    console.log("stakeholder data: ",stakeholderData);
    axios.get("http://localhost:8189/stakeholder").then((response) => {
for(let i=0;i<response.data.length;i++){
  console.log(response.data[i].stakeholderId,response.data[i].projectId);

  if(stakeholderId==response.data[i].stakeholderId && projectId==response.data[i].projectId){

    console.log("password match");
   
      sessionStorage.setItem("stakeholderId",parseInt( response.data[i].stakeholderId));
      sessionStorage.setItem("projectId",parseInt( response.data[i].projectId));
    
    window.location.assign("/projectdetails");
    
   break;

  }
  else{
    // alert("Wrong");
    //setWrong("please enter correct mobile number or password");
    
  }

}

})
    
  }
*/

    return(
        <div>
           
           <Container><br/><center><h1>Project List</h1></center><hr/></Container><br/>
            {
                projectData.map((proj)=>{
                    console.log("proj:",proj.projectName);
                    return(
                        <div>
                            <Container>
                                <div class="card shadow-lg bg-body">
                                    <h5 class="card-header">{proj.projectName}</h5>
                                        <div class="card-body">
                                            <p class="card-text">Content: {proj.projectDescription}</p>
                                            <p class="card-text">Flowchart: {proj.projectFlowChart}</p>
                                            <a href="/projectdetails" class="btn btn-danger bg-dark text-light">Project Explore</a>
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
export default CurrentProjectListPage;



/**
 * axios.get("http://localhost:8189/stakeholders").then((response)=>{
            // console.log(response);
            setStakeholderData(response.data);
            console.log("data",stakeholderData);

        })
 */
