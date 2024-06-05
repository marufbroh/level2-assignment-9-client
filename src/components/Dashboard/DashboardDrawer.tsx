"use client";
import Link from "next/link";
import React, { ReactNode, useState } from "react";

const Dashboard = ({ children }:{children:ReactNode}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <section className="min-h-screen  flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-200 ease-in-out w-60 bg-white shadow-md z-30`}
      >
        <div className="p-6">
         <Link href={'/'}> <div className="text-2xl  font-bold"> Pet Harmony</div></Link>
          <nav className="mt-10">
           
           
            {/* <Link
              href="/dashboard"
              className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
            >
              <i className="material-icons">Dashboard</i>
            
            </Link> */}
            <Link
              href="/dashboard/user-management"
              className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
            >
              <i className="material-icons">User Mangement</i>
            
            </Link>
            <Link
              href="/dashboard/pet-management"
              className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
            >
              <i className="material-icons"> Pet Management</i>
            
            </Link>
            <Link
              href="/dashboard/pet-request"
              className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
            >
              <i className="material-icons">All Pet Request</i>
            
            </Link>
            {/* <Link
              href="#"
              className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
            >
              <i className="material-icons">Password</i>
            
            </Link> */}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1  md:ml-60">
        <header className="mb-8 p-6 flex justify-between items-center border bg-[#F2F6FC] ">
          <h1 className="text-2xl font-semibold">Good Morning</h1>
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <i className="material-icons">menu</i>
          </button>
        </header>

       <div className="p-2 ">
       {children}
       </div>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </section>
  );
};

export default Dashboard;
