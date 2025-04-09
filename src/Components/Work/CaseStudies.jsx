import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const CaseStudies = () => {
  const sliderRef = useRef(null);

  const studies = [
    {
      id: 1,
      title: "INDIAN ARMY",
      image: "/army.png",
      containerClass: "w-[280px] sm:w-[350px] md:w-[420px] px-2 sm:px-3",
      imageContainerClass: "h-[350px] sm:h-[450px] md:h-[550px]",
      link: "/case-studies/indian-army"
    },
    {
      id: 2,
      title: "ESPANY LIFE SCIENCE",
      image: "https://img.freepik.com/free-photo/demo-digital-device_23-2149243954.jpg",
      containerClass: "w-[220px] sm:w-[250px] md:w-[320px] px-2 sm:px-3",
      imageContainerClass: "h-[250px] sm:h-[300px] md:h-[400px]",
      link: "/case-studies/espany-life-science"
    },
    {
      id: 3,
      title: "YOUTH PARLIAMENT OF INDIA",
      image: "/army.png",
      containerClass: "w-[250px] sm:w-[300px] md:w-[380px] px-2 sm:px-3",
      imageContainerClass: "h-[300px] sm:h-[400px] md:h-[500px]",
      link: "/case-studies/youth-parliament"
    },
    {
      id: 4,
      title: "ANOTHER PROJECT",
      image: "/army.png",
      containerClass: "w-[220px] sm:w-[250px] md:w-[320px] px-2 sm:px-3",
      imageContainerClass: "h-[250px] sm:h-[300px] md:h-[400px]",
      link: "/case-studies/another-project"
    },

    {
      id: 5,
      title: "INDIAN ARMY",
      image: "/army.png",
      containerClass: "w-[280px] sm:w-[350px] md:w-[420px] px-2 sm:px-3",
      imageContainerClass: "h-[350px] sm:h-[450px] md:h-[550px]",
      link: "/case-studies/indian-army"
    },
    {
      id: 6,
      title: "ESPANY LIFE SCIENCE",
      image: "/army.png",
      containerClass: "w-[220px] sm:w-[250px] md:w-[320px] px-2 sm:px-3",
      imageContainerClass: "h-[250px] sm:h-[300px] md:h-[400px]",
      link: "/case-studies/espany-life-science"
    },
    {
      id: 7,
      title: "YOUTH PARLIAMENT OF INDIA",
      image: "/army.png",
      containerClass: "w-[250px] sm:w-[300px] md:w-[380px] px-2 sm:px-3",
      imageContainerClass: "h-[300px] sm:h-[400px] md:h-[500px]",
      link: "/case-studies/youth-parliament"
    },
    {
      id: 8,
      title: "ANOTHER PROJECT",
      image: "/army.png",
      containerClass: "w-[220px] sm:w-[250px] md:w-[320px] px-2 sm:px-3",
      imageContainerClass: "h-[250px] sm:h-[300px] md:h-[400px]",
      link: "/case-studies/another-project"
    },

    {
      id: 9,
      title: "INDIAN ARMY",
      image: "/army.png",
      containerClass: "w-[280px] sm:w-[350px] md:w-[420px] px-2 sm:px-3",
      imageContainerClass: "h-[350px] sm:h-[450px] md:h-[550px]",
      link: "/case-studies/indian-army"
    },
    {
      id: 10,
      title: "ESPANY LIFE SCIENCE",
      image: "/army.png",
      containerClass: "w-[220px] sm:w-[250px] md:w-[320px] px-2 sm:px-3",
      imageContainerClass: "h-[250px] sm:h-[300px] md:h-[400px]",
      link: "/case-studies/espany-life-science"
    },
    {
      id: 11,
      title: "YOUTH PARLIAMENT OF INDIA",
      image: "/army.png",
      containerClass: "w-[250px] sm:w-[300px] md:w-[380px] px-2 sm:px-3",
      imageContainerClass: "h-[300px] sm:h-[400px] md:h-[500px]",
      link: "/case-studies/youth-parliament"
    },
    {
      id: 12,
      title: "ANOTHER PROJECT",
      image: "/army.png",
      containerClass: "w-[220px] sm:w-[250px] md:w-[320px] px-2 sm:px-3",
      imageContainerClass: "h-[250px] sm:h-[300px] md:h-[400px]",
      link: "/case-studies/another-project"
    },

    {
      id: 13,
      title: "INDIAN ARMY",
      image: "/army.png",
      containerClass: "w-[280px] sm:w-[350px] md:w-[420px] px-2 sm:px-3",
      imageContainerClass: "h-[350px] sm:h-[450px] md:h-[550px]",
      link: "/case-studies/indian-army"
    },
    {
      id: 14,
      title: "ESPANY LIFE SCIENCE",
      image: "/army.png",
      containerClass: "w-[220px] sm:w-[250px] md:w-[320px] px-2 sm:px-3",
      imageContainerClass: "h-[250px] sm:h-[300px] md:h-[400px]",
      link: "/case-studies/espany-life-science"
    },
    {
      id: 15,
      title: "YOUTH PARLIAMENT OF INDIA",
      image: "/army.png",
      containerClass: "w-[250px] sm:w-[300px] md:w-[380px] px-2 sm:px-3",
      imageContainerClass: "h-[300px] sm:h-[400px] md:h-[500px]",
      link: "/case-studies/youth-parliament"
    },
    {
      id: 16,
      title: "ANOTHER PROJECT",
      image: "/army.png",
      containerClass: "w-[220px] sm:w-[250px] md:w-[320px] px-2 sm:px-3",
      imageContainerClass: "h-[250px] sm:h-[300px] md:h-[400px]",
      link: "/case-studies/another-project"
    },

    {
      id: 17,
      title: "INDIAN ARMY",
      image: "/army.png",
      containerClass: "w-[280px] sm:w-[350px] md:w-[420px] px-2 sm:px-3",
      imageContainerClass: "h-[350px] sm:h-[450px] md:h-[550px]",
      link: "/case-studies/indian-army"
    },
    {
      id: 18,
      title: "ESPANY LIFE SCIENCE",
      image: "/army.png",
      containerClass: "w-[220px] sm:w-[250px] md:w-[320px] px-2 sm:px-3",
      imageContainerClass: "h-[250px] sm:h-[300px] md:h-[400px]",
      link: "/case-studies/espany-life-science"
    },
    {
      id: 19,
      title: "YOUTH PARLIAMENT OF INDIA",
      image: "/army.png",
      containerClass: "w-[250px] sm:w-[300px] md:w-[380px] px-2 sm:px-3",
      imageContainerClass: "h-[300px] sm:h-[400px] md:h-[500px]",
      link: "/case-studies/youth-parliament"
    },
    {
      id: 20,
      title: "ANOTHER PROJECT",
      image: "/army.png",
      containerClass: "w-[220px] sm:w-[250px] md:w-[320px] px-2 sm:px-3",
      imageContainerClass: "h-[250px] sm:h-[300px] md:h-[400px]",
      link: "/case-studies/another-project"
    },

  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          variableWidth: false,
          centerPadding: "20px",
        },
      },
    ],
  };

  const handleCardClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="bg-pink-50 pt-0 pb-12 overflow-hidden"> {/* Changed py-8 to pt-4 */}
      {/* Header and Arrows - new layout */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 mb-6">
        {/* Mobile layout - heading between arrows */}
        <div className="sm:hidden flex items-center justify-between w-full mb-4">
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
            aria-label="Previous"
          >
            <FaArrowLeft className="text-gray-700" />
          </button>
          
          <h2 className="text-2xl font-bold mx-4">CASE STUDIES</h2>
          
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
            aria-label="Next"
          >
            <FaArrowRight className="text-gray-700" />
          </button>
        </div>

        {/* Desktop layout - heading left, arrows right */}
        <div className="hidden sm:flex w-full justify-between items-center">
          <h2 className="text-3xl font-bold">CASE STUDIES</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="p-2 sm:p-3 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
              aria-label="Previous"
            >
              <FaArrowLeft className="text-gray-700" />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="p-2 sm:p-3 bg-white rounded-full shadow-md hover:bg-gray-200 transition"
              aria-label="Next"
            >
              <FaArrowRight className="text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="px-2 sm:px-4">
        <Slider ref={sliderRef} {...settings}>
          {studies.map((study) => (
            <div 
              key={study.id} 
              className={`${study.containerClass} focus:outline-none`}
            >
              <div 
                className="border border-gray-200 bg-white h-full shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer group"
                onClick={() => handleCardClick(study.link)}
              >
                <div className={`${study.imageContainerClass} w-full overflow-hidden`}>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 text-left">
                  <h3 className="text-lg sm:text-xl font-semibold uppercase group-hover:text-orange-600 transition-colors">
                    {study.title}
                  </h3>
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