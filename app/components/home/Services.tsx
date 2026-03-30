"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Title from "./title";
import Link from "next/link";

const services = [
  {
    title: "Quilting",
    desc: "Advanced automated multi-head quilting—from 6 to 32 heads—designed for speed, uniformity, and scale.",
    icon: "/home/service1.png",
    alt: "Illustrated Quilting Machine Icon"
  },
  {
    title: "Garmenting",
    desc: "Precision stitching and garmenting backed by experienced teams and quality-controlled processes.",
    icon: "/home/service2.png",
    alt: "Illustrated Sewing Machine Icon"
  },
  {
    title: "Digital Printing",
    desc: "High-definition digital printing engineered for colour accuracy, consistency, and export-grade performance.",
    icon: "/home/service3.png",
    alt: "Illustrated Digital Printing Machine Icon"
  },
];


export default function ServicesCarousel() {
  return (
    <section className="services w-full py-16 px-6 bg-[#EEEEEE]" >
      <div className="container text-center m-auto">
        <Title title="Services We Provide"
          subtitle="We support your production needs with integrated services designed for speed, consistency, and complete process control."/>
        <div className="">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
          
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <div className="service-card px-8">
                <div className="flex justify-center">
                  <img src={service.icon} alt={service.alt} />
                </div>
                <h3 className="text-lg py-2 px-2 font-semibold">{service.title}</h3>
                <p className="py-2 px-2">{service.desc}</p>
                <button className="learn-btn border-2 py-1 px-4 rounded-full ">
                <Link href="/capabilities">
                Learn
                </Link>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>

    </section>
  );
}