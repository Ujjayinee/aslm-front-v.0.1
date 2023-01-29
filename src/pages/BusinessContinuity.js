import { Component } from "react";
import BusinessContinuityPage from "../components/designedpages/BusinessContinuityPage";
import EmployeeNavigation from "../components/layout/EmployeeNavigation";
import Footer from "../components/layout/Footer";

class BusinessContinuity extends Component{
    render(){
        return <div>
            <EmployeeNavigation></EmployeeNavigation> 
            <BusinessContinuityPage></BusinessContinuityPage>
            <Footer></Footer>
        </div>
    }
}
export default BusinessContinuity;