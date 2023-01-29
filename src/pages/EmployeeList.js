import { Component } from "react";
import EmployeeListPage from "../components/designedpages/EmployeeListPage";
import EmployeeNavigation from "../components/layout/EmployeeNavigation";
import Footer from "../components/layout/Footer";

class EmployeeList extends Component{
    render(){
        return <div>
            <EmployeeNavigation></EmployeeNavigation> 
            <EmployeeListPage></EmployeeListPage>
            <Footer></Footer>
        </div>
    }
}
export default EmployeeList;
