import React, { useState } from "react";
import brandsData from "../data/brands.json";
import { Search, Star, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Brands = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBrands = brandsData.filter((brand) =>
    brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="pb-16 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-8" data-aos="fade-down">
        Explore Our Partner Brands
      </h1>

      {/* Search Bar */}
      <div
        className="relative mb-12 shadow-xl rounded-2xl overflow-hidden"
        data-aos="fade-up"
      >
        <input
          type="text"
          placeholder="Search brands..."
          className="input input-bordered w-full pl-12 h-14 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50"
          size={24}
        />
      </div>

      {/* Brands List */}
      <div className="flex flex-col gap-8">
        {filteredBrands.length > 0 ? (
          filteredBrands.map((brand) => (
            <div
              key={brand._id}
              className="group bg-base-100 rounded-3xl p-6 shadow-lg border border-base-200 hover:border-primary transition-all flex flex-col md:flex-row gap-6 items-center"
              data-aos="fade-up"
            >
              {/* Brand Logo & Rating */}
              <div className="flex flex-col items-center gap-2 min-w-[150px]">
                <div className="w-24 h-24 p-2 bg-base-200 rounded-2xl overflow-hidden">
                  <img
                    src={brand.brand_logo}
                    alt={brand.brand_name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex items-center gap-1 text-warning font-bold">
                  <Star size={18} fill="currentColor" />
                  {brand.rating}
                </div>
              </div>

              {/* Brand Info */}
              <div className="flex-grow text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h2 className="text-2xl font-bold">{brand.brand_name}</h2>
                  {brand.isSaleOn && (
                    <span className="badge badge-error text-white font-bold animate-pulse">
                      SALE IS ON!
                    </span>
                  )}
                </div>
                <p className="opacity-70 mb-4">{brand.description}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  <span className="badge badge-outline">{brand.category}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 min-w-[200px]">
                <Link
                  to={`/brand/${brand._id}`}
                  className="btn btn-primary w-full group-hover:gap-3 transition-all"
                >
                  View Coupons <ArrowRight size={18} />
                </Link>
                <a
                  href={brand["shop-Link"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm w-full gap-2"
                >
                  Visit Shop <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-20 opacity-50">
            <Search size={64} className="mx-auto mb-4" />
            <p className="text-2xl">No brands found matching "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Brands;
