export function WhyChooseUs() {
    return (
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          {/* Image Card */}
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="/about/factory.png"
              className="w-full h-80 md:h-160 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center gap-4 md:justify-end md:items-start text-center md:text-start p-6">
              <h2 className="text-white text-6xl font-semibold">
                Why choose us?
              </h2>
              <p className="text-white ">
              Manufacturing expertise designed for consistency, control, and growth.
              </p>
            </div>
          </div>
  
          {/* Content */}
          <div className="space-y-6">
            {[
              {
                title: "Advanced Systems",
                desc: "We operate modern automated quilting, digital printing, stitching, and embroidery systems that deliver precision, speed, and uniform quality across both small developments and large production runs.",
              },
              {
                title: "Integrated Facilities",
                desc: "With dedicated sampling and bulk production units under one roof, we ensure faster development cycles, better coordination, and tighter quality control across garments and home furnishing programs.",
              },
              {
                title: "Built for Scale",
                desc: "Our infrastructure, workforce, and production planning are designed to support growing volumes while maintaining delivery timelines and quality standards.",
              },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="font-semibold mb-1 text-2xl">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }