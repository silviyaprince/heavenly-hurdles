import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Usercontext from "./Usercontext";




export function Product({ product,id }) {
  const navigate=useNavigate()
  return (
    <div>
      <img onClick={()=>navigate("/products/"+id)} className="camp-picture" src={product.pic} alt="camp-pic" />
      <h4 className="camp-name">{product.name}-{id}</h4>
      <h5 className="camp-rating">{product.rating}</h5>
      <p className="camp-description">{product.description}</p>
      <h4 className="camp-price">{product.price}</h4>
      <button className="camp-button">ADD TO CART</button>
    </div>
  );
}
