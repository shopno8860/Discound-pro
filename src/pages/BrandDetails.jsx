import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import brandsData from "../data/brands.json";
import { Star, Gift, Copy, ExternalLink, Calendar, Info } from "lucide-react";
import toast from "react-hot-toast";

const BrandDetails = () => {
  const { id } = useParams();
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    const selectedBrand = brandsData.find((b) => b._id === id);
    setBrand(selectedBrand);
    window.scrollTo(0, 0);
  }, [id]);

  if (!brand)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );

  return (
    <div className="pb-16 max-w-6xl mx-auto px-4">
      
      {/* Brand Header */}
      <div
        className="bg-base-100 rounded-3xl p-8 mb-12 shadow-xl border border-base-200 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="w-32 h-32 md:w-48 md:h-48 p-4 bg-base-200 rounded-3xl overflow-hidden shadow-inner">
          <img
            src={brand.brand_logo}
            alt={brand.brand_name}
            className="w-full h-full object-contain"
          />
        </div>

        <div className="text-center md:text-left flex-grow">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            {brand.brand_name}
          </h1>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4">
            <div className="flex items-center gap-1 text-warning bg-warning/10 px-3 py-1 rounded-full font-bold">
              <Star size={20} fill="currentColor" />
              {brand.rating}
            </div>

            <span className="badge badge-lg badge-outline border-base-300">
              {brand.category}
            </span>
          </div>

          <p className="text-lg opacity-70 max-w-2xl">
            {brand.description}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href={brand["shop-Link"]}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg gap-2 shadow-lg"
          >
            Visit Website <ExternalLink size={20} />
          </a>
        </div>
      </div>

      {/* Coupons Section */}
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <Gift className="text-primary" /> Available Coupons
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brand.coupons.map((coupon, idx) => (
          <div
            key={idx}
            className="card bg-base-100 shadow-xl border-2 border-dashed border-base-300 hover:border-primary transition-all group overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

            <div className="card-body relative">
              
              <div className="flex justify-between items-start mb-4">
                <span className="badge badge-primary font-bold">
                  {coupon.cupon_type}
                </span>

                <div className="flex items-center gap-1 text-xs opacity-60">
                  <Calendar size={14} />
                  Expires: {coupon["expiry-date"]}
                </div>
              </div>

              <h3 className="text-2xl font-black text-primary mb-2">
                {coupon["coupon-code"]}
              </h3>

              <p className="text-sm font-semibold mb-1">
                {coupon.description}
              </p>

              <p className="text-xs opacity-60 flex items-center gap-1 mb-6">
                <Info size={12} /> {coupon.condition}
              </p>

              <div className="card-actions grid grid-cols-2 gap-3 mt-auto">
                
                {/* ✅ Modern Copy Button */}
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(coupon["coupon-code"]);
                    toast.success("Copied to clipboard!");
                  }}
                  className="btn btn-outline btn-primary btn-sm gap-2"
                >
                  <Copy size={16} /> Copy Code
                </button>

                <a
                  href={brand["shop-Link"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  Use Now
                </a>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
