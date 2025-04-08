import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CaseStudies = () => {
  const sliderRef = useRef(null);

  const studies = [
    {
      title: "INDIAN ARMY",
      dimensions: "334 x 255",
      poweredBy: "Powered by HTML.COM",
      image: "/army.png",
      height: "h-[350px] sm:h-[450px]",
      width: "w-[300px] sm:w-[360px]",
    },
    {
      title: "ESPANY LIFE SCIENCE",
      dimensions: "404 x 491",
      poweredBy: "Powered by HTML.COM",
      image: "/army.png",
      containerHeight: "h-[250px] sm:h-[350px]", // Reduced container height
      containerWidth: "w-[250px]", // Reduced container width
      imageHeight: "h-[200px] sm:h-[300px]", // Specific image height
      imageWidth: "w-[100px]" // Image will fill container width
    },
    {
      title: "YOUTH PARLIAMENT OF INDIA",
      dimensions: "404 x 491",
      poweredBy: "Powered by HTML.COM",
      image: "/army.png",
      height: "h-[320px] sm:h-[420px]",
      width: "w-[290px] sm:w-[350px]",
    },
    {
      title: "ANOTHER PROJECT",
      dimensions: "404 x 491",
      poweredBy: "Powered by HTML.COM",
      image: "/army.png",
      height: "h-[310px] sm:h-[410px]",
      width: "w-[295px] sm:w-[345px]",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true, // This allows variable width slides
    variableWidth: true, // This enables variable width
    responsive: [
      {
        breakpoint: 1024,
        settings: { 
          slidesToShow: 2,
          centerMode: true,
          variableWidth: true
        },
      },
      {
        breakpoint: 768,
        settings: { 
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true
        },
      },
    ],
  };

  return (
    <div className="bg-pink-50 py-0 pb-8 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8">CASE STUDIES</h2>

      {/* Arrows positioned above the cards */}
      <div className="flex justify-between items-center px-8 mb-6">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="p-2 sm:p-3 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <FaArrowLeft className="text-gray-700 text-base sm:text-lg" />
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="p-2 sm:p-3 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
        >
          <FaArrowRight className="text-gray-700 text-base sm:text-lg" />
        </button>
      </div>

      {/* Cards with varying height/width and content */}
      <div className="px-4">
        <Slider ref={sliderRef} {...settings}>
          {studies.map((study, index) => (
            <div key={index} className={`${study.width} px-3`}>
              <div className="border border-gray-200 bg-white h-full shadow-sm overflow-hidden flex flex-col">
                <div className={`${study.height} w-full overflow-hidden`}>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full objec object-cover object-center"
                  />
                </div>
                <div className="p-4 text-center flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 uppercase">
                      {study.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CaseStudies;