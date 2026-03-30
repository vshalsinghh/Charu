import Image from "next/image";

export default function Banner() {
  return (
    <section className="w-full bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* TEXT SECTION */}
        <div className="hidden lg:block">
          <h1 className="text-6xl font-semibold leading-tight mb-6">
            Where craft meets <br /> industrial precision.
          </h1>

          <p className="text-gray-600 max-w-md mb-6">
            For over four decades, Charu has partnered with global buyers to
            turn design ideas into reliably executed garment and home
            furnishing production—delivered with consistency, care, and scale.
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-full">
              Contact Us
            </button>

            <button className="border border-black px-6 py-3 rounded-full">
              Learn More
            </button>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="/home/banner-building.png"
              alt="Charu Apparel Mfg. Co. Main Factory"
              width={700}
              height={500}
              className="object-cover w-full h-full"
            />
          </div> 

          {/* MOBILE OVERLAY CARD */}
          <div className="lg:hidden absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg p-6 w-[90%] text-center">
            <h1 className="text-3xl font-semibold mb-4">
              Where craft meets industrial precision.
            </h1>

            <p className="text-gray-600 text-sm mb-4">
              For over four decades, Charu has partnered with global buyers to
              turn design ideas into reliably executed garment and home
              furnishing production—delivered with consistency, care, and scale.
            </p>

            <div className="flex justify-center gap-3">
              <button className="bg-black text-white px-5 py-2 rounded-full text-sm">
                Contact Us
              </button>

              <button className="border border-black px-5 py-2 rounded-full text-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}