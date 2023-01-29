import { Container } from "@mui/system";
function ProductDetailsPage(){
    let proId=sessionStorage.getItem('productId');
    let prodName=sessionStorage.getItem('productName');
    let prodType=sessionStorage.getItem('productType');
    let imageUrl=sessionStorage.getItem('imageUrl');
    let desc=sessionStorage.getItem('description');
    return(
        <div>
            <div class="row">
                <div class="col-3"></div>
                <div class="col-6">
                    <Container><center><h2>Details of {prodName}</h2></center><hr/></Container>
                    <Container>
                        <div class="card mb-3">
                            <img src={imageUrl} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">{prodName}</h5>
                                <p class="card-text">{desc}</p>
                                <center><p class="card-text text-light"><small>{prodType}</small></p></center>
                            </div>
                        </div>
                    </Container>
                </div>
                <div class="col-3"></div>
            </div>
        </div>
    )
}
export default ProductDetailsPage;