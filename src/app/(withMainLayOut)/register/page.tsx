// 'use client'

// import Link from "next/link";
// import React from "react";
// import { useForm, SubmitHandler } from "react-hook-form"
// import { FaFacebook } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";

// const RegisterPage = () => {

//   type TRegisterFormData= {
//     firstName?: string |undefined
//     lastName?: string |undefined
//     email:string;
//     password:string;
//     confirmPassword:string;
//   }
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm<TRegisterFormData>();

//   const onSubmit: SubmitHandler<TRegisterFormData> = (data) => {
//     const {firstName , lastName, email, password, confirmPassword}= data;

//     let name =''
//     if(firstName && lastName){
//       name= (firstName +" "+ lastName)
//     }
//     const bodyData={
//       name,
//       email,
//       password
//     }

//     console.log(name);
//   }

//   const password = React.useRef({});
//   password.current = watch("password", "");

//   return (
//     <section className="">
//       <div className="flex flex-col items-center justify-center  bg-gray-50 pb-10  md:px-0 px-3 py-10">
//         <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6  shadow-xl w-full max-w-xl pb-12 pt-10 rounded-md  ">
//           <h1 className="text-center text-4xl my-2 font-bold rancho-regular">
//             Please Register
//           </h1>

//           <div className="md:flex justify-between">
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 First Name
//               </label>
//               <input
//                 placeholder="First Name"
//                 {...register("firstName")}
//                 type="text"
//                 className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Last Name
//               </label>
//               <input
//                 placeholder="LastName"
//                 {...register("lastName", )}
//                 type="text"
//                 className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label
//               className="block text-gray-700 font-bold mb-2"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               {...register("email", { required: true } )}
//               placeholder="Email"
//               className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
//             />
//           </div>
//           <div className="md:flex justify-between">
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 password
//               </label>
//               <input
//                 type="password"
//                 {...register("password", { required: true } )}
//                 ref={register( "password",{
//                   required: "You must specify a password",
//                   minLength: {
//                     value: 8,
//                     message: "Password must have at least 8 characters"
//                   }
//                 })}
//                 placeholder="your password"
//                 className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
//               />
//             </div>
//             <div className="mb-4">
//               <label
//                 className="block text-gray-700 font-bold mb-2"
//               >
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 // {...register("confirmPassword", { required: true } )}
//                 ref={register( "confirmPassword",{
//                   validate: value =>
//                     value === password.current || "The passwords do not match"
//                 })}
//                 placeholder="Confirm Password"
//                 className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
//               />
//             </div>
//           </div>
//           <div className="mb-4">
//             <label className="inline-flex items-center">
//               <input
//                 placeholder="Your Email"
//                 type="checkbox"
//                 className="form-checkbox h-5 w-5 text-blue-600"
//                 required
//               />
//               <span className="ml-2 text-gray-700">
//                 I agree to the Terms and Conditions
//               </span>
//             </label>
//           </div>

//           <div className="text-center">
//             <button
//                type="submit"
//               className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
//             >
//               Register
//             </button>
//           </div>
//           <p className="my-5 text-center ">
//             Already have an account yet?{" "}
//             <Link href={"/login"}>
//               <span className="font-bold text-red-500">Login</span>
//             </Link>
//           </p>
//           <div className="flex flex-col md:flex-row justify-center mt-8 gap-4">
//             {/* Google Button */}
//             <button className="btn border border-red-500  bg-white text-red-500  hover:bg-transparent hover:shadow-md hover:ring-2 hover:ring-red-500 items-center space-x-2">
//               <FcGoogle className="text-xl" />
//               <span>Sign in with Google</span>
//             </button>
//             {/* Facebook Button */}
//             <button className="btn  btn-wid  border-red-500  bg-white text-red-500  hover:bg-transparent hover:shadow-md hover:ring-2 hover:ring-red-500 items-center space-x-2">
//               <FaFacebook className="text-xl text-[#1182D4]" />
//               <span>Sign in with Facebook</span>
//             </button>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default RegisterPage;
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";

const RegisterPage = () => {
 const router = useRouter()

  type TRegisterFormData = {
    firstName?: string | undefined;
    lastName?: string | undefined;
    email: string;
    password: string;
    confirmPassword: string;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TRegisterFormData>();

  const onSubmit: SubmitHandler<TRegisterFormData> = async(data) => {
    const { firstName, lastName, email, password, confirmPassword } = data;

    let name = "";
    if (firstName && lastName) {
      name = firstName + " " + lastName;
    }
    const bodyData = {
      name,
      email,
      password,
    };

    const request= await fetch(`${process.env.NEXT_PUBLIC_BECKEN_URL}/register`,{
      method :"POST",
      headers:{
           'content-type' : 'application/json'
      },
      body :JSON.stringify(bodyData),
    })
    const result= await request.json()
    console.log(result);
    if(result.success){
      router.push('/login')
      toast.success(result.message)
    }else{
      toast.error(result.message)

    }
  
  };

  const password = React.useRef({});
  password.current = watch("password", "");

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center  bg-gray-50 pb-10  md:px-0 px-3 py-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6  shadow-xl w-full max-w-xl pb-12 pt-10 rounded-md  "
        >
          <h1 className="text-center text-4xl my-2 font-bold rancho-regular">
            Please Register
          </h1>

          <div className="md:flex justify-between">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                First Name
              </label>
              <input
                placeholder="First Name"
                {...register("firstName")}
                type="text"
                className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Last Name
              </label>
              <input
                placeholder="LastName"
                {...register("lastName")}
                type="text"
                className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>
          <div className="md:flex justify-between">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "You must specify a password",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  },
                })}
                placeholder="Your password"
                className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === watch("password") || "The passwords do not match",
                })}
                placeholder="Confirm Password"
                className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                placeholder="Your Email"
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                required
              />
              <span className="ml-2 text-gray-700">
                I agree to the Terms and Conditions
              </span>
            </label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              Register
            </button>
          </div>
          <p className="my-5 text-center ">
            Already have an account yet?{" "}
            <Link href={"/login"}>
              <span className="font-bold text-red-500">Login</span>
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

export default RegisterPage;
