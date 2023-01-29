import { Component } from "react";
import DressCodePage from "../components/designedpages/DressCodePage";
import EmployeeNavigation from "../components/layout/EmployeeNavigation";
import Footer from "../components/layout/Footer";

class DressCode extends Component{
    render(){
        return <div>
            <EmployeeNavigation></EmployeeNavigation> 
            <DressCodePage></DressCodePage>
            <Footer></Footer>
        </div>
    }
}
export default DressCode;