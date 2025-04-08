import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FiArrowRight } from "react-icons/fi";

const RotatingText = () => {
  const rotationRef = useRef(null);

  useEffect(() => {
    gsap.to(rotationRef.current, {
      rotate: 360,
      duration: 12,
      repeat: -1,
      ease: "linear",
      transformOrigin: "50% 50%",
    });
  }, []);

  return (
    <div className="w-full bg-black text-white flex flex-col items-start py-16 px-6 md:px-12">
      
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center">
        
        <svg
          ref={rotationRef}
          className="absolute w-full h-full z-20 pointer-events-none"
          viewBox="0 0 200 200"
        >
          <defs>
            <path
              id="circlePath"
              d="
                M 100,100
                m -75,0
                a 75,75 0 1,1 150,0
                a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text
            className="fill-white text-[10px] sm:text-[11px] md:text-[12px] font-semibold tracking-[0.3em]"
            dy="5"
          >
            <textPath href="#circlePath">
              STRATEGY • CONTENT • DIGITAL • IDENTITY • STRATEGY • CONTENT •
            </textPath>
          </text>
        </svg>

        <img
          src="/RoundedLogo.png"
          alt="Flower"
          className="relative z-30 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain"
        />
      </div>

      <div className="mt-10 md:mt-16 w-full text-left">
  <p className="text-[24px] sm:text-lg md:text-3xl font-light leading-snug">
    Our intelligent digital strategy and a pragmatic and thoughtful
    approach to solving business calls deliver a successful framework for
    both you and your audience.
  </p>
</div>


      <div className="mt-8">
        <button className="flex items-center space-x-2 group">
          <span className="uppercase text-base sm:text-lg font-medium tracking-wide">
            Explore With Us
          </span>
          <FiArrowRight
            size={22}
            className="text-white transition-transform group-hover:translate-x-1 rotate-[-45deg]"
          />
        </button>
      </div>
    </div>
  );
};

export default RotatingText;
