import { Component } from "react";
import CurrentProjectListPage from "../components/designedpages/CurrentProjectListPage";
import EmployeeNavigation from "../components/layout/EmployeeNavigation";
import Footer from "../components/layout/Footer";

class CurrentProjectList extends Component{
    render(){
        return <div>
            <EmployeeNavigation></EmployeeNavigation> 
            <CurrentProjectListPage></CurrentProjectListPage>
            
        </div>
    }
}
export default CurrentProjectList;
