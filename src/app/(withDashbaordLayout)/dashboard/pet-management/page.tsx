"use client";

import React, { useEffect, useState } from "react";
import AddPetForm from "./AddpetForm";
import PetCard from "@/components/ui/HomePage/petCards/PetCard";
import { IPetData } from "@/types";

const PetMangementPage = () => {
const [isPetDelete,setIsPetDelete] = useState(1)

  const [AllPets , setAllPets]= useState<IPetData[]>([])
  useEffect(() => {
    const AllPetData = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BECKEN_URL}/pets`);
      const resJson = await res.json();
    
      setAllPets(resJson.data)
    };
    AllPetData()
  }, [isPetDelete]);


  return (
    <div>
      <div className="flex container mx-auto justify-between items-center gap-2">
        <input
          type="text"
          name="name"
          value={""}
          placeholder="searcg pet's "
          className="mt-1  block p-2 border border-gray-300 rounded-md"
          required
        />

        <AddPetForm isPetDelete={isPetDelete} setIsPetDelete={setIsPetDelete}/>
      </div>

      <h1 className="rancho-regular text-center uppercase text-4xl font-bold my-6">
        All pet&apos;s
      </h1>

      <div className="grid grid-cols-1 px-2  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {AllPets?.map((pet, index) => (
          <PetCard key={index} pet={pet} isEditable={true} isPetDelete={isPetDelete} setIsPetDelete={setIsPetDelete}/>
        ))}
      </div>




    </div>
  );
};

export default PetMangementPage;
