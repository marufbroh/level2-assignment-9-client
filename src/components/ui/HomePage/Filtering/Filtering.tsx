"use client";
import { useEffect, useState } from "react";

interface FormData {
  breed: string
  age: string
  searchTerm: string
  location: string
  size: string
  gender: string
  [key: string]: string // Index signature
}


const SearchSystem = () => {
  const [ages, setAges] = useState([])
  const [breeds, setBreeds] = useState([])
  const [locations, setLocations] = useState([])
  const [species, setSpecies] = useState([])

  useEffect(() => {
    const fetchUniqueAges = async () => {

      const response = await fetch(`${process.env.NEXT_PUBLIC_BECKEN_URL}/pets/unique-ages`);
      const data = await response.json();
      setAges(data?.data);
    };
    fetchUniqueAges()

    const fetchUniqueBreeds = async () => {

      const response = await fetch(`${process.env.NEXT_PUBLIC_BECKEN_URL}/pets/unique-breeds`);
      const data = await response.json();
      setBreeds(data?.data);
    };

    fetchUniqueBreeds()


    const fetchUniqueLocations = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BECKEN_URL}/pets/unique-locations`);
      const data = await response.json();
      setLocations(data?.data);
    };
    fetchUniqueLocations()


    const fetchUniqueSpecies = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BECKEN_URL}/pets/unique-species`);
      const data = await response.json();
      setSpecies(data?.data);
    };
    fetchUniqueSpecies()
  }, [])


  const [dynamicURL, setDynamicURL] = useState('')
  const [formData, setFormData] = useState<FormData>({
    breed: '',
    age: '',
    searchTerm: '',
    location: '',
    gender: '',
    size: '',
  })

  const generateDynamicURL = () => {
    const baseEndpoint = ''
    const queryParams = []

    for (const property in formData) {
      if (formData[property]) {
        queryParams.push(
          `${property}=${encodeURIComponent(formData[property])}`,
        )
      }
    }

    if (queryParams.length > 0) {
      const queryString = queryParams.join('&')
      return `${baseEndpoint}?${queryString}`
    }

    return baseEndpoint
  }

  const handleFilter = (e: any) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))

    // setDynamicURL(generateDynamicURL());
  }

  useEffect(() => {
    setDynamicURL(generateDynamicURL())
  }, [formData])

  // console.log(dynamicURL);

  return (
    <section>
      {/* Filter options */}
      <form
        onChange={handleFilter}
        className="mt-8">
        <h2 className="text-xl font-bold mb-4">Filter Options</h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> */}


        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/*  BreedFilter */}
          <div className="mb-4">
            <label htmlFor="breed" className="block text-sm font-medium text-gray-700 mb-1">
              Breed
            </label>

            <select id="breed" name="breed" className="select select-primary w-full max-w-xs" >
              <option disabled selected>Filter by Breed</option>
              {
                breeds.map(breed => <option key={breed}>{breed}</option>)
              }
            </select>
          </div>

          {/*  BreedFilter */}
          <div className="mb-4">
            <label htmlFor="breed" className="block text-sm font-medium text-gray-700 mb-1">
              Species
            </label>

            <select id="species" name="species" className="select select-primary w-full max-w-xs" >
              <option disabled selected>Filter by Species</option>
              {
                species.map(species => <option key={species}>{species}</option>)
              }
            </select>
          </div>


          {/* Age Filter */}
          <div className="mb-4">
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
              Age
            </label>
            <select id="age" name="age" className="select select-primary w-full max-w-xs" >
              <option disabled selected>Filter by Age</option>
              {
                ages.map(age => <option key={age}>{age}</option>)
              }
            </select>
          </div>


          {/* Search Filter */}
          <div className="mb-4">
            <label htmlFor="searchTerm" className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>
            <input
              id="searchTerm"
              type="text"
              name="searchTerm"
              placeholder="Search by Species, Breed, Location"
              className="w-full p-2 border rounded"
            />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Style Filter */}
          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <select id="location" name="location" className="select select-primary w-full max-w-xs" >
              <option disabled selected>Filter by Location</option>
              {
                locations.map(location => <option key={location}>{location}</option>)
              }
            </select>
          </div>

          {/* Color Filter */}
          <div className="mb-4">
            <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
              Size
            </label>
            <select id="size" name="size" className="select select-primary w-full max-w-xs" >
              <option disabled selected>Filter by Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>


          {/* Model Filter */}
          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select id="gender" name="gender" className="select select-primary w-full max-w-xs" >
              <option disabled selected>Filter by Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Color Filter */}
          <div className="mb-4">
            <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
              Medical History

            </label>
            <select id="medicalHistory" name="medicalHistory" className="select select-primary w-full max-w-xs" >
              <option disabled selected>Filter by Medical History</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </section>

      

      </form>

    </section>
  );
};

export default SearchSystem;

