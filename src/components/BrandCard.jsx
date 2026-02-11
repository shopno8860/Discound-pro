import React from "react";
import { Share2, Star } from "lucide-react";
import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  return (
    <div
      className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all group"
      data-aos="fade-up"
    >
      <figure className="px-6 pt-6 relative h-48 overflow-hidden">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="rounded-xl w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
        {brand.isSaleOn && (
          <div className="absolute top-4 right-4 bg-error text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce">
            SALE ON!
          </div>
        )}
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-2xl font-bold">{brand.brand_name}</h2>
          <div className="flex items-center gap-1 bg-warning/20 text-warning px-2 py-1 rounded-lg text-sm font-bold">
            <Star size={16} fill="currentColor" />
            {brand.rating}
          </div>
        </div>
        <p className="text-sm opacity-70 line-clamp-2 min-h-[40px]">
          {brand.description}
        </p>
        <div className="flex items-center gap-2 mt-2">
          <span className="badge badge-outline badge-primary">
            {brand.category}
          </span>
          <span className="badge badge-outline badge-secondary font-bold">
            {brand.coupons.length} Coupons
          </span>
        </div>
        <div className="card-actions justify-end mt-4">
          <Link
            to={`/brand/${brand._id}`}
            className="btn btn-primary btn-block group-hover:translate-x-1 transition-transform"
          >
            View Coupons
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
