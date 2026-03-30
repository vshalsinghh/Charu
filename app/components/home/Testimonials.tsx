"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { Quote } from "lucide-react";
import Title from "./title";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Consistent quality, even at high volumes. That’s rare.",
      name: "Parina Gujral",
      rating: 5
    },
    {
      text: "They bring experience that shows in execution.",
      name: "Abhinav Bindra",
      rating: 5
    },
    {
      text: "Strong systems that understand buyer needs.",
      name: "Pahini Kapadia",
      rating: 5
    },
    {
      text: "Professional team and always reliable delivery.",
      name: "Aarya Singh",
      rating: 5
    },
  ];

  return (
    <section className="py-0 md:py-20">
      <div className="max-w-7xl mx-auto md:px-7 container text-center">
        <div className="mb-14">
        <Title 
            title="Testimonials"
            />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-6 text-left px-6 md:px-0 flex flex-row md:flex-col gap-4 items-start justify-center w-full">
            <div className="text-gray-300">
              <Quote size={90} />
            </div>

            <h3 className="text-4xl font-semibold leading-tight">
              What our <br /> customers say
            </h3>
            <p className="text-gray-600 max-w-md text-lg leading-relaxed hidden md:block">
              We pride ourselves on our long-term partnerships built on trust,
              consistent quality, and dependable execution.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <Swiper
          modules={[Navigation]}
          navigation
            spaceBetween={20}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.4 },
            }}
            className="col-span-2"
            style={{paddingLeft: "2rem", paddingRight: "2rem"}}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} style={{height: "auto"}}>
                <div className="bg-gray-200 rounded-3xl p-8 h-full flex flex-col justify-between">
                  <div className="space-y-6">
                    <p className="text-2xl font-medium leading-relaxed text-left">
                      “{item.text}”
                    </p>

                    {/* STARS */}
                    <div className="flex gap-1 text-black text-xl">
                      {Array(item.rating)
                        .fill(0)
                        .map((_, i) => (
                          <span key={i}>★</span>
                        ))}
                    </div>
                  </div>

                  {/* USER */}
                  <div className="flex items-center gap-3 mt-8">
                    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-lg">
                      👤
                    </div>
                    <span className="text-lg">{item.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
