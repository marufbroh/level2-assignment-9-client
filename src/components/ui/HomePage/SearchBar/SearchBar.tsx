"use client";
import React, { ChangeEvent, useState } from "react";

const SearchBar = () => {
  const petTypes = ["Dog", "Cat"];
  const breeds = ["Bulldog", "Siamese", "Labrador", "Persian"];
  const ages = Array.from({ length: 30 }, (_, i) => i + 1); // Ages 1 to 30
  const locations = ["Dhaka", "Narshingdi", "Chittagong", "Sylhet"];

  const [filters, setFilters] = useState({
    petType: "",
    breed: "",
    age: "",
    location: "",
  });
  console.log(filters, "filters");

  const handleInputChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSearch = () => {
    console.log(filters);
  };

  return (
    <>
      <div className="p-4 m-5 my-5 md:hidden bg-gray-200 rounded-lg shadow-md flex  space-x-4 items-center">
        <div className="flex-1 md:hidden">
          <label className="sr-only">Pet Type</label>
          <select
            name="petType"
            value={filters.petType}
            onChange={handleInputChange}
            className="block w-full rounded-md border-gray-300 shadow-sm"
          >
            <option value="">Select Pet</option>
            {petTypes.map((type) => (
              <option key={type} value={type.toLowerCase()}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-black text-white rounded-md shadow-sm hover:bg-gray-800"
          >
            Search
          </button>
        </div>
      </div>

      <div className="p-4  m-5 mb-12 bg-gray-200 rounded-lg shadow-md flex  space-x-4 items-center">
        <div className="flex-1">
          <label className="sr-only">Breed</label>
          <select
            name="breed"
            value={filters.breed}
            onChange={handleInputChange}
            className="block w-full rounded-md border-gray-300 shadow-sm"
          >
            <option value="">Select Breed</option>
            {breeds.map((breed) => (
              <option key={breed} value={breed.toLowerCase()}>
                {breed}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="sr-only">Age</label>
          <select
            name="age"
            value={filters.age}
            onChange={handleInputChange}
            className="block w-full rounded-md border-gray-300 shadow-sm"
          >
            <option value="">Select Age</option>
            {ages.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="sr-only">Location</label>
          <select
            name="location"
            value={filters.location}
            onChange={handleInputChange}
            className="block w-full rounded-md border-gray-300 shadow-sm"
          >
            <option value="">Select Location</option>
            {locations.map((location) => (
              <option key={location} value={location.toLowerCase()}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div className="flex-1 hidden md:block">
          <label className="sr-only">Pet Type</label>
          <select
            name="petType"
            value={filters.petType}
            onChange={handleInputChange}
            className="block w-full rounded-md border-gray-300 shadow-sm"
          >
            <option value="">Select Pet</option>
            {petTypes.map((type) => (
              <option key={type} value={type.toLowerCase()}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden md:block">
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-black text-white rounded-md shadow-sm hover:bg-gray-800"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;

// import React, { useState } from 'react';

// const SearchBar = () => {
//   const [filters, setFilters] = useState({
//     petType: '',
//     breed: '',
//     age: '',
//     location: ''
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({
//       ...filters,
//       [name]: value
//     });
//   };

//   const handleSearch = () => {
//     // Implement search functionality here
//     console.log(filters);
//   };

//   return (
//     <div className="p-4 bg-gray-200 rounded-lg shadow-md flex space-x-4 items-center">
//       <div className="flex-1">
//         <label className="sr-only">Pet Type</label>
//         <select
//           name="petType"
//           value={filters.petType}
//           onChange={handleInputChange}
//           className="block w-full rounded-md border-gray-300 shadow-sm"
//         >
//           <option value="">Select Pet Type</option>
//           <option value="dog">Dog</option>
//           <option value="cat">Cat</option>
//         </select>
//       </div>
//       <div className="flex-1">
//         <label className="sr-only">Breed</label>
//         <select
//           name="breed"
//           value={filters.breed}
//           onChange={handleInputChange}
//           className="block w-full rounded-md border-gray-300 shadow-sm"
//         >
//           <option value="">Select Breed</option>
//           <option value="breed1">Breed 1</option>
//           <option value="breed2">Breed 2</option>
//         </select>
//       </div>
//       <div className="flex-1">
//         <label className="sr-only">Age</label>
//         <select
//           name="age"
//           value={filters.age}
//           onChange={handleInputChange}
//           className="block w-full rounded-md border-gray-300 shadow-sm"
//         >
//           <option value="">Select Age</option>
//           <option value="puppy">Puppy/Kitten</option>
//           <option value="adult">Adult</option>
//           <option value="senior">Senior</option>
//         </select>
//       </div>
//       <div className="flex-1">
//         <label className="sr-only">Location</label>
//         <select
//           name="location"
//           value={filters.location}
//           onChange={handleInputChange}
//           className="block w-full rounded-md border-gray-300 shadow-sm"
//         >
//           <option value="">Select Location</option>
//           <option value="location1">Location 1</option>
//           <option value="location2">Location 2</option>
//         </select>
//       </div>
//       <div>
//         <button
//           onClick={handleSearch}
//           className="px-4 py-2 bg-black text-white rounded-md shadow-sm hover:bg-gray-800"
//         >
//           Search
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;
