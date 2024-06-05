"use client";


import { AuthKey } from "@/contants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";


const UserManagementPage = () => {

    const [AllRequest, setAllRequest] = useState<any>()


    useEffect(() => {
        const getAllRequest = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BECKEN_URL}/adoption-requests`,
                {
                    headers: {
                        authorization: localStorage.getItem(`${AuthKey}`) as string,
                    },
                }
            );
            const result = await res.json();
            setAllRequest(result.data);
        };
        getAllRequest();
    }, []);



    const changePetStatus = async (status: string, id: string) => {
        const data = { status, id }
        console.log(data);
        const request = await fetch(`${process.env.NEXT_PUBLIC_BECKEN_URL}/adoption-requests/${id}`, {
            method: "PUT",

            headers: {
                'Content-Type': 'application/json',
                "authorization": localStorage.getItem(`${AuthKey}`) as string,
            },
            body: JSON.stringify(data)
        });
        const response = await request.json()

        if (response.success) {
            toast.success(response.message)

        }
        if (!response.success) {
            toast.error('something went wrong')
        }

    };



    return (
        <div className="overflow-x-auto">
            <div className="flex justify-between items-center gap-2">
                <input
                    onChange={() => { toast.warning('This feature will comming soom') }}
                    type="text"
                    name="name"
                    value={""}
                    placeholder="search user "
                    className="mt-1  block p-2 border border-gray-300 rounded-md"
                    required
                />

                <button onClick={() => { toast.warning('This feature will comming soon') }} className="btn bg-[#2563eb] text-white">Search User</button>
            </div>
            <h1 className="rancho-regular text-center uppercase text-4xl font-bold my-6">
                All user&apos;s
            </h1>
            <table className="min-w-full divide-y divide-gray-200 " >
                <thead className="bg-slate-200">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Pet Name
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Address
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            PhoneNumber
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Message
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Status
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Details
                        </th>
                    </tr>
                </thead>
                <tbody className=" divide-y divide-gray-200 bg-slate-50">
                    {AllRequest?.map((petRequest: any) => (

                        <tr key={petRequest.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0 h-16 w-16 ">
                                        <Image
                                            className="h-16 w-16 rounded-full object-contai"
                                            src={petRequest.pet.bannerPhoto}
                                            alt={petRequest.name}
                                            width={1000}
                                            height={1000}
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <div className="text-sm font-medium text-gray-900">
                                            {petRequest.pet.name}
                                        </div>
                                    </div>
                                </div>
                            </td>



                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{petRequest.address}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{petRequest.phoneNumber}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-sm text-gray-900">{petRequest.message}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <select
                                    className="block w-max  border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                                    defaultValue={petRequest.status}
                                    onChange={(e) => changePetStatus(e.target.value, petRequest.id)}
                                >
                                    <option value="APPROVED">Approved</option>
                                    <option value="PENDING">Pending</option>
                                    <option value="REJECTED">Rejected</option>
                                </select>
                            </td>
                            <td className="px-1 py-1 whitespace-nowrap">
                                <Link href={`/pet/${petRequest.petId}`} className="w-full text-sm py-1 px-6 bg-[#2563EB] text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-25">See pet details</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagementPage;