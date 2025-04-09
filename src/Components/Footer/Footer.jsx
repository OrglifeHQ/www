import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-4 xl:pb-10">
      <div className="max-w-[1600px] mx-auto px-6 xl:px-0 flex flex-col xl:flex-row items-start gap-y-10 gap-x-20 h-auto xl:h-[400px]">
        <div className="flex items-center gap-2">
          <div
            className="bg-white flex items-center justify-center 
      w-28 h-52 
      sm:w-32 sm:h-80 
      md:w-36 md:h-72 
      xl:w-44 xl:h-80
      overflow-hidden"
          >
            <img
              src="/logoNavBarMain.png"
              alt="RGLIFE Logo"
              className="h-full w-full object-contain transform rotate-[-90deg] m-0 p-0"
            />
          </div>

          <p className="text-white rotate-[-90deg] text-2xl xl:text-3xl mb-0 xl:mb-20">
            +(91) 90998 97690
          </p>
        </div>

        <div className="flex flex-row gap-25 xl:gap-40 flex-wrap">
          <div className="text-base">
            <h3 className="font-semibold text-sm xl:text-base">Quick Links</h3>
            <ul className="mt-3 space-y-6 text-white">
              <li className="hover:text-white cursor-pointer">HOME</li>
              <li className="hover:text-white cursor-pointer">ABOUT</li>
              <li className="hover:text-white cursor-pointer">WORK</li>
              <li className="hover:text-white cursor-pointer">BLOG</li>
              <li className="hover:text-white cursor-pointer">CONTACT</li>
              <li className="hover:text-white cursor-pointer">PLANS</li>
            </ul>
          </div>

          <div className="text-base">
            <h3 className="font-semibold text-sm xl:text-base">Follow</h3>
            <ul className="mt-3 space-y-6 text-white">
              <li className="hover:text-white cursor-pointer">YOUTUBE</li>
              <li className="hover:text-white cursor-pointer">INSTAGRAM</li>
              <li className="hover:text-white cursor-pointer">LINKEDIN</li>
              <li className="hover:text-white cursor-pointer">BEHANCE</li>
              <li className="hover:text-white cursor-pointer">PINTEREST</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start xl:ml-28 w-full max-w-md">
          <h3 className="font-semibold text-xl xl:text-2xl">
            Sign up to our newsletter
          </h3>
          <div className="relative w-full border-b border-white mt-6 xl:mt-16">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black text-white outline-none w-full py-2"
            />
            <span className="absolute right-0 top-1 text-2xl xl:text-3xl">
              ↗
            </span>
          </div>
          <p className="text-white text-xs xl:text-sm mt-2">
            This site is protected by reCAPTCHA and the{" "}
            <a href="#" className="underline">
              Google Privacy Policy
            </a>
            and <br className="block xl:hidden" />
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            apply.
          </p>
        </div>
      </div>
      <div className="border-t border-white mt-6 pt-4 px-6 xl:px-40 flex flex-row justify-center md:justify-between items-center text-white text-xs xl:text-sm gap-0">
        <p>© Centrix 2021. All Rights Reserved</p>
        <a href="#" className="underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
