"use client";

import { AuthKey } from "@/contants";
import { useRouter } from "next/navigation";
import { Result } from "postcss";
import { useEffect, useState } from "react";


type TProps={
    isEditable:boolean;
    id: string
}
const PetCardDeleteButton = ({ isEditable = false, id,isPetDelete, setIsPetDelete }:TProps) => {

  const [confirm ,setConfirm]= useState<boolean>(false)
  const [isShowSweetAlert, setIsShowSweetAlert]= useState<boolean>(true)
  const router= useRouter()
  const handleDelete = async () => {
   if(isShowSweetAlert){
     //@ts-ignore
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result:any) => {
        
        if (result.isConfirmed) {
            setConfirm(true)
            setIsShowSweetAlert(false)
           
        }
      });
   }

     
      if(confirm){
        const request = await fetch(
            `${process.env.NEXT_PUBLIC_BECKEN_URL}/pets/${id}`,
            {
              method: "DELETE",
              headers: {
                authorization: localStorage.getItem(AuthKey) as string,
              },
            }
            
          );

          const response = await request.json();
          if (response.success) {
            setIsPetDelete(isPetDelete+1)
              router.refresh()
            //@ts-ignore
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
          if (!response.success) {
            //@ts-ignore
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          }

      }
   

   
  };
  useEffect(()=>{
    if(confirm){
        handleDelete()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[confirm])

  //   const handleDelete = async (petid) => {

  //    const result= Swal.fire({
  //         title: "Are you sure?",
  //         text: "You won't be able to revert this!",
  //         icon: "warning",
  //         showCancelButton: true,
  //         confirmButtonColor: "#3085d6",
  //         cancelButtonColor: "#d33",
  //         confirmButtonText: "Yes, delete it!"
  //       })
  //         if (result.isConfirmed) {

  //                 const request = await fetch(
  //                     `${process.env.NEXT_PUBLIC_BECKEN_URL}/pets/${id}`,
  //                     {
  //                       method: "DELETE",
  //                       headers: {
  //                         authorization: localStorage.getItem(AuthKey) as string,
  //                       },
  //                     }
  //                   );

  //                   const response = await request.json();
  //                   console.log(response);
  //                 if(response.success){
  //                     Swal.fire({
  //                         title: "Deleted!",
  //                         text: "Your file has been deleted.",
  //                         icon: "success"
  //                       });
  //                 }
  //                 if(!response.success){
  //                     Swal.fire({
  //                         icon: "error",
  //                         title: "Oops...",
  //                         text: "Something went wrong!",
  //                       });
  //                 }

  //         }

  //   };

  // const handleDelete = async (id) => {
  //     console.log(id);
  //     const result = await Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     });

  //     if (result.isConfirmed) {
  //       console.log(`${process.env.NEXT_PUBLIC_BECKEN_URL}/pets/${id}`);

  //       const request = await fetch(
  //         `${process.env.NEXT_PUBLIC_BECKEN_URL}/pets/${id}`,
  //         {
  //           method: "DELETE",
  //           headers: {
  //             authorization: localStorage.getItem(AuthKey),
  //           },
  //         }
  //       );

  //       const response = await request.json();
  //       console.log(response);
  //       if (response.success) {
  //         Swal.fire({
  //           title: "Deleted!",
  //           text: "Pet has been deleted.",
  //           icon: "success",
  //         });
  //       } else {
  //         Swal.fire({
  //           icon: "error",
  //           title: "Oops...",
  //           text: "Something went wrong!",
  //         });
  //       }
  //     }
  //   };
  return (
    <button
      onClick={() => {
        handleDelete(), console.log(id);
      }}
      className={`${
        isEditable ? "" : "hidden "
      }bg-red-500  text-white font-bold py-2 px-2 rounded`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
        />
      </svg>
    </button>
  );
};

export default PetCardDeleteButton;

// "use client";

// import { AuthKey } from "@/contants";
// import { useState } from "react";

// const PetCardDeleteButton = ({ isEditable = false, id }) => {
//   const [loading, setLoading] = useState(false);

//   const handleDelete = async (petId) => {
//     if (!petId) {
//       console.error("No id provided for deletion");
//       return;
//     }

//     setLoading(true);

//     try {
//       const request = await fetch(
//         `${process.env.NEXT_PUBLIC_BECKEN_URL}/pets/${petId}`,
//         {
//           method: "DELETE",
//           headers: {
//             authorization: localStorage.getItem(AuthKey),
//           },
//         }
//       );

//       const response = await request.json();
//       console.log("Delete response:", response);

//       if (response.success) {
//         console.log("Pet has been deleted");
//       } else {
//         console.error("Error deleting pet:", response.message);
//       }
//     } catch (error) {
//       console.error("Error deleting pet:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <button
//       onClick={() => handleDelete(id)}
//       className={`${
//         isEditable ? "" : "hidden "
//       }bg-red-500 text-white font-bold py-2 px-2 rounded`}
//       disabled={loading}
//     >
//       {loading ? (
//         <span>Deleting...</span>
//       ) : (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="size-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
//           />
//         </svg>
//       )}
//     </button>
//   );
// };

// export default PetCardDeleteButton;
