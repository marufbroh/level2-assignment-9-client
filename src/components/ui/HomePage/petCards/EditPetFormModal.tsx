"use client";
import { AuthKey } from "@/contants";
import { getUpdatedValues, modifyPayload } from "@/utils/payload/modifyPayload";
import { assert } from "console";
import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { toast } from "sonner";

type TProps = {
  isEditable: boolean;
  id: string;
  pet: any; // Add the type for pet if you have one
} | any;

const EditPetFormModal = ({ isEditable = true, id, pet,isPetDelete, setIsPetDelete }: TProps) => {
  const [bannerPhoto, setBannerPhoto] = useState("")
  const [multiplePhotos, setMultiplePhotos] = useState([]);
  const getSinglePetData = async(PetId: string) => {
    // Implement the logic to get a single pet data if necessary
   const res = await fetch(`${process.env.NEXT_PUBLIC_BECKEN_URL}/pets/${PetId}`,{
    headers:{
      "authorization": localStorage.getItem(`${AuthKey}`) as string,
    }
   })
  const data = await res.json()
  setBannerPhoto(data.data.bannerPhoto);
  setMultiplePhotos(data.data.multiplePhotos)
  };



 
  const [previousPetInfomation, setPreviousValueInformation] = useState(pet)

  // console.log(pet , 'from modal');
  const initialFormData = {
    name: "",
    species: "",
    temperament: "",
    description: "",
    size: "",
    gender: "",
    age: "",
    breed: "",
    healthStatus: "",
    currentLocation: ""
  };
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`
  const [formDataMap, setFormDataMap] = useState<{ [key: string]: any }>({
    [id]: initialFormData
  });


  // Sync formDataMap with pet prop when it changes
  useEffect(() => {
    if (pet) {
      setFormDataMap((prev) => ({
        ...prev,
        [id]: {
          name: pet.name || "",
          species: pet.species || "",
          temperament: pet.temperament || "",
          description: pet.description || "",
          size: pet.size || "",
          gender: pet.gender || "",
          age: pet.age || "",
          currentLocation: pet.currentLocation || "",
          breed: pet.breed || "",
          healthStatus: pet.healthStatus || ""
        }
      }));
      // console.log("Pet data updated for id:", id, pet);
    }
  }, [pet, id]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormDataMap((prev) => ({
      ...prev,
      [id]: { ...prev[id], [name]: value }
    }));
  };


  const handleMultiplePhotos = async(e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const formData = new FormData()
      const photoLinks = []
      for (let i = 0; i < e.target.files.length; i++) {
        
        formData.append("image",e.target.files[i])
        const res =await fetch(image_hosting_url,{
          method:"POST",
          body:formData
        })
        const imgResponse = await res.json()
        if(imgResponse.success){
          photoLinks.push(imgResponse.data.display_url)
        }
    }
    setMultiplePhotos(photoLinks) 
    }
  };

  const handleSinglePhotoChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const formData = new FormData()
      formData.append("image", e.target.files[0])
      const res = await fetch(image_hosting_url, {
        method: "POST",
        body: formData
      })
      const imgResponse = await res.json()
      if (imgResponse.success) {
        setBannerPhoto(imgResponse.data.display_url)
      }
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const NewFormValues = { ...formDataMap[id] };
    NewFormValues["age"] = parseInt(NewFormValues["age"]);
    NewFormValues["bannerPhoto"] = bannerPhoto;
    NewFormValues["multiplePhotos"] = multiplePhotos;


    const updatedValues = getUpdatedValues(previousPetInfomation, NewFormValues)


    const finalValuesForBeckend = { ...updatedValues }

  
    const data = modifyPayload(finalValuesForBeckend);
    // console.log(`${process.env.NEXT_PUBLIC_BECKEN_URL}/pets/${id}`);

    const request = await fetch(`${process.env.NEXT_PUBLIC_BECKEN_URL}/pets/${id}`, {
      method: "PUT",
      headers: {
        authorization: localStorage.getItem(`${AuthKey}`) as string,
      },
      body: data,
    });

    const response = await request.json();
   

    if (response.success) {
      setIsPetDelete(isPetDelete+1)
      toast.success(response.message);
    } else {
      toast.error("something went wrong");
    }

    closeModal();
  };


  const closeModal = () => {
    const myElement = document.getElementById(`PetEditModal-${id}`);
    if (myElement instanceof HTMLDialogElement) {
      myElement.close();
    }
  };

  const showModal = () => {
    const myElement = document.getElementById(`PetEditModal-${id}`);
    if (myElement instanceof HTMLDialogElement) {
      myElement.showModal();
    }
  };

 

  return (
    <>
      <button
        onClick={() => {
          showModal();
          getSinglePetData(id);
        }}
        className={`${isEditable ? "" : "hidden hover:bg-red-700"
          } bg-red-500  text-white font-bold py-2 px-2 rounded`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </button>
      <dialog id={`PetEditModal-${id}`} className="modal">
        <div className="modal-box min-w-full min-h-screen rounded-none">
          <div className="relative mx-auto px-3 bg-white shadow-md max-w-5xl">
            <button
              className="text-end absolute top-0 right-0 btn"
              onClick={closeModal}
            >
              close
            </button>
            <h2 className="text-2xl font-bold mb-3 text-center text-gray-800">
              Edit Pet Information
            </h2>

            <form onSubmit={handleSubmit} method="dialog">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700">Pet&apos;s Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formDataMap[id]?.name || ""}
                    onChange={handleInputChange}
                    placeholder="pet's name"
                    className="mt-1 w-full block p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Pet&apos;s Types</label>
                  <input
                    type="text"
                    name="species"
                    value={formDataMap[id]?.species || ""}
                    onChange={handleInputChange}
                    placeholder="pet's type"
                    className="mt-1 w-full block p-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Banner Photos</label>
                <input
                  type="file"
                 
                  multiple={false}
                  onChange={handleSinglePhotoChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  accept="image/*"
                />
                {bannerPhoto &&
                  <div className="mt-2 flex flex-wrap gap-2">

                    <Image
                      width={1000}
                      height={1000}

                      src={bannerPhoto}
                      alt={`Photo`}
                      className="h-20 w-20 object-cover rounded-md"
                    />

                  </div>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Multiple sample Photos</label>
                <input
                  type="file"
                  multiple
                  onChange={handleMultiplePhotos}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  accept="image/*"
                />

              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {multiplePhotos.map((photo, index) => (
                  <Image
                    width={1000}
                    height={1000}
                    key={index}
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    className="h-20 w-20 object-cover rounded-md"
                  />
                ))}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Temperament Description</label>
                <textarea
                  name="temperament"
                  value={formDataMap[id]?.temperament || ""}
                  onChange={handleInputChange}
                  placeholder="temperament description"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  rows={4}
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={formDataMap[id]?.description || ""}
                  onChange={handleInputChange}
                  placeholder="description"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  rows={4}
                ></textarea>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700">Size</label>
                  <select
                    name="size"
                    value={formDataMap[id]?.size || ""}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select Size</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Gender</label>
                  <select
                    name="gender"
                    value={formDataMap[id]?.gender || ""}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formDataMap[id]?.age || ""}
                    onChange={handleInputChange}
                    placeholder="Age"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>




                <div className="mb-4">
                  <label className="block text-gray-700">Breed</label>
                  <input
                    type="text"
                    name="breed"
                    // value={pet.breed}
                    value={formDataMap[id]?.breed || ""}
                    // defaultValue={pet.breed}
                    onChange={handleInputChange}
                    placeholder="breed"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  // required
                  />
                </div> <div className="mb-4">
                  <label className="block text-gray-700">
                    Current Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    defaultValue={pet.location}
                    // defaultValue={pet.location}
                    onChange={handleInputChange}
                    placeholder="current location"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  // required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Health Status</label>
                  <input
                    type="text"
                    name="healthStatus"
                    defaultValue={pet.healthStatus}
                    // defaultValue={pet.healthStatus}
                    onChange={handleInputChange}
                    placeholder="health status"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  // required
                  />
                </div>

              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 text-center w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Update Pet
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default EditPetFormModal;


