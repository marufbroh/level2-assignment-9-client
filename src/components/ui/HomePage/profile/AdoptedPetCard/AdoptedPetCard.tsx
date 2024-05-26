import Image from "next/image";

const AdoptedPetCard = ({ messageNumber }: { messageNumber: number }) => {
  const messageNumberIndex = messageNumber;
  const adoptionPhrases = [
    {
        message: "Adopt from a shelter and give an animal a loving home.",
        action: "Find your new pet in our listings.",
      },
      {
        message: "Transform a shelter animal's life by adopting.",
        action: "Discover your new dog or cat in our pet directory.",
      },
      {
        message: "Give a shelter animal a forever home.",
        action: "Find your perfect pet in our adoption listings.",
      },
      {
        message: "Adopt and change a life.",
        action: "Explore our shelter's available pets for your new dog or cat.",
      },
      {
        message: "Bring love home by adopting from a shelter.",
        action: "Search our pet listings for your new companion.",
      },
      {
        message: "Find your loyal friend by adopting from a shelter.",
        action: "Check out our available pets.",
      },
    {
      message: "Make a difference by adopting a shelter animal.",
      action: "Your new pet is waiting in our adoption directory.",
    },
    {
      message: "Shelter pets need loving homes.",
      action: "Adopt today and find your new companion in our listings.",
    },
    {
      message: "Adopt from a shelter and make a friend for life.",
      action: "Discover pets ready for adoption in our directory.",
    },
    {
      message: "Give a homeless animal hope.",
      action: "Browse our shelter's pet directory and make a difference.",
    },
  ];

  return (
    <div className="px-6 py-3 md:py-0 md:min-h-60 md:max-h-60 flex flex-col-reverse  md:flex-row justify-around items-center bg-white rounded-2xl border  border-red-200 shadow-md">
      <div className="basis-1/2">
        <h2 className="text-2xl font-semibold mb-2 rancho-regular ">Adopt a pet</h2>
        <div className="mb-4">
          <span>
            {adoptionPhrases[messageNumberIndex]?.message}
            {adoptionPhrases[messageNumberIndex]?.action}
          </span>
          <a href="#" className="text-orange-600 hover:underline">
            shelter pet databank
          </a>
          <div className="mb-2 my-2 font-semibold rancho-regular">Adopted Date: <span className="font-sans">12-5-2024</span></div>
        </div>
        <div className="px-6 mt-3   flex items-center justify-center">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
      </div>
      </div>
      <div className="flex justify-center ">
        <Image
        width={1000}
        height={1000}
          src="https://www.petplace.com/media_1d4b6a5fa19756bba407ebe1cc6b526f02e9072b9.png?width=2000&format=webply&optimize=medium" // Replace with the actual path to your image
          alt="Person holding a cat"
          className="md:w-56 w-[80%] md:h-full rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default AdoptedPetCard;
