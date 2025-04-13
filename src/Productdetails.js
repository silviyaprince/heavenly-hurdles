import { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { FaBackwardStep } from "react-icons/fa6";
import Button from '@mui/material/Button';

import {API} from "./global";
export function Productdetails() {
  const { category, id } = useParams(); // Get dynamic route params
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
const navigate=useNavigate()
  useEffect(() => {
    const fetchProduct = async () => {
      
      try {
        const res = await fetch(`${API}/products/${category}/${id}`);
        console.log(category,id)
        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Failed to fetch product");
        }
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
      
    };

    fetchProduct();
  }, [category, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

    return (
      
    <div className="detail">
      <iframe width="90%" height="500" sx={{marginLeft:"80px"}} src={product.pic} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
    <div className="product-detail-container">
     
      <div className="product-detail-spec">
        <h3 className="product-name">{product.name}</h3>
        <h3  className="product-rating">
          ⭐{product.rating}
        </h3>
      </div>
  
      
      <div className="product-cat">
        <h3 className="product-price">₹{product.price}</h3>
      </div>
    </div>
    <p className="product-description">{product.description}</p>
    <Button startIcon={<FaBackwardStep />}variant="contained" onClick={()=>navigate(-1)}>BACK</Button>
  </div>
  
  
  );
  }

