"use client";
import { AuthKey } from "@/contants";
import { isLoggedIn } from "@/utils/auth/auth.service";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const PetDetails = ({ params }: { params: { petId: string } }) => {
  interface ISinglePetDetails {
    adoptionRequirements?: string;
    age?: number;
    bannerPhoto?: string;
    breed?: string;
    createdAt?: string;
    description?: string;
    gender?: string;
    healthStatus?: string;
    id?: string;
    location?: string;
    medicalHistory?: string;
    multiplePhotos?: string[];
    name?: string;
    size?: string;
    specialNeeds?: string;
    species?: string;
    temperament?: string;
    updatedAt?: string;
  }

  const id = params.petId;

  const [singlePetData, setSinglePetData] = useState<ISinglePetDetails>({});


  useEffect(() => {
    const singleDataFetch = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BECKEN_URL}/pets/${id}`,
        {
          //@ts-ignore
          headers: {
            authorization: localStorage.getItem(`${AuthKey}`),
          },
        }
      );
      const result = await res.json();
      setSinglePetData(result.data);
    };
    singleDataFetch();
  }, [id]);

  const router = useRouter();
  const pathName = usePathname();
  const isLoggedInUser = isLoggedIn();


  if (!isLoggedInUser) {
    router.push("/login");
    localStorage.setItem("redirectAfterLoginPath", pathName);
  } else {
    return (
      <>
        {singlePetData && (
          <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 ">
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="sm:flex sm:flex-row p-2">
                <div className="sm:w-1/2 ">
                  <div className="relative">                    
                      <Image
                        src={(singlePetData?.bannerPhoto)! }
                        width={1000}
                        height={1000}
                        alt={singlePetData?.name || "pets phot"}
                        className="w-full h-96 object-contain rounded-t-lg sm:rounded-tr-none sm:rounded-l-lg"
                      />                  
                    <div className="absolute top-1 right-1 bg-white bg-opacity-75 p-2 rounded-lg shadow-lg">
                      <h2 className="text-2xl font-bold text-gray-800">
                        {singlePetData.name}
                      </h2>
                      <p className="text-lg text-gray-600">
                        {singlePetData.breed}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 p-4 border border[2px] rounded-b-xl">
                    {singlePetData?.multiplePhotos?.map((photo, index) => (
                      <Image
                        width={1000}
                        height={1000}
                        key={index}
                        src={photo}
                        alt={`pet-${index}`}
                        className="w-full h-24 object-contain rounded-lg"
                      />
                    ))}
                  </div>
                </div>
                <div className="sm:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800">
                      {singlePetData.name}
                    </h2>
                    <p className="text-xl text-gray-600 mb-4">
                      {singlePetData.breed}
                    </p>
                    <p className="text-gray-700 mb-4">
                      {singlePetData.description}
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li>
                        <strong className="text-gray-900">Age:</strong>{" "}
                        {singlePetData.age}
                      </li>
                      <li>
                        <strong className="text-gray-900">Gender:</strong>{" "}
                        {singlePetData.gender}
                      </li>
                      <li>
                        <strong className="text-gray-900">
                          Health Status:
                        </strong>{" "}
                        {singlePetData.healthStatus}
                      </li>
                      <li>
                        <strong className="text-gray-900">
                          Current Location:
                        </strong>{" "}
                        {singlePetData.location}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Link href={`/pet-adopt-request/${singlePetData.id}`}>
                      <button className="w-full py-3 px-6 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
                        {" "}
                        Request Adoption
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  About the Species
                </h3>
                <p className="text-gray-700">{singlePetData.description}</p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return <div className="min-h-screen"></div>;
};

export default PetDetails;
