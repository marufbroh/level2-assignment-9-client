'use client'
import { usePathname, useRouter } from 'next/navigation'; // Import from next/navigation instead of next/router

const Banner = () => {
  const router = usePathname(); 

  if (!(router === '/')) {
    return null;
  }

  return (
    <div className="relative  h-96 md:h-[40rem] bg-cover bg-center" style={{ backgroundImage: `url('https://i.ibb.co/17VZ6XK/bannerBg.png')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl font-bold mb-4">
          Got <span className="text-red-500">Love</span>? Give <span className="text-red-500">Love</span>.
        </h1>
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
          Donate
        </button>
      </div>
    </div>
  );
};

export default Banner;
