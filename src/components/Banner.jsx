import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Banner = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
      title: "Best Discounts for You",
      subtitle: "Find exclusive coupons for your favorite brands",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop",
      title: "Save Big Every Day",
      subtitle: "Collect and use coupons with a single click",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
      title: "Top Brands in One Place",
      subtitle: "Everything you need from fashion to electronics",
    },
  ];

  return (
    <div className="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-bounce text-center">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-2xl text-center">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
