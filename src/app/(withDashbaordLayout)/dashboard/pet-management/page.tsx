"use client";

import React, { useEffect, useState } from "react";
import AddPetForm from "./AddpetForm";
import PetCard from "@/components/ui/HomePage/petCards/page";
import { IPetData } from "@/types";

const PetMangementPage = () => {

  const [AllPets , setAllPets]= useState<IPetData[]>([])
 console.log(AllPets); 
  
  useEffect(() => {
    const AllPetData = async () => {
      const res = await fetch(`http://localhost:7000/api/pets`);
      const resJson = await res.json();
      console.log(resJson);
      setAllPets(resJson.data)
    };
    AllPetData()
  }, []);

  const pet = [
    {
      id: "123e4567-e89b-12d3-a456-426614174000",
      name: "Buddy",
      species: "Dog",
      bannerPhoto: "https://example.com/photos/buddy-banner.jpg",
      multiplePhotos: [
        "https://example.com/photos/buddy1.jpg",
        "https://example.com/photos/buddy2.jpg",
        "https://example.com/photos/buddy3.jpg",
      ],
      breed: "Golden Retriever",
      age: 3,
      specialNeeds: "None",
      size: "Large",
      gender: "Male",
      location: "New York, NY",
      healthStatus: "Healthy",
      description:
        "Buddy is a friendly and energetic Golden Retriever. He loves to play fetch and enjoys long walks in the park.",
      temperament: "Friendly, Energetic, Gentle",
      medicalHistory: "Vaccinated, Neutered",
      adoptionRequirements: "Fenced yard, regular exercise",
      createdAt: "2023-01-15T08:00:00Z",
      updatedAt: "2024-05-01T12:00:00Z",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center gap-2">
        <input
          type="text"
          name="name"
          value={""}
          placeholder="searcg pet's "
          className="mt-1  block p-2 border border-gray-300 rounded-md"
          required
        />

        <AddPetForm />
      </div>

      <h1 className="rancho-regular text-center uppercase text-4xl font-bold my-6">
        All pet&apos;s
      </h1>

      <div className="grid grid-cols-1 px-2  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {AllPets?.map((pet, index) => (
          <PetCard key={index} pet={pet} isEditable={true} />
        ))}
      </div>
    </div>
  );
};

export default PetMangementPage;
