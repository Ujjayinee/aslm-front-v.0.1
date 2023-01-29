import { Component } from "react";
import AddEmployee from "../adminComponents/admindesignedpages/AddEmployee";
import Footer from "../components/layout/Footer";
import WebsiteNavigation from "../components/layout/WebsiteNavigation"

class AdminAddEmployee extends Component{
    render(){
        return <div>
            
            <AddEmployee></AddEmployee>
            
        </div>
    }
}
export default AdminAddEmployee;

/**<WebsiteNavigation></WebsiteNavigation> 
 * <Footer></Footer>
*/