"use client";

import React from "react";

// ================= TYPES =================
type SectionCardProps = {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "right";
  bgColor?: boolean
};

// ================= REUSABLE CARD =================
function SectionCard({ title, icon, children, align = "left", bgColor = true }: SectionCardProps) {
  return (
    <div className={bgColor ? "bg-[#EEEEEE] rounded-2xl p-6 md:p-8 grid md:grid-cols-2 gap-2 items-center" : "rounded-2xl p-6 md:p-8 grid md:grid-cols-2 gap-2 items-center"} >
      {align === "left" && (
        <div className="flex flex-col items-center md:items-center text-center md:text-center">
          <div className="text-6xl mb-4">{icon}</div>
          <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
        </div>
      )}

      <div className="text-sm text-gray-700 leading-relaxed space-y-2">
        {children}
      </div>

      {align === "right" && (
        <div className="flex flex-col items-center md:items-center text-center md:text-right">
          <div className="text-6xl mb-4">{icon}</div>
          <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
        </div>
      )}
    </div>
  );
}

// ================= MAIN PAGE =================
export default function SustainabilityPage() {
  return (
    <main className="">
      {/* HERO */}
      <section className="relative h-[260px] md:h-[360px]">
        <img
          src="/sustainability/banner.png"
          className="w-full h-full object-cover"
          alt="Sustainability"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <h1 className=" text-3xl lg:text-6xl font-semibold text-white">
            Sustainability at Our Core
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-10 md:py-14 max-w-5xl mx-auto">
        <div className="mx-auto px-6 text-center text-gray-700 leading-relaxed text-xl">
          At Charu, responsibility isn’t a layer we add on—it’s woven into how we think, make, and grow. From the materials we choose to the partners we work with, every decision is guided by a simple belief: great manufacturing should leave a lighter footprint on the world.
        </div>
      </section>

      {/* ENVIRONMENTAL */}
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <SectionCard title="ENVIRONMENTAL" icon={<img src="/sustainability/g50.png" className="h-40" alt="OEKO" />}>
          <ul className="list-disc pl-5 space-y-2 text-lg">
              <li className="flex items-start gap-2">
                <img src="/sustainability/path1.png" alt="icon" className="h-10" />
                <span>Thoughtful sourcing of organic and recycled materials, reducing our reliance on virgin resources</span>
              </li>
              <li className="flex items-start gap-2">
                <img src="/sustainability/path2.png" alt="icon" className="h-10" />
                <span>Solar-powered operations, helping us transition toward cleaner energy</span>
              </li>
              <li className="flex items-start gap-2">
                <img src="/sustainability/path3.png" alt="icon" className="h-10" />
                <span>Advanced water recycling systems and an in-house ETP plant, ensuring responsible water use at every stage</span>
              </li>
              <li className="flex items-start gap-2">
                <img src="/sustainability/path4.png" alt="icon" className="h-10" />
                <span>Energy-efficient machinery that lowers consumption without compromising on quality</span>
              </li>
              <li className="flex items-start gap-2">
                <img src="/sustainability/path5.png" alt="icon" className="h-10" />
                <span>Continuous focus on waste reduction and circularity, turning excess into opportunity—not landfill</span>
              </li>
          </ul>
        </SectionCard>
      </section>

      {/* SOCIAL */}
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <SectionCard title="SOCIAL" icon={<img src="/sustainability/g48.png" className="h-40" alt="OEKO" />} align="right" bgColor={false}>
          <p  className="text-lg">People are at the heart of everything we do—on our floors and across our supply chain.</p>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>Upholding fair labor practices that respect dignity, safety, and equality</li>
            <li>Creating and maintaining safe, healthy working environments</li>
            <li>Investing in the well-being and growth of our workforce</li>
            <li>Partnering only with certified vendors and factories who meet our ethical standards</li>
            <li>Building a transparent, accountable supply chain that reflects our values end-to-end.</li>
          </ul>
        </SectionCard>
      </section>

      {/* GOVERNANCE */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <SectionCard title="GOVERNANCE" icon={<img src="/sustainability/g47.png" className="h-40" alt="OEKO" />} >
          <p className="text-lg">Integrity guides our decisions—both visible and behind the scenes.</p>
          <ul className="list-disc pl-5 space-y-2 text-lg">

            <li>A culture of ethical business practices, transparency, and continuous improvement</li>
            <li>Responsible sourcing and operations aligned with global standards and long-term impact.</li>
          </ul>

          <div className="flex gap-6 mt-4 items-center">
            <img src="/sustainability/images.png" className="h-10" alt="OEKO" />
            <img src="/sustainability/sedex-logo.webp" className="h-10" alt="Sedex" />
          </div>
        </SectionCard>
      </section>

      {/* FOOTER TEXT */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-700 leading-relaxed text-xl">
          We’re building a future where high-quality manufacturing goes hand-in-hand with care for the planet. At Charu, sustainability is not an afterthought—it’s part of who we are.
        </div>
      </section>
    </main>
  );
}
