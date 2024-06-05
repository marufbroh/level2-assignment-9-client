"use client"
import AdoptedPetCard from "@/components/ui/HomePage/profile/AdoptedPetCard/AdoptedPetCard";
import ProfileClientPart from "./ProfileClientPart";
import { useEffect, useState } from "react";
import { AuthKey } from "@/contants";

const MyProfile = () => {
const [myAdoptedPets,setMyAdoptedPets]=useState([])
useEffect(()=>{
const res = fetch(`${process.env.NEXT_PUBLIC_BECKEN_URL}/adoption-requests/my-adopted-pets`,{
  method:"GET",
  headers:{
    "authorization":localStorage.getItem(AuthKey) as string
  }
})
.then(res=>res.json())
.then(data=>{
  
const myAllPetsRequest = data?.data;
const myAdoptedPets = myAllPetsRequest?.map((pet: any)=>{
  const petData = pet.pet
  return {...petData,adoptedDate:pet.updatedAt}
})

setMyAdoptedPets(myAdoptedPets);
})
},[])

  return (
    <section className="min-h-screen bg-slate-50">
      {/* profile navbar section */}

      <ProfileClientPart></ProfileClientPart>
      {/* my adopted pets section */}
      <section className="md:px-6 px-3">
        <h1 className="rancho-regular px-3  uppercase text-4xl font-bold my-6 mb-8 ">
          Your Adopted Pets
        </h1>
        <div className="grid grid-cols-1 px-2  md:grid-cols-1 lg:grid-cols-2 gap-4 my-5">
          { myAdoptedPets ?
            myAdoptedPets?.map((myAdoptedPet, index) => <AdoptedPetCard key={index} myAdoptedPet={myAdoptedPet} />):<h1 className="py-5">No adopted pets found</h1>
          }

        </div>

      </section>
    </section>
  );
};

export default MyProfile;
