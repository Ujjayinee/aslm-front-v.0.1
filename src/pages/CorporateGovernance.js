import { Component } from "react";
import CorporateGovernancePage from "../components/designedpages/CorporateGovernancepage";
import EmployeeNavigation from "../components/layout/EmployeeNavigation";
import Footer from "../components/layout/Footer";

class CorporateGovernance extends Component{
    render(){
        return <div>
            <EmployeeNavigation></EmployeeNavigation> 
            <CorporateGovernancePage></CorporateGovernancePage>
            <Footer></Footer>
        </div>
    }
}
export default CorporateGovernance;