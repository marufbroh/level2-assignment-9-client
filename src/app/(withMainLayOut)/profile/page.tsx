"use client";

import PetCard from "@/components/ui/HomePage/petCards/page";
import AdoptedPetCard from "@/components/ui/HomePage/profile/AdoptedPetCard/AdoptedPetCard";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

const MyProfile = () => {
  return (
    <section className="min-h-screen bg-slate-50">
        {/* profile navbar section */}
      <section className="py-4 px-3">
        <h1 className="text-4xl font-bold mb-4 rancho-regular text-[#3C0040]">
          My Account
        </h1>

        <div className="hidden sm:flex justify-between text-2xl space-x-6 border-b-2 border-gray-200 pb-2">
          <a
            href="#account-details"
            className="flex items-center space-x-1 text-purple-700"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <span>Account Details</span>
          </a>

          <a
            href="#favorites"
            className="flex items-center space-x-1 text-gray-600 hover:text-purple-700"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span> Favorites</span>
          </a>
          <a
            href="#inquiries"
            className="flex items-center space-x-1 text-gray-600 hover:text-purple-700"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 6.5l-1.5 1.5-5.5-5.5 1.5-1.5c.29-.29.68-.44 1.09-.44s.8.15 1.09.44l3.32 3.32c.29.29.44.68.44 1.09s-.15.8-.44 1.09zM12 10l6 6H7l-4 4v-4L12 10zm-1-2H5.5l-.87-2.6c-.06-.19-.09-.39-.09-.6 0-.55.45-1 1-1h1.5l3 3z" />
            </svg>
            <span>Your Adopted pet</span>
          </a>
        </div>

        <div className="sm:hidden mb-4">
          <label
            htmlFor="accountOptions"
            className="block text-gray-700 font-bold mb-2"
          >
            Account Options
          </label>
          <select
            id="accountOptions"
            name="accountOptions"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => {
              const selectedOption = e.target.value;
              //   if (selectedOption) {
              //     document
              //       .getElementById(selectedOption)
              //       .scrollIntoView({ behavior: "smooth" });
              //   }
            }}
          >
            <option value="account-details" selected>
              Account Details
            </option>
            <option value="inquiries">Your Adopted pets</option>
            <option value="favorites">Favorites</option>
          </select>
        </div>
      </section>
      {/* change password section */}
      <section>
        <h1 className="rancho-regular text-3xl text-[#3C0040] my-5 px-3">
          Change Password
        </h1>
        <div className="px-3 md:px-10">
          <div className=" flex gap-5  flex-col md:flex-row justify-evenly items-center h-[10rem] bg-white border border-slate-200 rounded-2xl">
            <h1 className="rancho-regular text-3xl text-[#3C0040]">
              create a new Password
            </h1>
            <button className="bg-[#C74D2F] px-5 py-2 text-xl text-white font-bold rounded-full">
              Change Password
            </button>
          </div>
        </div>
      </section>
       {/* personal information section */}
      <section>
        <h1 className=" text-3xl md:text-4xl text-start my-8 font-bold rancho-regular px-3">
          Personal Information
        </h1>
        <div className=" pb-10 my-5  md:px-10 px-3 ">
          <div className="border border-slate-200  bg-white w-full  rounded-2xl px-2 ">
            <form className=" w-full max-w-xl pb-12 pt-10 mx-auto rounded-md  ">
              <div className="md:flex justify-between ">
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Your Full Name
                  </label>
                  <input
                    placeholder="Your Email"
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="fullName"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    placeholder="Your Email"
                    type="text"
                    id="fullName"
                    name="fullName"
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
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your email"
                  className="w-full px-3 py-2 border border-red-500 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
                />
              </div>
              <div className="md:flex justify-between">
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
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input
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
                  Save Change
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* my adopted pets section */}
      <section className="md:px-6 px-3">
      <h1 className="rancho-regular px-3  uppercase text-4xl font-bold my-6 mb-8 ">
        Your Adopted Pets
      </h1>
      <div className="grid grid-cols-1 px-2  md:grid-cols-1 lg:grid-cols-2 gap-4 my-5">
        {
          [1,2,3,4,5,6,].map((pet, index)=><AdoptedPetCard  key={index} messageNumber={index}  />)
        }
       
      </div>
      </section>
    </section>
  );
};

export default MyProfile;
