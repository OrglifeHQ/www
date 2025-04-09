import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full bg-orange-400 p-8 md:p-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-16 text-gray-900">
        Get in Touch
      </h2>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-black mb-2">
              NAME
            </label>
            <input
              type="text"
              className="w-full px-0 py-2 md:py-3 border-b-2 border-white rounded-none focus:outline-none focus:border-black bg-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-black mb-2">
              EMAIL
            </label>
            <input
              type="email"
              className="w-full px-0 py-2 md:py-3 border-b-2 border-white rounded-none focus:outline-none focus:border-black bg-transparent"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-black mb-2">
            MESSAGE*
          </label>
          <textarea
            rows="3"
            className="w-full px-0 py-2 md:py-12 border-b-2 border-white rounded-none focus:outline-none focus:border-black bg-transparent"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-bold uppercase tracking-wider text-black mb-2">
            ATTACHABLE
          </label>
          <div className="w-full px-0 py-2 md:py-4 border-b-2 border-white rounded-none relative">
            <input
              type="file"
              className="w-full opacity-0 absolute h-full cursor-pointer"
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              className="text-sm text-black/50 cursor-pointer block"
            >
              Choose file
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-0 mt-8 md:mt-10">
          <button
            type="submit"
            className="w-full cursor-pointer md:w-[200px] bg-black text-white h-12 px-6 rounded-none hover:bg-orange-400 hover:text-black uppercase text-sm md:text-base tracking-wider transition-colors duration-200"
          >
            SUBMIT
            <span className="hidden md:inline-block text-3xl transform -rotate-10 ml-2">
              ↗
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
