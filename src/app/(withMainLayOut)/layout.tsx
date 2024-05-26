import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import Banner from "@/components/ui/HomePage/Banner/Banner";


import React, { ReactNode } from "react";



const layout  = ({ children }: { children: ReactNode }) => {
  
  return (
    <div>

      <Navbar />
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export default layout;
