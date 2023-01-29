import { Component } from "react";
import StakeholderListPage from "../components/designedpages/StakeholderListPage";
import EmployeeNavigation from "../components/layout/EmployeeNavigation";
import Footer from "../components/layout/Footer";

class StakeholderList extends Component{
    render(){
        return <div>
            <EmployeeNavigation></EmployeeNavigation> 
            <StakeholderListPage></StakeholderListPage>
            <Footer></Footer>
        </div>
    }
}
export default StakeholderList;