import Image from "next/image";
import Title from "../home/title"

export function Objective() {
    const objective = [
        {
            title: "Mission",
            description: "To manufacture high-quality home furnishing products and garments through efficient processes, modern technology, and consistent execution.",
            image: "/about/mission.png",
        },
        {
            title: "Vision",
            description: "To be a globally trusted manufacturing partner, recognised for scale, technical capability, and responsible production practices.",
            image: "/about/vision.png",
        },
        {
            title: "Values",
            description: `Guided by craftsmanship, accountability, and long-term thinking, Charu operates on three core values:`,
            
            image: "/about/value.png",
            list: [
                "Quality Without Compromise",
                "Sustainability With Intention",
                "Relationships Built on Trust",
              ],
        },
    ]
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Title 
          title="Our Objective"
          subtitle="To deliver reliable manufacturing solutions that grow with our partners."
          />
  
          <div className="grid md:grid-cols-3 gap-6">
            {objective.map((item, i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-2xl p-6 space-y-4"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Image src={item.image} width={200} height={200} alt={item.title} />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">
                 {item.description}
                </p>
                {
                item.list && 
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                {item.list.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
                </ul>
                }
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }