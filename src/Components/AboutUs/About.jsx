import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import Faq from "./Faq";
import Footer from "../Footer/Footer";

const About = () => {
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
      <div className="bg-pink-50 flex flex-col lg:flex-row items-start justify-between px-6 lg:px-20 py-10 gap-0 lg:gap-0 lg:space-x-20 lg:h-screen">
        <div className="lg:w-1/2 flex flex-col space-y-6">
          <div className="space-y-2 lg:mt-40">
            <h1 className="text-1xl lg:text-3xl font-bold leading-snug">
              Every brand is unique. And so is your's. <br />
              So should be your brand identity and image. <br />
              We design brand strategies and stories, in style.
            </h1>
          </div>
          <p className="text-black text-base mt-0 mb-0 lg:mt-35 lg:ml-100 lg:mr-20 lg:text-lg">
            We are a team of brand engineers and consultants and we help
            organizations define their brand identities, craft compelling brand
            stories and develop strategic insights that support sustenance and
            drive growth. And you'll love how we do it for your brand as well.
          </p>
        </div>

        <div className="lg:w-2/4 w-full mt-10 lg:mt-30">
          <img
            src="/1.jpg"
            alt="Brand Example"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <Faq />
      <div className="min-h-screen bg-pink-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl  mb-8 md:mb-12 pl-0">
          <h2 className="text-2xl md:text-5xl font-bold text-gray-800">
            Our magic team
          </h2>
        </div>
        <div className="w-full max-w-8xl mx-auto space-y-8 md:space-y-12">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center bg-white p-6 md:p-8 rounded-lg shadow-md">
            <div className="w-full md:w-1/2 space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Devasish Saikia
              </h3>
              <p className="text-base md:text-lg text-pink-600">
                Founder | Chief visualizer
              </p>

              <p className="text-sm md:text-base text-text-black">
                12+ years of experience in the field of branding, market
                research and communication management.
              </p>

              <p className="text-sm md:text-base text-black">
                He's your go-to guy when you need a fresh bout of ideas for your
                brand communications. A functional engineer and an MBA, his
                style of working blends creative and experiential elements to
                bring forth research-based insights, concepts and narrative
                designs that can make heads turn towards your brand.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full min-h-[250px] h-[50vh] md:h-[500px] max-w-full md:max-w-[550px] group">
                <img
                  src="/1.jpg"
                  alt="Parul Prasad"
                  className="w-full h-full object-cover shadow-md"
                />
                <div
                  className="absolute bottom-0 left-0 w-full bg-orange-500 text-black p-4 z-10 
                   md:opacity-0 md:group-hover:opacity-100 
                   md:transition-opacity md:duration-500"
                >
                  <h2 className="font-bold text-lg">Devasish Saikia</h2>
                  <p className="text-sm mb-2">Founder</p>
                  <div className="flex gap-4 text-xl">
                    <a href="#" aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                    <a href="#" aria-label="Facebook">
                      <FaFacebook />
                    </a>
                    <a href="#" aria-label="Twitter">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center bg-white p-6 md:p-8 rounded-lg shadow-md">
            <div className="w-full md:w-1/2 space-y-3 md:space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                Parul Prasad
              </h3>
              <p className="text-base md:text-lg text-pink-600">
                Director | Business Strategy and Innovation
              </p>

              <p className="text-sm md:text-base text-black">
                12+ years of experience in the field of branding, market
                research and communication management.
              </p>

              <p className="text-sm md:text-base text-black">
                She's a powerhouse of ideas who brings in the perfect balance
                between creativity and analytical inputs needed to create a
                strong roadmap for any brand. An IT engineer and an MBA in
                Finance, her strong inclination towards rationality and
                productivity helps brands structure strong brand strategies and
                content plans.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full min-h-[250px] h-[50vh] md:h-[500px] max-w-full md:max-w-[550px] group">
                <img
                  src="/1.jpg"
                  alt="Parul Prasad"
                  className="w-full h-full object-cover shadow-md"
                />
                <div
                  className="absolute bottom-0 left-0 w-full bg-orange-500 text-black p-4 z-10 
                   md:opacity-0 md:group-hover:opacity-100 
                   md:transition-opacity md:duration-500"
                >
                  <h2 className="font-bold text-lg">PARUL PRASAD</h2>
                  <p className="text-sm mb-2">Director</p>
                  <div className="flex gap-4 text-xl">
                    <a href="#" aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                    <a href="#" aria-label="Facebook">
                      <FaFacebook />
                    </a>
                    <a href="#" aria-label="Twitter">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
