"use client";

import { MessageCircle, Repeat, ClipboardList, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Initial Inquiry",
    desc: "Reach out to us through the form below with a brief overview of your product requirements, quantities, and timelines.",
  },
  {
    icon: Repeat,
    title: "Connect with us",
    desc: "Our team will get in touch to understand your needs in detail and clarify specifications.",
  },
  {
    icon: ClipboardList,
    title: "Commercial Alignment",
    desc: "We review MOQs, required services, timelines, and pricing feasibility to ensure clear alignment before proceeding.",
  },
  {
    icon: ThumbsUp,
    title: "Program Onboarding",
    desc: "Once aligned, the project is onboarded and sampling begins for approval, setting the foundation for smooth bulk production.",
  },
];

export default function WorkProcess() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-semibold mb-4">
            Our Work Process
          </h2>
          <p className="text-gray-600 max-w-2xl">
            We strive to have a simple, transparent approach designed to move smoothly from inquiry to execution.
          </p>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:grid grid-cols-4 gap-10 items-start">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative">
                {/* Line */}
                {index !== steps.length - 1 && (
                  <div className="absolute top-10 right-[-50%] w-[85%] h-[1px] bg-gray-300"></div>
                )}

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg mb-2">
                  {step.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* MOBILE LAYOUT */}
        <div className="lg:hidden grid grid-cols-2 gap-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center relative" tabIndex={index}>
                {/* Vertical connector */}
                {index === 1 && (
                  <div className="absolute left-1/2 top-full w-[1px] h-9 bg-gray-300"></div>
                )
                }
                {
                    (index === 0 || index === 2)
                    &&
                    <div className="absolute top-10 right-[-50%] w-[85%] h-[1px] bg-gray-300"></div>
                }

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                  <Icon size={26} />
                </div>

                <h3 className="font-semibold text-base mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
