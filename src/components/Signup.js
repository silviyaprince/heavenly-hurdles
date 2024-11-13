import { useState } from "react";
import { API } from "../global";
import { useFormik } from "formik";

import * as yup from 'yup';
import { useNavigate } from "react-router-dom";


const formValidationSchema = yup.object({
    username: yup
      .string()
      .max(20, "needed maximum of 12 characters")
      .required()
      .matches(/^[A-Z0-9.%+-]+@[A-Z0-9.+]+\.[A-Z].{2,}$/i,"enter valid email"),
    password: yup
      .string()
      .min(8, "too short")
      .max(12, "too long")
      .required()
      .matches(/^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[!@#$%^&*()]).{8,}$/,"enter a valid password"),
  });
  

export function Signup(){
  const [err,setErr]=useState("")

  const handleSignup=async(values)=>{
    const payload={
        username:values.username,
        password:values.password
    }
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
        // localStorage.setItem("token",data.token)
        navigate("/")
    }else{
        setErr(data.error)
    }
}
  
    const formik = useFormik({
        initialValues: {
          username: "",
          password: "",
        },
        validationSchema: formValidationSchema,
        onSubmit: handleSignup
        
      });

    const navigate=useNavigate()
    

    
   
    return(
        <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              REGISTER HERE
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={formik.handleSubmit}  className="space-y-6">

            <div>
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="username" 
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                   
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {formik.touched.username && formik.errors.username? formik.errors.username: ""}
                </div>
              </div>

              {/* <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
   */}
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                 
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password" 
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
                {err?<div className="text-red-500">{err}</div>:""}
              </div>
            </form>
  
           
          </div>
        </div>
      </div>
    )
}