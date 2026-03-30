export default function StatsSection() {
    const stats = [
      {
        value: "45+",
        label: "Years of Service",
      },
      {
        value: "500+",
        label: "Skilled Professionals",
      },
      {
        value: "2",
        label: "Advanced Facilities",
      },
    ];
  
    return (
      <section className="w-full py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
  
          {/* Heading */}
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-14">
            Every successful program is backed by experience, skilled people, and
            facilities built to deliver dependable, large-scale manufacturing.
          </p>
  
          {/* Stats */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-12">
  
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
  
                <h2 className="text-4xl md:text-7xl font-light mb-4">
                  {stat.value}
                </h2>
  
                <p className="uppercase tracking-wide text-gray-700 text-sm md:text-base">
                  {stat.label}
                </p>
  
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }