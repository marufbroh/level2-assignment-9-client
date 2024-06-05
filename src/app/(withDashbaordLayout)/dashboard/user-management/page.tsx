"use client";


import { AuthKey } from "@/contants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
interface User {
  id: string;
  name: string;
  email: string;
  pic: string;
  role: string;
  status: string;
}

interface Props {
  users: User[];
  onEditUser: (user: User) => void;
  onDeleteUser: (userId: number) => void;
}

const UserManagementPage = () => {
  interface IUser {    
      id: string;
      email: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      role:  string;
      status:  string; 
  }

const [AllUser , setAllUser]= useState<IUser[]>()




  useEffect(() => {
    const getAllUser= async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BECKEN_URL}/user`,
        {
          //@ts-ignore
          headers: {
            authorization: localStorage.getItem(`${AuthKey}`),
          },
        }
      );
      const result = await res.json();
      console.log(result);
      setAllUser(result.data);
    };
    getAllUser();
  }, []);



  const [editedUsers, setEditedUsers] = useState<User[]>([]);

  const handleRoleChange = async (userId: string, newRole: string) => {
    console.log({userId, newRole});
    let data= {role:newRole}
     const request = await fetch(`${process.env.NEXT_PUBLIC_BECKEN_URL}/profile/change-role/${userId}`,{
      method:"POST",
     
      headers :{        
        'Content-Type': 'application/json', 
        "authorization": localStorage.getItem(`${AuthKey}`) as string,
      },
      body :JSON.stringify(data)
     });
        const response = await request.json()

        if(response.success){
          toast.success(response.message)

        }
      if(!response.success){
        toast.error('something went wrong')
        }
        console.log(response);
    
  };

  const handleStatusChange =async (userId: string, newStatus: string) => {
  
    console.log({userId, newStatus});
    let data= {status:newStatus}
     const request = await fetch(`${process.env.NEXT_PUBLIC_BECKEN_URL}/profile/change-status/${userId}`,{
      method:"POST",
      headers :{        
        'Content-Type': 'application/json', 
        "authorization": localStorage.getItem(`${AuthKey}`) as string,
      },
      body :JSON.stringify(data)
     });
        const response = await request.json()

        if(response.success){
          toast.success(response.message)

        }
      if(!response.success){
        toast.error('something went wrong')
        }
        console.log(response);
  };

  const handleSaveChanges = () => {
    console.log("Saving changes:", editedUsers);
    setEditedUsers([]);
  };
  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center gap-2">
        <input
         onChange={()=>{toast.warning('This feature will comming soom')}}
          type="text"
          name="name"
          value={""}
          placeholder="search user "
          className="mt-1  block p-2 border border-gray-300 rounded-md"
          required
        />

        <button  onClick={() => {toast.warning('This feature will comming soon')}} className="btn bg-[#2563eb] text-white">Search User</button>
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
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Role
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
              Actions
            </th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-200 bg-slate-50">
          {AllUser?.map((user) => (
           
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-16 w-16 ">
                    <Image
                      className="h-16 w-16 rounded-full"
                      src={`https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=2048x2048&w=is&k=20&c=wMTCZdfcnfH8GFWojm54r2NRaHuoQZyv7JxrdQmchkc=`}
                      alt={user.name}
                      width={1000}
                      height={1000}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {user.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{user.email}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select
                  className="block w-max  border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                  defaultValue={user.role}  
                  onChange={(e) => handleRoleChange(user.id, e.target.value)}
                >
                  <option value="user">user</option>
                  <option value="admin">admin</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <select
                  className="block w-max border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                  defaultValue={user.status}
                  onChange={(e) => handleStatusChange(user.id, e.target.value)}
                >
                  <option value="deactive">Deactive</option>
                  <option value="active">Active</option>
                </select>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  className="text-indigo-600 hover:text-indigo-900"
                  onClick={() => {toast.warning('This feature will comming soon')}}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:text-red-900 ml-2"
                  onClick={() => {toast.warning('This feature will comming soon')}}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editedUsers.length > 0 && (
        <div className="mt-4 flex justify-end">
          <button
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default UserManagementPage;
