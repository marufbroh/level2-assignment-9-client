
import Image from "next/image";
import PetCard from "../petCards/page";
import { IPetData } from "@/types";
import SearchBar from "../SearchBar/SearchBar";

const AvailablePets = async() => {

  
  const res= await fetch(`http://localhost:7000/api/pets`)
  const resJson= await res.json()
  const AllPets:IPetData[]= resJson.data

 console.log(AllPets);


  return (
    <section>

      <SearchBar/>
      <h1 className="rancho-regular text-center uppercase text-4xl font-bold my-6">
        Avialable pet for you
      </h1>
      <div className="grid grid-cols-1 px-2  md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {
          AllPets.map(pet=>  <PetCard key={pet.id} pet={pet} />)
        }
       
      </div>
    </section>
  );
};

export default AvailablePets;
