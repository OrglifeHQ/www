import React from "react";
import awards from "../fixtures/awards/data.json";

const Awards: React.FC = () => {
  return (
    <section className="bg-black  text-white  p-4 md:px-8 py-16">
      <div className="w-full md:max-w-7/8 mx-auto flex flex-col gap-8">
        <h2 className="md:text-[2rem] text-2xl font-medium">AWARDS</h2>

        <div className="space-y-6 ">
          {awards.map((award) => (
            <div
              key={award.id}
              className="flex items-center max-md:items-start md:flex-row flex-col group w-full p-4 justify-between relative duration-500"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 transition-transform rotate-x-90 group-hover:rotate-x-180 opacity-0 group-hover:opacity-100 duration-500 bg-gradient-to-b to-white/10 from-purple-900 z-0" />

              {/* Left number box */}
              <div className="w-24 h-24 z-50  bg-white/10 flex items-center justify-center">
                <span className="text-[1.5rem] z-50 font-semibold tracking-0">
                  {award.id}
                </span>
              </div>

              {/* Award title */}
              <div className="flex-1 px-4 py-4 z-50">
                <p className="text-[1.5rem]  tracking-0">{award.title}</p>
              </div>

              {/* Arrow icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="invisible md:visible max-md:h-0"
                height={50}
                fill="white"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
