import AvailablePets from "@/components/ui/HomePage/AvailablePets/AvailablePets";
import Banner from "@/components/ui/HomePage/Banner/Banner";
import SearchSystem from "@/components/ui/HomePage/SearchBar/SearchBar";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen">   
      <SearchSystem />
      <AvailablePets />
    </div>
  );
};

export default HomePage;
