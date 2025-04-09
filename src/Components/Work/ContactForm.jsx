import React from "react";

const ContactForm = () => {
  return (
    <div className="sm:px-6 sm:py-12 lg:px-80 lg:py-20">

      <div className="w-full max-w-8xl bg-orange-400 p-8 sm:p-16 sm:pt-20 h-[67vh] sm:h-auto sm:min-h-[800px]">
        <h2 className="text-3xl sm:text-5xl font-bold mb-8 sm:mb-16 text-gray-900">
          Get in Touch
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">
                NAME
              </label>
              <input
                type="text"
                className="w-full px-0 py-2 sm:py-3 border-b-2 border-white rounded-none focus:outline-none focus:border-black bg-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">
                EMAIL
              </label>
              <input
                type="email"
                className="w-full px-0 py-2 sm:py-3 border-b-2 border-white rounded-none focus:outline-none focus:border-black bg-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">
              MESSAGE*
            </label>
            <textarea
              rows="3"
              className="w-full px-0 py-2 sm:py-12 border-b-2 border-white rounded-none focus:outline-none focus:border-black bg-transparent"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-gray-700 mb-2">
              ATTACHABLE
            </label>
            <div className="w-full px-0 py-2 sm:py-4 border-b-2 border-white rounded-none relative">
              <input
                type="file"
                className="w-full opacity-0 absolute h-full cursor-pointer"
                id="fileInput"
              />
              <label
                htmlFor="fileInput"
                className="text-sm text-gray-500 cursor-pointer block"
              >
                Choose file
              </label>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-0 mt-8 sm:mt-12">
            <button
              type="submit"
              className="w-full cursor-pointer sm:w-[200px] bg-black text-white py-3 sm:py-4 px-6 rounded-none hover:bg-orange-400 hover:text-black uppercase text-sm sm:text-base tracking-wider transition-colors duration-200"
            >
              SUBMIT
              <span className="hidden sm:inline-block text-3xl transform -rotate-10 ml-2">
                ↗
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
