import React from "react";
import services from "../fixtures/services/data.json";

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full min-h-[500px] flex items-center justify-center py-16 relative overflow-hidden bg-gradient-to-b from-white/10 to-purple-900">
      <div className="w-full md:max-w-7/8 mx-auto max-md:px-4">
        {/* Section Title */}
        <div className="text-left mb-12">
          <h2 className="text-[2rem] font-['Clash_Display'] font-semibold text-white mb-3">SERVICES</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative p-8 border border-white/25 group overflow-hidden"
            >
              {/* Hover overlay - now working */}
              <div className="absolute inset-0 bg-black opacity-0 rotate-x-90 transition-transform group-hover:rotate-x-180 origin-center border-white group-hover:opacity-100 duration-500 z-10"></div>

              {/* Content */}
              <div className="relative z-20 flex justify-between items-center">
                <h3 className="text-white text-2xl font-medium whitespace-pre-line leading-[1.3] pl-6">
                  {service.title}
                </h3>
                <div className="w-[90px] h-[110px] ml-4">
                  <img
                    src={service.icon}
                    alt="service icon"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
