import { Component } from "react";
import ProjectDetailsPage from "../components/designedpages/ProjectDetailsPage";
import EmployeeNavigation from "../components/layout/EmployeeNavigation";
import Footer from "../components/layout/Footer";

class ProjectDetails extends Component{
    render(){
        return <div>
            <EmployeeNavigation></EmployeeNavigation> 
            <ProjectDetailsPage></ProjectDetailsPage>
            <Footer></Footer>
        </div>
    }
}
export default ProjectDetails;
