'use client'

import { AuthKey } from "@/contants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";


  
const LoginPage = () => {
  const pathHistory= localStorage.getItem('redirectAfterLoginPath')
  const router= useRouter()
  const handleLogin=async(e:any)=>{
    e.preventDefault()
    const email= e.target.email.value;
    const password= e.target.password.value;
   const data={
    emailOrName:email,
    password
   }
  
 
  
  try {
    const  res= await fetch(`http://localhost:7000/api/login`,{
      method:"POST",
      headers :{
        'content-type' : 'Application/json'
      },
      body: JSON.stringify(data)
       })
      
       const result = await res.json()
  
       console.log(result);
  
       if(result.success){
        toast.success(result.message)
  
        localStorage.setItem(AuthKey, result.data.token)
        router.push(pathHistory ||'/')
        localStorage.removeItem('redirectAfterLoginPath')

  
       }
       else{
        toast.error(result.message)
       }
       
    
  } catch (error) {
    console.log(error);
  }
    
     
    
    }
  
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center  bg-gray-50 pb-10  md:px-0 px-3 py-20">
        <form onSubmit={handleLogin} className="bg-white p-6  shadow-xl w-full max-w-xl pb-20 pt-10 rounded-md  ">
          <h1 className="text-center text-4xl my-2 font-bold rancho-regular">
            Please Login
          </h1>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your email"
              className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="your password"
              className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>
          <p className="text-end my-2 font-semibold text-red-500 ">
            Forget password?
          </p>

          <div className="text-center">
            <button
              type="submit"
              className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Login
            </button>
          </div>
          <p className="my-5 text-center ">
            Doesn&apos;t have an account yet?{" "}
            <Link href={"/register"}>
              <span className="font-bold text-red-500">Register</span>
            </Link>
          </p>
          <div className="flex flex-col md:flex-row justify-center mt-8 gap-4">
            {/* Google Button */}
            <button className="btn border border-red-500  bg-white text-red-500  hover:bg-transparent hover:shadow-md hover:ring-2 hover:ring-red-500 items-center space-x-2">
              <FcGoogle className="text-xl" />
              <span>Sign in with Google</span>
            </button>
            {/* Facebook Button */}
            <button className="btn  btn-wid  border-red-500  bg-white text-red-500  hover:bg-transparent hover:shadow-md hover:ring-2 hover:ring-red-500 items-center space-x-2">
              <FaFacebook className="text-xl text-[#1182D4]" />
              <span>Sign in with Facebook</span>
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default LoginPage;
