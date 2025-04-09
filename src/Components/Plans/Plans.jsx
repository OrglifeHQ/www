import { useState } from "react";
import Footer from "../Footer/Footer"

const Plans = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
        question: "Brand Strategy And Management",
        description: "We're here to assist your a design and devlop a comprehensive road map for your brand.",
        content: (
          <div className="mt-8 space-y-8">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
              
              <div className="relative w-full lg:w-1/3 group h-[510px] overflow-hidden">
                <img
                  src="/1.jpg"
                  alt="Brand Strategy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 h-0 bg-orange-400 transition-all duration-500 group-hover:h-full">
                  <div className="absolute bottom-0 left-0 p-6 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <h1 className="text-2xl text-black mb-10"> Start-ups & MSME </h1>
                    <ul className="space-y-3 text-left text-black">
                      <li className="flex items-start gap-2">
                        <span className="text-xl">+</span>
                        <span>Brand strategy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-xl">+</span>
                        <span>Brand & product portfolio management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-xl">+</span>
                        <span>Customer insights & experience survey</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-xl">+</span>
                        <span>Brand identity strategy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-xl">+</span>
                        <span>SMA + Digital marketing content strategy</span>
                      </li>
                    </ul>
                    <button className="mt-6 bg-black text-white px-6 py-3  hover:bg-orange-400 hover:text-black transition-colors">
                      CONTACT FOR QUOTE
                    </button>
                  </div>
                </div>
              </div>
      
              {/* Second image card */}
              <div className="relative w-full lg:w-1/3 group h-[510px] overflow-hidden">
                <img
                  src="/1.jpg"
                  alt="Brand Strategy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 h-0 bg-orange-400 transition-all duration-500 group-hover:h-full">
                  <div className="absolute bottom-0 left-0 p-6 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <h1 className="text-2xl text-black mb-10"> Start-ups & MSME </h1>
                    <ul className="space-y-3 text-left text-black">
                      <li className="flex items-start gap-2">
                        <span className="text-xl">+</span>
                        <span>Brand strategy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-xl">+</span>
                        <span>Brand & product portfolio management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-xl">+</span>
                        <span>Customer insights & experience survey</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-xl">+</span>
                        <span>Brand identity strategy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-xl">+</span>
                        <span>SMA + Digital marketing content strategy</span>
                      </li>
                    </ul>
                    <button className="mt-6 bg-black text-white px-6 py-3  hover:bg-orange-400 hover:text-black transition-colors">
                      CONTACT FOR QUOTE
                    </button>
                  </div>
                </div>
              </div>

              {/* Third image card */}
              <div className="relative w-full lg:w-1/3 group h-[510px] overflow-hidden">
                <img
                  src="/1.jpg"
                  alt="Brand Strategy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 h-0 bg-orange-400 transition-all duration-500 group-hover:h-full">
                  <div className="absolute bottom-0 left-0 p-6 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <h1 className="text-2xl text-black mb-10"> Start-ups & MSME </h1>
                    <ul className="space-y-3 text-left text-black">
                      <li className="flex items-start gap-2">
                        <span className="text-xl">+</span>
                        <span>Brand strategy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-xl">+</span>
                        <span>Brand & product portfolio management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-xl">+</span>
                        <span>Customer insights & experience survey</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-xl">+</span>
                        <span>Brand identity strategy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-xl">+</span>
                        <span>SMA + Digital marketing content strategy</span>
                      </li>
                    </ul>
                    <button className="mt-6 bg-black text-white px-6 py-3  hover:bg-orange-400 hover:text-black transition-colors">
                      CONTACT FOR QUOTE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    // {
    //   question: "Brand Identity Design",
    //   description: "Thinking out-of-the-box is always attractive.",
    //   content: (
    //     <div className="mt-8 space-y-8">
    //       <div className="flex flex-col lg:flex-row gap-8">
    //         <img
    //           src="/1.jpg"
    //           alt="Brand Identity"
    //           className="w-full lg:w-2/4 object-cover h-64 lg:h-110"
    //         />
    //         <img
    //           src="/1.jpg"
    //           alt="Brand Elements"
    //           className="w-11/12 lg:w-1/4 object-cover h-64"
    //         />
    //       </div>

    //       <div className="space-y-4">
    //         <p className="text-white">
    //           We specialize in creating distinctive brand identities that not
    //           only capture attention but also shape an emotional connect with
    //           your audience for a very long term. Let's explore the world of
    //           engagement through your brand elements.
    //         </p>

    //         <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
    //           <li className="flex items-start gap-2">
    //             <span className="text-xl text-orange-500">+</span>
    //             <span>Brand Nomenclature and Logo</span>
    //           </li>
    //           <li className="flex items-start gap-2">
    //             <span className="text-xl text-orange-500">+</span>
    //             <span>Brand Story and Narratives</span>
    //           </li>
    //           <li className="flex items-start gap-2">
    //             <span className="text-xl text-orange-500">+</span>
    //             <span>Brand Visual Language, Tone and Voice</span>
    //           </li>
    //           <li className="flex items-start gap-2">
    //             <span className="text-xl text-orange-500">+</span>
    //             <span>Brand Packaging and Stationery</span>
    //           </li>
    //           <li className="flex items-start gap-2">
    //             <span className="text-xl text-orange-500">+</span>
    //             <span>Presentations, Proposals and Reports</span>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   ),
    // },
    // {
    //   question: "Content Management and Marketing",
    //   description:
    //     "From strategic content planning to meticulous communication designs.",
    //   content: (
    //     <div className="mt-8 space-y-8">
    //       <div className="flex flex-col lg:flex-row gap-8">
    //         <img
    //           src="/1.jpg"
    //           alt="Brand Identity"
    //           className="w-full lg:w-2/4 object-cover h-64 lg:h-110"
    //         />
    //         <img
    //           src="/1.jpg"
    //           alt="Brand Elements"
    //           className="w-11/12 lg:w-1/4 object-cover h-64"
    //         />
    //       </div>

    //       <div className="space-y-4">
    //         <p className="text-white">
    //           We shape your brand's content into a powerful asset which
    //           translates your vision and messages into a coherent, captivating
    //           narrative that combines strategic insight with executional
    //           excellence to drive engagement, foster loyalty and amplify your
    //           brand's voice.
    //         </p>

    //         <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
    //           <li className="flex items-start gap-2">
    //             <span className="text-xl text-orange-500">+</span>
    //             <span>SEO-Optimized Blog Posts and Articles</span>
    //           </li>
    //           <li className="flex items-start gap-2">
    //             <span className="text-xl text-orange-500">+</span>
    //             <span>Brand Video Scripts and Narratives</span>
    //           </li>
    //           <li className="flex items-start gap-2">
    //             <span className="text-xl text-orange-500">+</span>
    //             <span>Cinematic Production and Animated content</span>
    //           </li>
    //           <li className="flex items-start gap-2">
    //             <span className="text-xl text-orange-500">+</span>
    //             <span>Newsletters and Ebooks</span>
    //           </li>
    //           <li className="flex items-start gap-2">
    //             <span className="text-xl text-orange-500">+</span>
    //             <span>Brand Films and Corporate Videos</span>
    //           </li>
    //           <li className="flex items-start gap-2">
    //             <span className="text-xl text-orange-500">+</span>
    //             <span>Website Content</span>
    //           </li>
    //           <li className="flex items-start gap-2">
    //             <span className="text-xl text-orange-500">+</span>
    //             <span>Podcast and Interview concepts</span>
    //           </li>
    //           <li className="flex items-start gap-2">
    //             <span className="text-xl text-orange-500">+</span>
    //             <span>Social Media Content</span>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   ),
    // },
    // {
    //   question: "Digital Marketing and Online Strategy",
    //   description: "Comprehensive digital solutions for modern brands.",
    //   content: (
    //     <div className="mt-8 space-y-8">
    //       <div className="flex flex-col lg:flex-row gap-8">
    //         <img
    //           src="/1.jpg"
    //           alt="Brand Identity"
    //           className="w-full lg:w-2/4 object-cover h-64 lg:h-110"
    //         />
    //         <img
    //           src="/1.jpg"
    //           alt="Brand Elements"
    //           className="w-11/12 lg:w-1/4 object-cover h-64"
    //         />
    //       </div>

    //       <div className="space-y-4">
    //         <p className="text-white">
    //           From strategic insights to search engine optimization (SEO) and
    //           from pay-per-click (PPC) advertising to social media management
    //           and email marketing, we create comprehensive campaigns that work
    //           synergistically to enhance your digital footprint.
    //         </p>

    //         <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
    //           <li className="flex items-start gap-2">
    //             <span className="text-xl text-orange-500">+</span>
    //             <span>Project Management and Consulting</span>
    //           </li>
    //           <li className="flex items-start gap-2">
    //             <span className="text-xl text-orange-500">+</span>
    //             <span>Search Engine Optimization [SEO]</span>
    //           </li>
    //           <li className="flex items-start gap-2">
    //             <span className="text-xl text-orange-500">+</span>
    //             <span>Social Media Strategy and Management</span>
    //           </li>
    //           <li className="flex items-start gap-2">
    //             <span className="text-xl text-orange-500">+</span>
    //             <span>Website and Mobile Application Development</span>
    //           </li>
    //           <li className="flex items-start gap-2">
    //             <span className="text-xl text-orange-500">+</span>
    //             <span>E-commerce and Affiliate Marketing</span>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  return (
    <div className="bg-black text-white min-h-[400px]">
      <div className="flex flex-col px-4 lg:px-8 pt-12 pb-0 lg:pt-24">
        <h1 className="text-3xl font-bold text-center mb-8 lg:text-5xl lg:text-left lg:mb-10">
        Pricing Plans
        </h1>

        <div className="space-y-6 lg:space-y-8 mb-12 lg:mb-20">
          
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-white">
              <div
                className="flex justify-between items-start cursor-pointer group py-6 lg:py-8"
                onClick={() => toggleFAQ(index)}
              >
                <div className="w-4/5">
                  <h3 className="text-xl font-medium text-white mb-1 lg:text-3xl lg:mb-2">
                    {item.question}
                  </h3>
                  <p className="text-sm text-gray-400 lg:text-xl">
                    {item.description}
                  </p>
                </div>
                <span className="text-orange-500 text-3xl ml-4 transition-transform duration-300 group-hover:scale-110 lg:text-5xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <div className="pb-6 lg:pb-8">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Plans;
