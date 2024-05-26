"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const pet = {
  name: "Buddy",
  breed: "Golden Retriever",
  description:
    "Buddy is a friendly and energetic dog who loves to play and needs a loving home. He has a great temperament and gets along well with children and other pets.",
  age: "2 years",
  gender: "Male",
  healthStatus: "Vaccinated, Neutered",
  location: "New York, NY",
  photos: [
    "https://i.ibb.co/17VZ6XK/bannerBg.png",
    "https://i.ibb.co/17VZ6XK/bannerBg.png",
    "https://i.ibb.co/17VZ6XK/bannerBg.png",
    "https://i.ibb.co/17VZ6XK/bannerBg.png",
  ],
  speciesDescription:
    "Golden Retrievers are friendly, intelligent, and devoted. They are good family pets, great with children, and friendly with strangers. They require regular exercise and grooming.",
};
const PetDetails = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="sm:flex sm:flex-row p-2">
          <div className="sm:w-1/2 ">
            <div className="relative">
              <Image
                src={pet.photos[0]}
                width={1000}
                height={1000}
                alt={pet.name}
                className="w-full h-96 object-cover rounded-t-lg sm:rounded-tr-none sm:rounded-l-lg"
              />
              <div className="absolute top-1 right-1 bg-white bg-opacity-75 p-2 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800">{pet.name}</h2>
                <p className="text-lg text-gray-600">{pet.breed}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 p-4 border border[2px] rounded-b-xl">
              {pet.photos.slice(1).map((photo, index) => (
                <Image
                width={1000}
                height={1000}
                  key={index}
                  src={photo}
                  alt={`pet-${index}`}
                  className="w-full h-24 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
          <div className="sm:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-800">{pet.name}</h2>
              <p className="text-xl text-gray-600 mb-4">{pet.breed}</p>
              <p className="text-gray-700 mb-4">{pet.description}</p>
              <ul className="mb-4 space-y-2">
                <li>
                  <strong className="text-gray-900">Age:</strong> {pet.age}
                </li>
                <li>
                  <strong className="text-gray-900">Gender:</strong>{" "}
                  {pet.gender}
                </li>
                <li>
                  <strong className="text-gray-900">Health Status:</strong>{" "}
                  {pet.healthStatus}
                </li>
                <li>
                  <strong className="text-gray-900">Current Location:</strong>{" "}
                  {pet.location}
                </li>
              </ul>
            </div>
            <div>
             <Link href={'/pet-adopt-request'}>
             <button
                className="w-full py-3 px-6 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                
              >
                Request doption
              </button>
             </Link>
            </div>
          </div>
        </div>



        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            About the Species
          </h3>
          <p className="text-gray-700">{pet.speciesDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
