import classes from "./EmployeeDashboardPage.css"
import { Link } from "react-router-dom";
import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import axios from "axios";
import { Container } from "@mui/material";

function EmployeeDashboardPage(){



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

    const empId = sessionStorage.getItem('empId');
    const location = useLocation();
    
    const [employee,setEmployee] = useState({});
    

    console.log(empId);
    async function getDetails(){
        await axios
        .get("http://localhost:8200/employee/"+empId[0].toString())
        .then((response)=>{
            // console.log(response.data);
            setEmployee(response.data);          
        });
        console.log(employee);
    }
    // console.log(empId);
    useEffect(()=>{
        getDetails();
    }, []);


    return(
        <div>
            <Container>
                <div class="row">
                    <div class="col">
                        <Container>
                            <video autoPlay loop muted plays-inline class="leftsidevideo">
                                <source src="https://player.vimeo.com/external/394498140.hd.mp4?s=3f23b35bd6e567af811bd88108f1279735cb86e2&profile_id=174&oauth2_token_id=57447761"/>
                            </video>  
                        </Container>
                    </div>
                    <div class="col">
                        <Container>
                            <div class="upslide">
                                <div class="row">
                                    <div class="col-4">
                                        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                                            <div class="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                
                                            </div>
                                            <div class="carousel-inner">
                                                <div class="carousel-item active" data-bs-interval="2000">
                                                    <img src="https://d2poqm5pskresc.cloudfront.net/wp-content/uploads/2021/12/banking-services-featured.jpg" class="d-block w-100" alt="..."></img>              
                                                    <div class="carousel-caption d-none d-md-block">
                                                        <h2>Bank Product</h2>
                                                        
                                                    </div>
                                                </div>
                                                <div class="carousel-item" data-bs-interval="2000">
                                                    <img src="https://repository-images.githubusercontent.com/258924607/963d4300-8806-11ea-8625-78fa96781588" class="d-block w-100" alt="..."></img>
                                                    <div class="carousel-caption d-none d-md-block">
                                                        <h3>Bank Project</h3>

                                                    </div>
                                                </div>
                                                <div class="carousel-item" data-bs-interval="2000">
                                                    <img src="https://images.simplywall.st/asset/industry/7021000-choice1-main-header/1585186662944" class="d-block w-100" alt="..."></img>
                                                    <div class="carousel-caption d-none d-md-block">
                                                        <h3>Bank Policy</h3>

                                                    </div>
                                                </div>
                                                <div class="carousel-item" data-bs-interval="2000">
                                                    <img src="https://images.livemint.com/img/2020/02/03/1600x900/a38b056c-4669-11ea-a5fb-3f3a3457eb82_1580746440269_1580746801636.jpg" class="d-block w-100" alt="..."></img>
                                                    <div class="carousel-caption d-none d-md-block">
                                                        <h3>Employee Details</h3>
                                                    </div>
                                                </div>

                                            </div>
                                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Previous</span>
                                            </button>
                                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="visually-hidden">Next</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-5">
                    
                                    </div>
                                </div>
                                <br/><br/><br/><br/><br/>
                            </div>
                        </Container>
                    </div>    
                    <Container>
                        <div class="edpage">
                            <video autoPlay loop muted plays-inline class="backvideo">
                                <source src="https://player.vimeo.com/external/194096190.sd.mp4?s=dee63d78883ffd1721877e6e7e51c185ca8f5d85&profile_id=164&oauth2_token_id=57447761"/>
                            </video> 
                            
                            <div class="heading2">
                            <Container><br/><h1 class="prodheading2"><b>News Feed</b></h1></Container><br/>
                            <div class="line1"></div>
                            <div class="p1"><p>NEWS literacy is the ability to use 
                                    critical thinking skills to judge the reliability
                                    and credibility of news reports and information sources.
                                </p></div>
                                <p>If you want to aware with latest news then
                                    you can click on News Explore and you can get 
                                    every news of our company in one place.
                                </p>
                                <Link to="/newsfeed" class="btn"><b>News Explore</b><ArrowRightAltIcon/></Link>

                            </div>          
                            <br/><br/><br/><br/>
                        </div>      
                    </Container>
                </div>
                <div>
                    <Container><br/><h1 class="prodheading1">Product List</h1><hr/></Container><br/>
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
            </Container>     
        </div>
    )
}
export default EmployeeDashboardPage;

