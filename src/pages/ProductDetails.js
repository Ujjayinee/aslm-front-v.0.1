import { Component } from "react";
import ProductDetailsPage from "../components/designedpages/ProductDetailsPage";
import EmployeeNavigation from "../components/layout/EmployeeNavigation";
import Footer from "../components/layout/Footer";

class ProductDetails extends Component{
    render(){
        return <div>
            <EmployeeNavigation></EmployeeNavigation> 
            <ProductDetailsPage></ProductDetailsPage>
            <Footer></Footer>
        </div>
    }
}
export default ProductDetails;
