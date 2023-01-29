import { Component } from "react";
import ProductListPage from "../components/designedpages/ProductListPage";
import EmployeeNavigation from "../components/layout/EmployeeNavigation";
import Footer from "../components/layout/Footer";

class ProductList extends Component{
    render(){
        return <div>
            <EmployeeNavigation></EmployeeNavigation>
            <ProductListPage></ProductListPage>
            <Footer></Footer>
        </div>
    }
}
export default ProductList;
