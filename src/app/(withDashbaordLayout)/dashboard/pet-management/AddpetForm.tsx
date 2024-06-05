"use client";
import { AuthKey } from "@/contants";
import { modifyMultiplePayload, modifyPayload } from "@/utils/payload/modifyPayload";
import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "sonner";

interface FormData {
  id: string;
  name: string;
  species: string;
  bannerPhoto: string;
  multiplePhotos: string[];
  breed: string;
  age: string;
  specialNeeds: string;
  size: string;
  gender: string;
  location: string;
  healthStatus: string;
  description: string;
  temperament: string;
  medicalHistory: string;
  adoptionRequirements: string;
}



interface FormData {
  id?: string;
  name: string;
  species: string;
  bannerPhoto: string;
  multiplePhotos: string[];
  breed: string;
  age: number;
  specialNeeds: string;
  size: string;
  gender: string;
  location: string;
  healthStatus: string;
  description: string;
  temperament?: string;
  medicalHistory?: string;
  adoptionRequirements?: string;
}


const AddPetForm = ({ isPetDelete, setIsPetDelete }: { isPetDelete: any, setIsPetDelete: any }) => {
  const [multiplePhotos, setMultiplePhotos] = useState([]);
  const [bannerPhoto, setBannerPhoto] = useState("");

  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`
  const initialFormData: FormData = {
    name: "",
    species: "",
    bannerPhoto: "",
    multiplePhotos: [],
    breed: "",
    age: 0,
    specialNeeds: "",
    size: "",
    gender: "",
    location: "",
    healthStatus: "",
    description: "",
    temperament: "",
    medicalHistory: "",
    adoptionRequirements: ""
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);


  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    console.log(e);

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSinglePhotoChange = async(e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const formData = new FormData()
      formData.append("image",e.target.files[0])
      const res =await fetch(image_hosting_url,{
        method:"POST",
        body:formData
      })
      const imgResponse = await res.json()
      if(imgResponse.success){
        setBannerPhoto(imgResponse.data.display_url)
      }
    }
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


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const values = { ...formData };
    //@ts-ignore
    values['age'] = parseInt(values['age'])
    values['bannerPhoto'] = bannerPhoto
    values['multiplePhotos'] = multiplePhotos
    const data = modifyPayload(values);

    const request = await fetch(`${process.env.NEXT_PUBLIC_BECKEN_URL}/pets`, {
      method: "POST",
      headers: {
        "authorization": localStorage.getItem(`${AuthKey}`) as string,
      },
      body: data,
    });

    const response = await request.json();

    if (response.success) {
      setIsPetDelete(isPetDelete + 1)
      toast.success(response.message);
      const id = { id: response.data.id }
      const files = multiplePhotos
      const values = { ...id, file: files }
      const data = modifyMultiplePayload(values);
      const request = await fetch(`${process.env.NEXT_PUBLIC_BECKEN_URL}/pets/upload-multiple-photos`, {
        method: "POST",
        headers: {
          "authorization": localStorage.getItem(`${AuthKey}`) as string,
        },
        body: data,
      })
      const result = await request.json()

    } else {
      toast.error('something went wrong');
    }

    closeModal();
  };




  const closeModal = () => {
    const myElement = document.getElementById("my_modal_5");
    if (myElement instanceof HTMLDialogElement) {
      myElement.close();
    }
  };

  const showModal = () => {
    //   document.getElementById("my_modal_5")?.showModal();
    const myElement = document.getElementById("my_modal_5");
    if (myElement instanceof HTMLDialogElement) {
      myElement.showModal();
    }
  };

  return (
    <>
      <button className="btn bg-[#2563eb] text-white" onClick={showModal}>
        Add New Pet
      </button>
      <dialog id="my_modal_5" className="modal  ">
        <div className="modal-box min-w-full min-h-screen rounded-none">
          <div className="relative mx-auto px-3  bg-white shadow-md  max-w-5xl ">
            <button className="text-end absolute top-0 right-0 btn" onClick={closeModal}>
              close
            </button>
            <h2 className="text-2xl   font-bold mb-3 text-center text-gray-800">
              Add New Pet
            </h2>

            <form onSubmit={handleSubmit} method="dialog">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700">Pet&apos;s Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="pet's name"
                    className="mt-1 w-full block p-2 border border-gray-300 rounded-md"
                  // required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Pet&apos;s Types</label>
                  <input
                    type="text"
                    name="species"
                    value={formData.species}
                    onChange={handleInputChange}
                    placeholder="pet's type"
                    className="mt-1 w-full block p-2 border border-gray-300 rounded-md"
                  // required
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
                // required
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
                // required
                />

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
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  temperament description
                </label>
                <textarea
                  name="temperament"
                  value={formData.temperament}
                  onChange={handleInputChange}
                  placeholder="Friendly, energetic, good with other dogs,Max is a playful and affectionate Labrador Retriever looking for a loving home."
                  className="mt-1 block w-full h-[5rem] p-2 border border-gray-300 rounded-md"
                  rows={4}
                // required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Detailed Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="detailed description"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  rows={4}
                // required
                ></textarea>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="age"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  // required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Breed</label>
                  <input
                    type="text"
                    name="breed"
                    value={formData.breed}
                    onChange={handleInputChange}
                    placeholder="breed"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  // required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  // required
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Gender</label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  // required
                  >
                    <option value="" disabled>
                      Select Size
                    </option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Health Status</label>
                  <input
                    type="text"
                    name="healthStatus"
                    value={formData.healthStatus}
                    onChange={handleInputChange}
                    placeholder="health status"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  // required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Current Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="current location"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  // required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full btn bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Add Pet
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AddPetForm;
