import React, { useContext } from 'react'
import { useFormik } from "formik";
import{API} from "../global";
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { ProductContext } from './ProductContext';

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


export  function Signin() {
  const { setUser, setIsAuthenticated } =useContext(ProductContext)
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: async (values) => {
      console.log("Attempting to log in...", values);
      try {
          const response = await fetch(`${API}/users/login`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
          });

          const data = await response.json();
          if (response.ok) {
              console.log('Login successful:', data);
              // Store token in local storage or context
              localStorage.setItem('token', data.token);
              console.log(data.token)
              const decoded = jwtDecode(data.token);
          setUser(decoded); // Set user in context
          setIsAuthenticated(true); // Update authentication state

              // Redirect to the dashboard or home page
             navigate("/shop") // or use navigate('/dashboard') in v6
          } else {
              console.error('Login failed:', data.message);
              // Handle error (e.g., display error message)
          }
      } catch (error) {
          console.error('Error during login:', error);
      }
  },
});

// ...return form JSX

  const navigate=useNavigate();
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
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

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
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
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <div onClick={()=>navigate("/users/signup")} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign up
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}
