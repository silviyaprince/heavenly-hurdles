import { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { useFormik } from "formik";
import * as yup from "yup";
import {API} from "../global";

const productValidationSchema = yup.object({
  name: yup.string().required("name is required"),
  price: yup.string().required("Why not fill the price?"),
  mrp: yup.number().required("Why not fill the mrp?"),
  quantity: yup.number().required("Why not fill the quantity?"),
  poster: yup
    .string()
    .min(10, "Need a longer poster")
    .required("Why not fill the poster?"),
  
  rating: yup
    .number()
    .min(0, "Need a longer rating")
    .max(10, "Too much rating")
    .required("Why not fill the rating?"),
  description: yup
    .string()
    .min(10, "Need a longer description")
    .max(500, "Too much description")
    .required("Why not fill the description?"),
});
export function Addstock() {
  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      mrp: "",
      quantity: "",
      poster: "",
      rating: "",
      description: "",
    },
    validationSchema: productValidationSchema,
    onSubmit: (newProduct) => {
      console.log("onSubmit=newProduct", newProduct);
      createProduct(newProduct);
    },
  });

  const{selectedCategory,handleCategoryChange,categories,selectedSubcategory,handleSubcategoryChange,getSubcategories,selectedItem,handleItemChange,getItems}=useContext(ProductContext)

  // const createProduct = (newProduct) => {
  //   console.log(newProduct);
  //   fetch(`${API}/products/${selectedItem}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newProduct),
  //   })
  //     .then((res) => res.json())
  //     // .then(() => navigate("/products"));
  // };

  const createProduct = async (newProduct) => {
    try {
      const response = await fetch(`${API}/products/${selectedItem}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Product created:", data);
    } catch (error) {
      console.error("Error creating product:", error.message);
    }
  };

  


  

  return (
    <form onSubmit={formik.handleSubmit} className="">
    <div className="space-y-3">
      <div className="border-b border-gray-900/10 pb-8">
        <h3 className="font-display font-bold">FILL OUT PRODUCT DETAILS</h3>

        
      </div>

      <div className="border-b border-gray-900/10 pb-8">


        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Product name
            </label>
            <div className="mt-2">
              <input
                id="name"
               name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
        onBlur={formik.handleBlur}
                type="text"
                
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {formik.touched.name && formik.errors.name ? formik.errors.name : ""}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
               Product price
            </label>
            <div className="mt-2">
              <input
                id="price"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
        onBlur={formik.handleBlur}
                type="text"
               
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {formik.touched.price && formik.errors.price ? formik.errors.price : ""}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="mrp" className="block text-sm font-medium leading-6 text-gray-900">
               Product MRP
            </label>
            <div className="mt-2">
              <input
                id="mrp"
                name="mrp"
                value={formik.values.mrp}
                onChange={formik.handleChange}
        onBlur={formik.handleBlur}
                type="number"
                
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {formik.touched.mrp && formik.errors.mrp ? formik.errors.mrp : ""}
            </div>
          </div>
          <div className="sm:col-span-4">
            <label htmlFor="poster" className="block text-sm font-medium leading-6 text-gray-900">
              Product poster
            </label>
            <div className="mt-2">
              <input
                id="poster"
                name="poster"
                value={formik.values.poster}
                onChange={formik.handleChange}
        onBlur={formik.handleBlur}
                type="text"
                
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {formik.touched.poster && formik.errors.poster
        ? formik.errors.poster
        : ""}
            </div>
          </div>

          
          <div className="sm:col-span-3">
         <label htmlFor="productcategory" className="block text-sm font-medium leading-6 text-gray-900">
          Product category
        </label>
           <div className="mt-2"> 
        {/* Category Dropdown */}
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          {Object.keys(categories).map((categoryKey) => (
            <option key={categoryKey} value={categoryKey}>
              {categoryKey.replace(/([A-Z])/g, " $1")} {/* Converts camelCase to spaced words */}
            </option>
          ))}
        </select>
        </div>
        </div>
  
        <div className="sm:col-span-3 mt-4">
          <label htmlFor="productsubcategory" className="block text-sm font-medium leading-6 text-gray-900">
            Product subcategory
          </label>
          <div className="mt-2">
        {selectedCategory && (
          <select value={selectedSubcategory} onChange={handleSubcategoryChange}>
            <option value="">Select Subcategory</option>
            {getSubcategories().map((subcategory) => (
              <option key={subcategory.title} value={subcategory.title}>
                {subcategory.title}
              </option>
            ))}
          </select>
        )}
        </div>
        </div>
  
        {/* Item Dropdown */}
        <div className="sm:col-span-3 mt-4">
          <label htmlFor="productsubcategory" className="block text-sm font-medium leading-6 text-gray-900">
           Category Item
          </label>
          <div className="mt-2">
        {selectedSubcategory && (
          <select value={selectedItem} onChange={handleItemChange}>
            <option value="">Select Item</option>
            {getItems().map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        )}
  </div>
  </div>

      
          <div className="col-span-full">
            <label htmlFor="rating" className="block text-sm font-medium leading-6 text-gray-900">
             Product rating
            </label>
            <div className="mt-2">
              <input
                id="rating"
                name="rating"
                value={formik.values.rating}
                onChange={formik.handleChange}
        onBlur={formik.handleBlur}
                type="number"
                
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {formik.touched.rating && formik.errors.rating
        ? formik.errors.rating
        : ""}
            </div>
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="quantity" className="block text-sm font-medium leading-6 text-gray-900">
               Product Quantity
            </label>
            <div className="mt-2">
              <input
                id="quantity"
                name="quantity"
                value={formik.values.quantity}
                onChange={formik.handleChange}
        onBlur={formik.handleBlur}
                type="number"
            
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {formik.touched.quantity && formik.errors.quantity? formik.errors.quantity: ""}
            </div>
          </div>
          <div className="sm:col-span-3 sm:col-start-1">
            <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
             Product description
            </label>
            <div className="mt-2">
              <input
                id="description"
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
        onBlur={formik.handleBlur}
                type="text"
               
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {formik.touched.description && formik.errors.description
        ? formik.errors.description
        : ""}
            </div>
          </div>
</div>
      </div>

      <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">bnbmbnbnbnb</h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          We'll always let you know about important changes, but you pick what else you want to hear about.
        </p>

 
      </div>
    </div>

    <div className="mt-6 flex items-center justify-end gap-x-6">
      <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
        Cancel
      </button>
      <button
        type="submit"
       
        className="rounded-md bg-primary2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </div>
  </form>
  )
}

export default Addstock



