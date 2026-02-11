import React from "react";
import Marquee from "react-fast-marquee";
import brands from "../data/brands.json";
import { useNavigate } from "react-router-dom";

const TopBrands = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-12" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center mb-8">Top Brands</h2>
      <Marquee
        pauseOnHover={true}
        gradient={true}
        speed={50}
        className="bg-base-100 py-4"
      >
        {brands.map((brand) => (
          <div
            key={brand._id}
            onClick={() => navigate(`/brand/${brand._id}`)}
            className="mx-8 cursor-pointer hover:scale-110 transition-transform flex flex-col items-center"
          >
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="h-16 w-16 md:h-24 md:w-24 object-contain rounded-lg"
            />
            <p className="mt-2 font-semibold text-sm">{brand.brand_name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TopBrands;
