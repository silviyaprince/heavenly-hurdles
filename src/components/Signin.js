import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import { API } from "../global";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { ProductContext } from "./ProductContext";

const formValidationSchema = yup.object({
  email: yup
    .string()
    .max(30, "good")
    .required()
    .matches(/^[A-Z0-9.%+-]+@[A-Z0-9.+]+\.[A-Z].{2,}$/i, "enter valid email"),
  password: yup
    .string()
    .min(8, "too short")
    .max(12, "too long")
    .required()
    .matches(
      /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[!@#$%^&*()]).{8,}$/,
      "enter a valid password"
    ),
});

export function Signin() {
  const navigate = useNavigate();
  const [err, setErr] = useState("");
const {user,setUser}=useContext(ProductContext)
  const handleLogin = async (values) => {
    const payload = {
      email: values.email,
      password: values.password,
    };
    console.log(payload);
    const res = await fetch(`${API}/users/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log("Form submitted");
    if (data.token) {
      setErr("");
      setErr("");
      localStorage.setItem("token", data.token); // Store token in localStorage
      const decodedUser = jwtDecode(data.token); // Decode to check user role
      setUser(decodedUser.role)
      console.log(user)
      if (decodedUser.role === "admin") {
        navigate("/"); // Navigate to admin dashboard
      } else {
        navigate("/shop"); // Navigate to shop
      }
    } else {
      // Show error message
      setErr(data.message || "Login failed");
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formValidationSchema,

    //

    //
    onSubmit: handleLogin,
  });

  // ...return form JSX

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
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900">
                Email
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ""}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500">
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
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : ""}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign in
              </button>
              {err ? <h3>{err}</h3> : ""}
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <div
              onClick={() => navigate("/users/signup")}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign up
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
