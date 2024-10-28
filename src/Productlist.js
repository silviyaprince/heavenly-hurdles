import { useContext } from "react";
import { useEffect,useState } from "react";
import { ProductContext } from "./components/ProductContext";
import {API} from "./global";
import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
export function Productlist() {
  const{selectedCategoryItem}=useParams();
  const {setDisplayedProducts,displayedProducts,addtocart,cartItems} = useContext(ProductContext);

  const getProducts=()=>{
    fetch(`${API}/products/${selectedCategoryItem}`,{
      method:"GET"
    })
    .then((res)=>res.json())
    .then((data)=>setDisplayedProducts(data))
  }
  useEffect(()=>getProducts(),[selectedCategoryItem])
  
//using redux-toolkit

  return (
    <div className="bg-zinc-300">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {displayedProducts.map((product) => {
            const cartItemAmount=cartItems[product.id]||0;
return(
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.pic}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
              <button onClick={()=>addtocart(product.id)} className="ml-1 w-30 px-2 lg:ml-20 block rounded-md bg-primary2 px-3 py-2 text-md font-medium font-display font-semibold text-white hover:bg-primary1 ">ADD TO CART {cartItemAmount>0&&<>({cartItemAmount})</>}</button>
            </div>
)
})}
        </div>
      </div>
    </div>
    
  );
}
