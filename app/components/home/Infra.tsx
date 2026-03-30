"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Title from "./title";

export default function Infrastructure() {
  const data = [
    {
      title: "Advanced Systems",
      image: "/home/infra1.png",
      alt: "Digital Printing Machine"
    },
    {
      title: "Integrated Facilities",
      image: "/home/infra2.png",
      alt: "Charu Factory Garment Production Floor"
    },
    {
      title: "Built for Scale",
      image: "/home/infra3.png",
      alt: "Charu Factory Quality Check"
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto px-4 text-center container">
        <Title 
        title="Infrastructure"
        subtitle="Our manufacturing infrastructure is designed to support both complexity and scale."
        />

        {/* Swiper */}
        <Swiper
        modules={[Navigation]}
        navigation
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-2xl overflow-hidden shadow-lg group">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-[420] object-cover"
                />

                {/* Overlay Card */}
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                  <div className="bg-white/80 backdrop-blur-md p-4 rounded-xl text-center opacity-90">
                    <div className="text-2xl mb-2">⚙️</div>
                    <p className="font-medium">{item.title}</p>
                  </div>
                </div>

                {/* Button */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <button className="bg-white px-4 py-2 rounded-full text-sm shadow hover:bg-gray-100 transition flex items-center gap-1">
                    Learn More →
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}