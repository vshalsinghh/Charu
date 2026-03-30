import Image from "next/image";
import Banner from "./components/home/Banner";
import StatsSection from "./components/home/Stats";
import ServicesCarousel from "./components/home/Services";
import Map from "./components/home/Map";
import Infrastructure from "./components/home/Infra";
import Testimonials from "./components/home/Testimonials";
import Title from "./components/home/title";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen  w-full items-center justify-center bg-zinc-50 font-sans">
    <Banner />
    <StatsSection />
    <ServicesCarousel />
    <Infrastructure />
    <Title 
    subtitle="Our units are equipped with modern automated quilting machines, embroidery units, stitching lines, and digital printing systems to ensure smooth, controlled production from sampling to bulk."
    />
    {/* <Testimonials /> */}
    <Map />
    <Contact />
    </div>
  );
}
