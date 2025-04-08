import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "01. Connect",
      answer:
        "Alienum phaedrum torquatos nec eu, deir periculis ex, nihil expetendis in mei. Mei an pericula euripidis hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus definiebas.",
    },
    {
      question: "02. Preview",
      answer:
        "Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus definiebas.", // Empty as shown in image
    },
    {
      question: "03. Concept",
      answer:
        "Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus definiebas.", // Empty as shown in image
    },
    {
      question: "04. Plan",
      answer:
        "Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus definiebas.", // Empty as shown in image
    },
    {
      question: "05. Strategy",
      answer:
        "Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus definiebas.", // Empty as shown in image
    },
    {
      question: "06. Execution",
      answer:
        "Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus definiebas.", // Empty as shown in image
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-pink-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 pb-16 lg:py-16 font-sans">
        {/* Main Heading */}
        <div className="text-center mb-6 lg:mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black mb-3">
            HOW WE WORK
          </h1>
          <div className="w-20 h-0.5 bg-black mx-auto"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2 lg:space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-black pb-2 lg:pb-4">
              {/* Question */}
              <button
                className="flex justify-between items-center cursor-pointer w-full text-left py-4 lg:py-8 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold text-gray-800">
                  {faq.question}
                </h2>
                <span className="text-black">
                  {activeIndex === index ? (
                    <FiChevronUp className="w-5 h-5 lg:w-6 lg:h-6" />
                  ) : (
                    <FiChevronDown className="w-5 h-5 lg:w-6 lg:h-6" />
                  )}
                </span>
              </button>

              {/* Answer - Animated */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer && (
                  <p className="text-sm sm:text-base lg:text-2xl text-black pb-2 lg:pb-4 pl-2 pr-2 lg:pr-4">
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;


const faqs = [
    {
      question: "01. Connect",
      answer:
        "Alienum phaedrum torquatos nec eu, deir periculis ex, nihil expetendis in mei. Mei an pericula euripidis hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus definiebas.",
    },
    {
      question: "02. Preview",
      answer:
        "Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus definiebas.", // Empty as shown in image
    },
    {
      question: "03. Concept",
      answer:
        "Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus definiebas.", // Empty as shown in image
    },
    {
      question: "04. Plan",
      answer:
        "Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus definiebas.", // Empty as shown in image
    },
    {
      question: "05. Strategy",
      answer:
        "Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus definiebas.", // Empty as shown in image
    },
    {
      question: "06. Execution",
      answer:
        "Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expetendis in mei. Mei an pericula euripidis hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea et. Mea facilisis urbanitas moderatius id. Vis ei rationibus definiebas.", // Empty as shown in image
    },
  ];