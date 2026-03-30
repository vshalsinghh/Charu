"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Title from "../home/title";

export default function Buyers() {
  const data = [
    {
      image: "/capabilities/createnbarrel.png",
      alt: "Crate & Barrel"
    },
    {
        image: "/capabilities/sleeplove.png",
        alt: "Sleeplove"
      },
      {
        image: "/capabilities/roman.png",
        alt: "Roman"
      },
      {
        image: "/capabilities/nbrown.png",
        alt: "N brown"
      },
      {
        image: "/capabilities/nibs.png",
        alt: "nibs"
      },
      {
        image: "/capabilities/dusk.png",
        alt: "dusk"
      },
      {
        image: "/capabilities/sferra.png",
        alt: "sferra"
      },
      {
        image: "/capabilities/jayes-studio.png",
        alt: "jayes-studio"
      },
      {
        image: "/capabilities/indigo.png",
        alt: "indigo"
      },
      {
        image: "/capabilities/tsc.png",
        alt: "tsc"
      },
      {
        image: "/capabilities/garnet-hil.png",
        alt: "garnet-hil"
      },
      {
        image: "/capabilities/sur-la-table.png",
        alt: "sur-la-table"
      },
      {
        image: "/capabilities/ropo.png",
        alt: "ropo"
      },
      {
        image: "/capabilities/boss.png",
        alt: "boss"
      },
      {
        image: "/capabilities/gravi-fluff.png",
        alt: "gravi-fluff"
      },
  ];

  return (
    <section className="w-full py-16 relative bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4 text-center container">
        <Title 
        title="Our Clients"
        />

        {/* Swiper */}
        <Swiper
        modules={[Navigation]}
        navigation
          spaceBetween={40}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-[220] object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}