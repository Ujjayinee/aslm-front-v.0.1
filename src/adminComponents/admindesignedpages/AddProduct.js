import { Container } from "@mui/system";
import { useState, useEffect } from "react";
import axios from "axios";

function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    let prodData = {productName,productType,imageUrl,description};
    console.log("prod data: ",prodData);
    axios.post("http://localhost:9100/product", prodData).then((response) => {
            console.log(response.data);
            alert("Product Added");
        })
  }
  return (
    <div>
      <br />
      <Container>
      <h1>Add Product</h1><hr/>
                <div class="shadow p-3 mb-5 bg-white rounded">
                    <form onSubmit={handleSubmit} class="row g-3" >
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Product Name</label>
                            <input type="textarea" class="form-control" id="inputEmail4"
                                    value={productName} 
                                    onChange={(e)=>setProductName(e.target.value)}>
                            </input>
                        </div>
                        <div class="col-md-12">
                            <label for="inputPassword4" class="form-label">
                                Product Type
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="inputPassword4"
                                value={productType} onChange={(e)=>setProductType(e.target.value)}>
                            </input>
                        </div>
                        <label for="inputPassword4" class="form-label">Image URL</label>
                        <input type="text" class="form-control" id="inputPassword4"
                                value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}>
                        </input>
                        <div class="col-md-12">
                            <label for="inputPassword4" class="form-label">
                                Description
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                id="inputPassword4"
                                value={description} onChange={(e)=>setDescription(e.target.value)}>
                            </input>
                        </div>
                        <div class="col-12">
                          <button type="submit" class="btn btn-danger bg-gradient">
                            Add Product
                          </button>
                        </div>
                  </form>
                </div>      
            </Container>
    </div>
  );
}
export default AddProduct;
