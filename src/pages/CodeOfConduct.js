import { Component } from "react";
import CodeOfConductPage from "../components/designedpages/CodeOfConductPage";
import EmployeeNavigation from "../components/layout/EmployeeNavigation";
import Footer from "../components/layout/Footer";

class CodeOfConduct extends Component{
    render(){
        return <div>
            <EmployeeNavigation></EmployeeNavigation> 
            <CodeOfConductPage></CodeOfConductPage>
            <Footer></Footer>
        </div>
    }
}
export default CodeOfConduct;