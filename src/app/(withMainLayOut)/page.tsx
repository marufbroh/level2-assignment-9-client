import AvailablePets from "@/components/ui/HomePage/AvailablePets/AvailablePets";
import Review from "@/components/ui/HomePage/Review/Review";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <AvailablePets />

      <Review></Review>
    </div>
  );
};

export default HomePage;
