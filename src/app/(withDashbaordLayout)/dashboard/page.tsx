
'use client'
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Dashboard = () => {
const router= useRouter()
const path= usePathname()

if(path==='/dashboard'){
   router.push('/dashboard/admin')
}

  // return (
  //   <>
  //   {/* <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
  //   <div className="p-4 bg-white rounded shadow">
  //     <h2 className="text-xl font-semibold">Title</h2>
  //     <p className="text-gray-600">Subtitle</p>
  //   </div>
  //   <div className="p-4 bg-white rounded shadow">
  //     <h2 className="text-xl font-semibold">Title</h2>
  //     <p className="text-gray-600">Subtitle</p>
  //   </div>
  //   <div className="p-4 bg-white rounded shadow">
  //     <h2 className="text-xl font-semibold">Title</h2>
  //     <p className="text-gray-600">Subtitle</p>
  //   </div>
  //   <div className="p-4 bg-white rounded shadow">
  //     <h2 className="text-xl font-semibold">Title</h2>
  //     <p className="text-gray-600">Subtitle</p>
  //   </div>
  //   </section> */}

  // {/* <section className="bg-white p-6 rounded shadow overflow-x-auto">
  //         <h2 className="text-xl font-semibold mb-4">All pet adoption requests</h2>
  //         <table className="min-w-full text-left border-collapse">
  //           <thead>
  //             <tr>
  //               <th className="border-b p-4">Serial</th>
  //               <th className="border-b p-4">Adopter Name</th>
  //               <th className="border-b p-4">Email</th>
  //               <th className="border-b p-4">Address</th>
  //               <th className="border-b p-4">Status</th>
  //               <th className="border-b p-4">View</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {[1, 2, 3, 4, 5].map((_, i) => (
  //               <tr key={i}>
  //                 <td className="border-b p-4">-</td>
  //                 <td className="border-b p-4">-</td>
  //                 <td className="border-b p-4">-</td>
  //                 <td className="border-b p-4">-</td>
  //                 <td className="border-b p-4">-</td>
  //                 <td className="border-b p-4">-</td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </section> */}

  // </>
  // );
};

export default Dashboard;