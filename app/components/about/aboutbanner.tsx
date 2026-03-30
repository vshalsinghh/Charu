export function AboutHero() {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <button className="border px-4 py-1 rounded-full text-2xl mb-6">
            About Us
          </button>
  
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <h1 className="text-3xl lg:text-5xl font-semibold leading-tight">
              A manufacturing legacy shaped by precision, scale, and trust.
            </h1>
  
            <div className="grid grid-cols-3 text-center gap-6">
              <div>
                <h2 className="text-4xl font-semibold">45+</h2>
                <p className="text-xs text-gray-500">YEARS OF SERVICE</p>
              </div>
              <div>
                <h2 className="text-4xl font-semibold">500+</h2>
                <p className="text-xs text-gray-500">SKILLED PROFESSIONAL</p>
              </div>
              <div>
                <h2 className="text-4xl font-semibold">2</h2>
                <p className="text-xs text-gray-500">ADVANCED FACILITIES</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }