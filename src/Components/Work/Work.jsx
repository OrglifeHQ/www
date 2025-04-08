import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CaseStudies from "./CaseStudies";
import Faq from "./Faq";

const Work = () => {
  const logos = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
    "/10.png",
    "/11.png",
    "/12.png",
    "/13.png",
    "/14.png",
    "/15.png",
    "/16.png",
    "/17.png",
    "/18.png",
    "/19.png",
    "/20.png",
    "/21.png",
    "/22.png",
    "/23.png",
    "/24.png",
    "/25.png",
    "/26.png",
    "/27.png",
    "/29.png",
    "/30.png",
    "/31.png",
    "/32.png",
    "/33.png",
    "/34.png",
    "/35.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="w-full h-[35vh] md:h-screen bg-center bg-no-repeat bg-cover relative"
        style={{
          backgroundImage: "url('/1.jpg')",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full flex items-center px-6 sm:px-16">
          <h1 className="text-white text-2xl sm:text-4xl md:text-8xl font-bold leading-tight max-w-[80%]">
            WE ARE BRAND <br />
            <span className="text-yellow-200">STORYTELLERS</span>
          </h1>
        </div>
      </div>
      <div className="py-8 bg-pink-50">
        <div className="mx-auto max-w-full">
          <div className="mx-0">
            <Slider {...settings}>
              {logos.map((logo, index) => (
                <div key={index} className="!px-0">
                  <img
                    src={logo}
                    alt={`Partner Logo ${index}`}
                    className="mx-auto"
                    style={{
                      height: "clamp(120px, 20vw, 300px)",
                      width: "clamp(180px, 30vw, 450px)",
                      objectFit: "contain",
                      margin: "0 4px",
                      opacity: 0.85,
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <CaseStudies />
      <Faq />
    </>
  );
};

export default Work;
