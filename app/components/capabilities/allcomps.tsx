"use client";

import { Cpu, Shirt, Pencil, Printer } from "lucide-react";
import Title from "../home/title";

// ================= HERO =================
export function CapabilitiesHero() {
  return (
    <section className="relative h-[300px] lg:h-[400px]">
      <img
        src="/capabilities/main-banner.png"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white">
        <h1 className=" text-3xl lg:text-6xl font-semibold">
          Capabilities
        </h1>
      </div>
    </section>
  );
}

// ================= INTRO =================
export function CapabilitiesIntro() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">
          Precision-driven manufacturing, built to scale.
        </h2>

        <p className="text-gray-600 text-xl">
          From specialised processes to fully integrated production, our
          capabilities are structured to deliver efficiency, consistency, and
          export-ready quality.
        </p>
      </div>
    </section>
  );
}

// ================= STATS =================
export function CapabilitiesStats() {
  const stats = [
    { value: "500K+", label: "Mtrs of Fabric Printed" },
    { value: "100,000+", label: "Garments Made Per Month" },
    { value: "500+", label: "Team Members" },
    { value: "10+", label: "Countries Served" },
  ];

  return (
    <section className="pb-16 flex justify-center items-center">
      <div className="relative container overflow-hidden md:rounded-2xl h-[240] md:h-[180]">
        <img
          src="/capabilities/main-banner.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 max-w-full mx-auto px-6 top-[50%] translate-y-[-50%] flex justify-center items-center">
          <div className="text-white w-full rounded-2xl p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((item, i) => (
              <div key={i}>
                <h3 className="text-3xl font-semibold">{item.value}</h3>
                <p className="text-xs opacity-80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ================= SERVICES =================
export function Services() {
  const services = [
    {
      icon: Cpu,
      title: "Quilting",
      desc: "High-speed automated multi-head quilting systems (6 to 32 heads) that ensure uniform stitching, precise pattern control, and consistent output for home furnishing applications.",
      image: "/capabilities/quilting.png"
    },
    {
      icon: Shirt,
      title: "Garmenting",
      desc: "Efficient garment stitching and assembly supported by skilled operators, streamlined workflows, and quality checks at every stage of production.",
      image: "/capabilities/garmenting.png"
    },
    {
      icon: Pencil,
      title: "Designing",
      desc: "Our design and sampling teams work closely with buyers to translate ideas into production-ready designs, with attention to construction, finish, and detailing.",
      image: "/capabilities/designing.png"
    },
    {
      icon: Printer,
      title: "Digital Printing",
      desc: "Equipped with advanced digital printing and sublimation technology, we deliver high-definition prints with consistent colour reproduction, clarity, and durability for export markets.",
      image: "/capabilities/printing.png"
    },
  ];

  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <Title
          title="What services do we provide?"
          subtitle="End-to-end manufacturing services that support product development, scalable production, and reliable export execution."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4">
                  <img src={item.image} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className=" text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ================= INFRA BLOCK =================
export function CapabilitiesInfra() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <img
          src="/capabilities/infra.png"
          className="rounded-2xl w-full"
        />

        <div>
          <span className="border px-4 py-1 rounded-full text-2xl mb-6">
            Infrastructure
          </span>
          <h3 className="text-3xl font-semibold mt-4 mb-3">
            Engineered for seamless scale and consistency.
          </h3>
          <p className="text-xl text-gray-600">
            Our facilities are equipped with automated systems and skilled
            workforce to maintain high-quality output across production volumes.
          </p>
        </div>
      </div>
    </section>
  );
}
