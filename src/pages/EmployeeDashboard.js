import { Component } from "react";
import EmployeeDashboardPage from "../components/designedpages/EmployeeDashboardPage";
import Footer from "../components/layout/Footer";
import MegaMenu from "../components/layout/MegaMenu";

class EmployeeDashboard extends Component{
    render(){
        return <div>
            <MegaMenu></MegaMenu>
            <EmployeeDashboardPage></EmployeeDashboardPage>
            <Footer></Footer>
        </div>
    }
}
export default EmployeeDashboard;
