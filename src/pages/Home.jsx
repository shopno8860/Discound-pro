import React from "react";
import Banner from "../components/Banner";
import TopBrands from "../components/TopBrands";
import BrandCard from "../components/BrandCard";
import brandsData from "../data/brands.json";
import { ShoppingBag, Users, Zap, ShieldCheck } from "lucide-react";

const Home = () => {
  const brandsOnSale = brandsData.filter((brand) => brand.isSaleOn);

  return (
    <div className="pb-16 flex flex-col gap-12">
      {/* Banner Section */}
      <section>
        <Banner />
      </section>

      {/* Top Brands Marquee */}
      <section>
        <TopBrands />
      </section>

      {/* Brands on Sale Section */}
      <section className="container mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-2">
          <ShoppingBag className="text-error" /> Brands on Sale
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {brandsOnSale.map((brand) => (
            <BrandCard key={brand._id} brand={brand} />
          ))}
        </div>
      </section>

      {/* Extra Section 1: Why Choose Us */}
      <section
        className="bg-base-200 py-16 px-4 rounded-3xl"
        data-aos="zoom-in"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Discount PRO?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                <Zap size={40} />
              </div>
              <h3 className="text-xl font-bold">Fast & Easy</h3>
              <p className="opacity-70">
                Copy codes instantly and save time on every order.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-secondary/10 rounded-2xl text-secondary">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-bold">Trusted Brands</h3>
              <p className="opacity-70">
                We collaborate with the most popular shops in Bangladesh.
              </p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-accent/10 rounded-2xl text-accent">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-xl font-bold">Verified Coupons</h3>
              <p className="opacity-70">
                Our team ensures every coupon is active and valid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Section 2: Newsletter */}
      <section
        className="bg-primary text-primary-content py-16 px-4 rounded-3xl overflow-hidden relative"
        data-aos="fade-up"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4 italic">
            Never Miss a Bargain!
          </h2>
          <p className="text-lg opacity-90 mb-8 font-medium">
            Subscribe to our newsletter and get the latest discount alerts
            directly in your inbox.
          </p>
          <div className="join w-full max-w-md shadow-2xl">
            <input
              className="input input-bordered join-item w-full text-base-content"
              placeholder="Email address"
            />
            <button className="btn btn-secondary join-item border-none px-8 font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
