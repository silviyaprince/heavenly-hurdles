// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import Usercontext from "./Usercontext";




// export function Product({ product }) {
//   const navigate=useNavigate()
//   return (
//     <div className="bg-white">
//     <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//       <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
    
//       <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//         {Category.items.map((product) => (
//           <div key={product.id} className="group relative">
//             <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//               <img
//                 alt={product.imageAlt}
//                 src={product.imageSrc}
//                 className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//               />
//             </div>
//             <div className="mt-4 flex justify-between">
//               <div>
//                 <h3 className="text-sm text-gray-700">
//                   <button href={product.href}>
//                     <span aria-hidden="true" className="absolute inset-0" />
//                     {product.name}
//                   </button>
//                 </h3>
//                 <p className="mt-1 text-sm text-gray-500">{product.color}</p>
//               </div>
//               <p className="text-sm font-medium text-gray-900">{product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
   
//   );
// }





//  <div>
// <img onClick={()=>navigate("/products/"+id)} className="camp-picture" src={product.pic} alt="camp-pic" />
// <h4 className="camp-name">{product.name}-{id}</h4>
// <h5 className="camp-rating">{product.rating}</h5>
// <p className="camp-description">{product.description}</p>
// <h4 className="camp-price">{product.price}</h4>
// <button className="camp-button">ADD TO CART</button>
// </div> 