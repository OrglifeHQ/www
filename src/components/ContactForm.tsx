"use client";

import React from "react";

const ContactForm: React.FC = () => {
  return (
    <form className="flex w-full flex-col items-start gap-4">
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Name"
          className="h-12 border border-white/25 bg-transparent px-4 text-white placeholder:text-white focus:border-white focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="h-12 border border-white/25 bg-transparent px-4 text-white placeholder:text-white focus:border-white focus:outline-none"
        />
      </div>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Phone"
          className="h-12 border border-white/25 bg-transparent px-4 text-white placeholder:text-white focus:border-white focus:outline-none"
        />
        <input
          type="text"
          placeholder="Subject"
          className="h-12 border border-white/25 bg-transparent px-4 text-white placeholder:text-white focus:border-white focus:outline-none"
        />
      </div>
      <textarea
        placeholder="Message"
        rows={4}
        className="w-full resize-none border border-white/25 bg-transparent p-4 text-white placeholder:text-white focus:border-white focus:outline-none"
      ></textarea>
      <button
        type="submit"
        className="h-12 cursor-pointer bg-gradient-to-b from-white/10 to-purple-900 px-8 font-semibold text-white transition"
      >
        SEND
      </button>
    </form>
  );
};

export default ContactForm;
