

import { useState } from "react";
import { API } from "../global";
import { useFormik } from "formik";

import * as yup from 'yup';
import { useNavigate } from "react-router-dom";





const formValidationSchema = yup.object({
  username: yup
  .string()
  .max(25, " name must be at most 25 characters")
  .required("name is required"),
    email: yup
      .string()
      .max(30, "too short")
      .required()
      .matches(/^[A-Z0-9.%+-]+@[A-Z0-9.+]+\.[A-Z].{2,}$/i,"enter valid email"),
    password: yup
      .string()
      .min(8, "too short")
      .max(12, "too long")
      .required()
      .matches(/^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[!@#$%^&*()]).{8,}$/,"enter a valid password"),
      city: yup
    .string()
    .max(50, "City name must be at most 50 characters")
    .required("City is required"),
  postalCode: yup
    .string()
    .matches(/^\d{6}$/, "Enter a valid postal code (e.g., 600099)")    .required("Postal code is required"),
  street: yup
    .string()
    .max(100, "Street name must be at most 100 characters")
    .required("Street is required"),
  state: yup
  .string()
  .matches(/^[A-Za-z\s]+$/,"State must only contain letters and spaces") 
  .max(50, "State name must be at most 50 characters") // Reasonable length limit for state names
  .required("State is required"),
  country: yup
  .string()
  .required("select the country"),
  phonenumber: yup
  .string()
  .required()
  .matches(/^[0-9]{10}$/, "enter a valid phone number"),

  });
  

export function Signup(){
  const [err,setErr]=useState("")

  const handleSignup=async(values)=>{
    const payload={
        username:values.username,
        password:values.password,
        email:values.email,
        country:values.country,
        street:values.street,
        city:values.city,
        state:values.state,
        postalCode:values.postalCode,
        phonenumber:values.phonenumber,
    }
    console.log("handleSignup invoked") 
console.log(payload)
    const res=await fetch(`${API}/users/signup`,{
        method:"POST",
        body:JSON.stringify(payload),
        headers:{
            "Content-type":"application/json"
        }
    })
    const data=await res.json()
    if(res.status === 201){
        setErr("")
        
        navigate("/users/signin")
    }else{
        setErr(data.error)
    }
}
  
    const formik = useFormik({
        initialValues: {
          username: "",
          email:"",
          password: "",
          country:"",
          street: "",
          city: "",
    postalCode: "",
    state: "",
    phonenumber:"",
        },
        validationSchema: formValidationSchema,
        onSubmit: handleSignup
        
      });

    const navigate=useNavigate()
    

    
   
    return(
      <form onSubmit={formik.handleSubmit}>
          <div className="space-y-12">
      <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base/7 font-semibold text-gray-900">REGISTER HERE</h2>
      <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
            User name
          </label>
          <div className="mt-2">
            <input
              id="username"
              name="username"
              type="text"
              value={formik.values.username}
                     onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                     required
              autoComplete="given-name"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
                                          {formik.touched.username && formik.errors.username? formik.errors.username: ""}

          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
            Password
          </label>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="text"
              value={formik.values.password}
              onChange={formik.handleChange}
             onBlur={formik.handleBlur}
              required
              autoComplete="family-name"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
                                          {formik.touched.password && formik.errors.password? formik.errors.password: ""}

          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
             onBlur={formik.handleBlur}
              required
              autoComplete="email"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
                                          {formik.touched.email && formik.errors.email? formik.errors.email: ""}

          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
            Country
          </label>
          <div className="mt-2 grid grid-cols-1">
            <select
              id="country"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
             onBlur={formik.handleBlur}
              required
              autoComplete="country-name"
              className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            >
              <option>India</option>
              <option>Singapore</option>
              <option>Mexico</option>
            </select>
            {formik.touched.country && formik.errors.country? formik.errors.country: ""}

          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
            Street address
          </label>
          <div className="mt-2">
            <input
              id="street"
              name="street"
              type="text"
              value={formik.values.street}
              onChange={formik.handleChange}
             onBlur={formik.handleBlur}
              required
              autoComplete="street-address"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
                                          {formik.touched.street && formik.errors.street? formik.errors.street: ""}

          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
            City
          </label>
          <div className="mt-2">
            <input
              id="city"
              name="city"
              type="text"
              value={formik.values.city}
              onChange={formik.handleChange}
             onBlur={formik.handleBlur}
              required
              autoComplete="address-level2"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
                                          {formik.touched.city && formik.errors.city? formik.errors.city: ""}

          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">
            State / Province
          </label>
          <div className="mt-2">
            <input
              id="state"
              name="state"
              type="text"
              value={formik.values.state}
              onChange={formik.handleChange}
             onBlur={formik.handleBlur}
              required
              autoComplete="address-level1"
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
                                          {formik.touched.state && formik.errors.state? formik.errors.state: ""}

          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
            ZIP / Postal code
          </label>
          <div className="mt-2">
            <input
              id="postalCode"
              name="postalCode"
              type="text"
              value={formik.values.postalCode}
              onChange={formik.handleChange}
             onBlur={formik.handleBlur}
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
                              {formik.touched.postalCode && formik.errors.postalCode? formik.errors.postalCode: ""}

          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="phonenumber" className="block text-sm/6 font-medium text-gray-900">
            Phone Number
          </label>
          <div className="mt-2">
            <input
              id="phonenumber"
              name="phonenumber"
              type="tel"
              value={formik.values.phonenumber}
              onChange={formik.handleChange}
             onBlur={formik.handleBlur}
              required
              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
                              {formik.touched.phonenumber && formik.errors.phonenumber? formik.errors.phonenumber: ""}

          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="mt-6 flex items-center justify-end gap-x-6">
        
        <button
          type="submit"
          className="text-center rounded-md bg-primary2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          SAVE
        </button>
               {err?<div className="text-red-500">{err}</div>:""}

      </div>
    </form>
        
   
    )
}








