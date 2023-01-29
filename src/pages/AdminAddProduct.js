import { Component } from "react";
import AddProduct from "../adminComponents/admindesignedpages/AddProduct";
import Footer from "../components/layout/Footer";
import WebsiteNavigation from "../components/layout/WebsiteNavigation"

class AdminAddProduct extends Component{
    render(){
        return <div>
            <WebsiteNavigation></WebsiteNavigation>
            <AddProduct></AddProduct>
            <Footer></Footer>
        </div>
    }
}
export default AdminAddProduct;