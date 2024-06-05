
import { IPetData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import EditPetFormModal from "./EditPetFormModal";
import PetCardDeleteButton from "./PetCardDeleteButton";

interface IPetCardProps {
  isEditable?: boolean;
  pet: IPetData;
}

const PetCard = ({ pet, isEditable = false ,isPetDelete, setIsPetDelete}: IPetCardProps) => {
  const {
    name,
    id,
    location,
    description,
    age,
    breed,
    healthStatus,
    bannerPhoto,
  } = pet;

  return (
    <>
      <div className="  max-w-sm overflow-hidden w-full shadow-lg p-1 mx-auto rounded-2xl">
        <div className="relative min-h-64 ">
          <Image
            fill
            quality={100}
            className="object-contain min-h-64 " 
            src={
              bannerPhoto ||
              "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
            }
            alt="Saint Martin's Island"
          />
          <span className="flex items-center xl:gap-1 absolute top-2 right-1 bg-red-500 rounded-full xl:px-3 lg:p-1 py-1 text-sm font-semibold text-white">
            <FaLocationDot />
            <span>{location}</span>
          </span>
          <span className="flex items-center gap-0 md:gap-0 lg:gap-1 absolute top-2 left-1 bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white">
            <MdHealthAndSafety />
            <span>Bad condition</span>
          </span>
        </div>
        <div className=" ">
          <div className="px-3 py-4">
            <div className="font-bold text-xl mb-2 rancho-regular">
              {name}
              <div className="badge text-red-500  badge-outline ml-2">$100</div>
            </div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className="flex justify-between gap-10 px-3">
            <div className="font-bold rancho-regular">
              breed :
              <div className="badge text-red-500  badge-outline ml-2">
                {breed}
              </div>
            </div>
            <div className="font-bold rancho-regular">
              age :
              <div className="badge text-red-500  badge-outline ml-2">
                {age}yr
              </div>
            </div>
          </div>
          <div
            className={`md:p-1 p-3 xl:px-6 mb-3 mt-5 pt-4 pb-2 flex items-center ${
              isEditable ? "justify-between" : "justify-center"
            }`}
          >
           <EditPetFormModal pet={pet} id ={id} isEditable={isEditable}  isPetDelete={isPetDelete} setIsPetDelete={setIsPetDelete}/>
            <Link href={`/pet/${pet.id}`}>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded">
                View Details
              </button>
            </Link>
            <PetCardDeleteButton key={id} id={id} isEditable={isEditable} isPetDelete={isPetDelete} setIsPetDelete={setIsPetDelete}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetCard;
