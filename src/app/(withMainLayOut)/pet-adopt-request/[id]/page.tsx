/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import { useEffect, useState } from "react";
import { getUserInfo } from "@/utils/auth/auth.service";
import { AuthKey } from "@/contants";
import { headers } from "next/headers";
import { toast } from "sonner";



const petAdoptPage = ({ params }: { params: { id: string } }) => {

  const id = params.id;
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BECKEN_URL}/profile`, {
      headers: {
        authorization: localStorage.getItem(AuthKey) as string
      }
    })
      .then(res => res.json())
      .then(data => {
        setUser(data.data);
      })
  }, [])

const handleAdoptionRequest = async(e:any)=>{
  e.preventDefault()
  const form = e.target
  // const name = form.fullName.value;
  const address = form.address.value;
  const phoneNumber = form.phoneNumber.value;
  // const email = form.email.value;
  const message = form.message.value;

const adoptionData = {
  petId:id,
  address,
  phoneNumber,
  message
}
const res = await fetch(`${process.env.NEXT_PUBLIC_BECKEN_URL}/adoption-requests`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": localStorage.getItem(AuthKey) as string
  },
  body: JSON.stringify(adoptionData)
});
const data =await res.json()
if(data.success){
  toast.success(data.message)
}
toast.error(data.message)
}
  return (
    <section className="min-h-screen">

      <div className="flex flex-col items-center justify-center  bg-gray-50 pb-10 min-h-screen md:px-0 px-3">
        <h1 className="text-center text-4xl my-2 font-bold rancho-regular">Pet Adoption Request</h1>
        <form onSubmit={handleAdoptionRequest} className="bg-white p-6 rounded shadow-md w-full max-w-2xl">
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-bold mb-2"
            >
              Your Name
            </label>
            <input
              required
              placeholder="Your Full Name"
              defaultValue={user?.name}
              type="text"
              id="fullName"
              name="fullName"
              className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-bold mb-2"
            >
              Your Full Address
            </label>
            <input
              placeholder="Your Address"
              required
              defaultValue={user?.address}
              type="text"
              id="address"
              name="address"
              className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
            />


            <div className="mb-4 mt-2">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 font-bold mb-2"
              >
                Your Phone Number
              </label>
              <input
                placeholder="Your Phone Number"
                required
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
              />
            </div>
          </div>


          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              required
              placeholder="Your Email"
              defaultValue={user.email}
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
            />
          </div>


          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              placeholder="Your message for us"
              id="message"
              name="message"
              // rows="4"
              className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                required
                placeholder="Your Email"
                type="checkbox"
                name="terms"
                className="form-checkbox h-5 w-5 text-blue-600"
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
              Request For Adoption
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default petAdoptPage;
