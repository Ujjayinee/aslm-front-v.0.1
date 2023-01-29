import { Component } from "react";
import CyberSecurityPolicyPage from "../components/designedpages/CyberSecurityPolicyPage";
import EmployeeListPage from "../components/designedpages/EmployeeListPage";
import EmployeeNavigation from "../components/layout/EmployeeNavigation";
import Footer from "../components/layout/Footer";

class CyberSecurityPolicy extends Component{
    render(){
        return <div>
            <EmployeeNavigation></EmployeeNavigation> 
            <CyberSecurityPolicyPage></CyberSecurityPolicyPage>
            <Footer></Footer>
        </div>
    }
}
export default CyberSecurityPolicy;