import { Container } from "@mui/system";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ProductListPage.css";
function ProductListPage(){
    const [productData, setProductData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:9100/products").then((response)=>{
            // console.log(response);
            setProductData(response.data);
            console.log("data",productData);
            for(var i=0; i<response.data.length; i++){
            }
        })
    },[])
    return(
        <div class="pro">
            <Container>
            <div class="row">
                <div class="col-4">
                    <div id="carouselExampleCaptions" class="carousel slide">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://capway-storage.s3.us-west-1.amazonaws.com/any/c7be54830f18114a200286fd0c070469/c7be54830f18114a200286fd0c070469.png" class="d-block w-100" alt="..."></img>

                                <div class="carousel-caption d-none d-md-block">
                                    <h2>Products</h2>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="d-block w-100" alt="..."></img>
                                <div class="carousel-caption d-none d-md-block">
                                    <h3>Credit Card</h3>

                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.axisbank.com/images/default-source/progress-with-us_new/digital-savings-account.jpg" class="d-block w-100" alt="..."></img>
                                <div class="carousel-caption d-none d-md-block">
                                    <h3>Digital Savings Account</h3>

                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.bajajfinservmarkets.in/discover/wp-content/uploads/2021/10/Education-Loan.png" class="d-block w-100" alt="..."></img>
                                <div class="carousel-caption d-none d-md-block">
                                    <h3>Educational Loan</h3>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://poonawallafincorp.com/pfca/assets/blog_banner/1647625292.jpeg" class="d-block w-100" alt="..."></img>
                                <div class="carousel-caption d-none d-md-block">
                                    <h3>Car Loan</h3>                                  
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div class="col-5">
                    <Container>
                        <div class="sidead">
                            <div class="card">
                                <div class="card-body">
                                  <h5 class="card-title">Card title</h5>
                                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                  <a href="#" class="card-link">Card link</a>
                                  <a href="#" class="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                </div>
                <br/><br/><br/><br/><br/>
                
            </Container>
            <Container><br/><h1 class="prodheading">Product List</h1><hr/></Container><br/>
            <div class="row">
            {
                productData.map((prod)=>{
                    console.log("prod:",prod.productName);
                    function productDetails(){
                        sessionStorage.setItem("productId",prod.productId);
                        sessionStorage.setItem("productName",prod.productName);
                        sessionStorage.setItem("productType",prod.productType);
                        sessionStorage.setItem("imageUrl",prod.imageUrl);
                        sessionStorage.setItem("description",prod.description);
                        window.location.assign("/product-details");
                    }
                    return(
                        <div class="col-3">
                            <Container>        
                                <div class="card shadow-lg bg-body">
                                    <h5 class="card-header text-light text-center"></h5>
                                    <div class="card-body text-dark bg-gradient">
                                        <div class="image"><img src= {prod.imageUrl}/></div>
                                        <h5 class="card-title text-center">{prod.productName}</h5>
                                        <center><button class="btn1"
                                                type="button"        
                                                onClick={productDetails}>
                                                Product Details
                                        </button></center><br/>
                                              
                                    </div>
                                </div>
                                <br/>
                            </Container>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )  
}
export default ProductListPage;