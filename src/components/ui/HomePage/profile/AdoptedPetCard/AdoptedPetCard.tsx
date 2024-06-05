import Image from "next/image";
import Link from "next/link";

const AdoptedPetCard = ({myAdoptedPet }: { myAdoptedPet: any }) => {
  console.log(myAdoptedPet);



  return (
    <div className="px-6 py-3 md:py-0 md:min-h-60 md:max-h-60 flex flex-col-reverse  md:flex-row justify-around items-center bg-white rounded-2xl border  border-red-200 shadow-md">
      <div className="basis-1/2">
        <h2 className="text-2xl font-semibold mb-2 rancho-regular ">{myAdoptedPet.name}</h2>
        <div className="mb-4">
          <span>
           {myAdoptedPet.temperament}
          </span>
          {/* <a href="#" className="text-orange-600 hover:underline">
            shelter pet databank
          </a> */}
          <div className="mb-2 my-2 font-semibold rancho-regular">Adopted Date: <span className="font-sans">{(myAdoptedPet.adoptedDate).slice(0,10)}</span></div>
        </div>
        <div className="px-6 mt-3   flex items-center justify-center">
      <Link href={`/pet/${myAdoptedPet.id}`}>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
      </Link>
      </div>
      </div>
      <div className="flex justify-center ">
        <Image
        width={1000}
        height={1000}
          src={myAdoptedPet.bannerPhoto} // Replace with the actual path to your image
          alt="Person holding a cat"
          className="md:w-56 w-[80%] md:h-full rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default AdoptedPetCard;
