import React from "react";

import cat1 from "../assets/cat-1.webp";
import cat2 from "../assets/cat-2.webp";
import cat3 from "../assets/cat-3.webp";
import cat4 from "../assets/cat-4.webp";
import cat5 from "../assets/cat-5.webp";
import cat6 from "../assets/cat-6.jpg";
import cat7 from "../assets/cat-7.jpg";

const catalogues = [
  {
    title: "PRODUCTS CATALOGUE",
    image: cat1,
    
  },
  {
    title: "REGENERATIVE MATERIALS",
    image: cat2,
    
  },
  {
    title: "GUIDED SURGERY",
   image: cat3,
    
  },
   {
    title: "PRODUCTS CATALOGUE",
    image: cat4,
    
  },
  {
    title: "REGENERATIVE MATERIALS",
    image: cat5,
   
  },
 
   {
    title: "PRODUCTS CATALOGUE",
    image: cat6,
   
  },
 
  {
    title: "GUIDED SURGERY",
   image: cat7,
    
  }
];

const AllCatalogue = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6">
      
      {/* Title */}
      <h1 className="text-center text-3xl md:text-4xl font-semibold mb-12">
        DOWNLOAD AREA
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {catalogues.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden cursor-pointer"
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[500px] object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-70`}
            ></div>

            {/* Vertical Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-3xl font-bold tracking-[10px] writing-mode-vertical text-center">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCatalogue;