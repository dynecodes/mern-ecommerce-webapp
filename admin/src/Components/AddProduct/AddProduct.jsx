import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/upload_area.svg';

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: ""
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    await fetch('https://mern-ecommerce-webapp-back-end.onrender.com/upload', { // Updated URL
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData,
    }).then((resp) => resp.json()).then((data) => { responseData = data });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch('https://mern-ecommerce-webapp-back-end.onrender.com/addproduct', { // Updated URL
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }).then((resp) => resp.json()).then((data) => {
        data.success ? alert("Product Added") : alert("Failed");
      });
    }
  };

  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here' />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here' />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_area} className='addproduct-thumbnail-img' />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>
      <button onClick={() => { Add_Product() }} className='addproduct-btn'>ADD</button>
    </div>
  );
}

export default AddProduct;


// import React, { useState } from "react";
// import axios from "axios";

// const AddProduct = () => {
//   const [product, setProduct] = useState({
//     name: "",
//     image: "",
//     category: "",
//     price: "",
//   });

//   const backendBaseURL = "https://mern-ecommerce-webapp-back-end.onrender.com"; // Your backend URL

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("product", file);

//     try {
//       const response = await axios.post(`${backendBaseURL}/upload`, formData);
//       const responseData = response.data;

//       if (responseData.success) {
//         // Always store full backend URL
//         setProduct((prev) => ({
//           ...prev,
//           image: `${backendBaseURL}${responseData.image_url}`,
//         }));
//       }
//     } catch (error) {
//       console.error("Image upload failed:", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`${backendBaseURL}/addproduct`, product);
//       if (response.data.success) {
//         alert("Product added successfully");
//         setProduct({ name: "", image: "", category: "", price: "" });
//       }
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Product name"
//         value={product.name}
//         onChange={(e) => setProduct({ ...product, name: e.target.value })}
//       />
//       <input type="file" onChange={handleImageUpload} />
//       <input
//         type="text"
//         placeholder="Category"
//         value={product.category}
//         onChange={(e) => setProduct({ ...product, category: e.target.value })}
//       />
//       <input
//         type="number"
//         placeholder="Price"
//         value={product.price}
//         onChange={(e) => setProduct({ ...product, price: e.target.value })}
//       />
//       <button type="submit">Add Product</button>
//     </form>
//   );
// };

// export default AddProduct;

