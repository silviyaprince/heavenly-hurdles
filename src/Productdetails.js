import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { FaBackwardStep } from "react-icons/fa6";
import Button from '@mui/material/Button';

import {API} from "./global";
export function Productdetails() {
const {category}=useParams();
    const { productid } = useParams();
    const [product,setProduct]=useState({})
    useEffect(()=>{
      fetch(`${API}/products/${category}/${productid}`,{
        method:"GET"
      })
      .then((res)=>res.json())
      .then((data)=>setProduct(data))
    })
    const navigate=useNavigate();
    return (
    <div className="detail">
      <iframe width="90%" height="500" sx={{marginLeft:"80px"}} src={product.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
    <div className="product-detail-container">
     
      <div className="product-detail-spec">
        <h3 className="product-name">{product.name}</h3>
        <h3  className="product-rating">
          ⭐{product.rating}
        </h3>
      </div>
  
      
      <div className="product-cat">
        <h3 className="product-price">₹{product.price}</h3>
        <h3 className="product-category">{product.category}</h3>
      </div>
    </div>
    <p className="product-description">{product.description}</p>
    <Button startIcon={<FaBackwardStep />}variant="contained" onClick={()=>navigate(-1)}>BACK</Button>
  </div>
  
  
  );
  }

