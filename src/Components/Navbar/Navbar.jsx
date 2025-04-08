import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaBehance,
  FaPinterestP,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      
      <nav className="sticky top-0 z-50 bg-[#E6D7D7] px-6 lg:px-24 py-6 flex justify-between items-center w-full border-b border-gray-300 shadow-md">


        
        <div className="flex items-center space-x-2">
          <a href="/" className="cursor-pointer">
            <img
              src="/logoNavBarMain.png"
              alt="RGLIFE Logo"
              className="h-8 w-auto object-contain"
            />
          </a>
        </div>

        {/* Navigation Links - Desktop */}
        <ul className="hidden lg:flex flex-row space-x-12 text-sm font-medium text-gray-900 uppercase tracking-wide list-none">
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/work">Work</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-gray-500 cursor-pointer">
            <Link to="/plans">Plans</Link>
          </li>
        </ul>

        {/* Social Icons - Desktop */}
        <div className="hidden lg:flex items-center space-x-5 text-gray-900 text-lg">
          <FaLinkedinIn className="hover:text-orange-500 cursor-pointer" />
          <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
          <FaInstagram className="hover:text-orange-500 cursor-pointer" />
          <FaTwitter className="hover:text-orange-500 cursor-pointer" />
          <FaBehance className="hover:text-orange-500 cursor-pointer" />
          <FaPinterestP className="hover:text-orange-500 cursor-pointer" />
        </div>

        {/* Hamburger Icon - Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-black text-2xl"
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Sidebar for Mobile (Right side) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#E6D7D7] z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-300">
          <span className="text-black font-extrabold text-2xl tracking-wide">
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-black text-xl"
          >
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col px-6 py-4 space-y-6 text-sm font-medium text-gray-900 uppercase tracking-wide list-none">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/work" onClick={() => setIsOpen(false)}>
              Work
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/plans" onClick={() => setIsOpen(false)}>
              Plans
            </Link>
          </li>
        </ul>

        {/* Sidebar Social Icons - Fixed at Bottom */}
        <div className="absolute bottom-0 left-0 w-full px-6 py-4 border-t border-gray-300 flex justify-center space-x-4 text-xl text-gray-900">
          <FaLinkedinIn className="hover:text-orange-500 cursor-pointer" />
          <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
          <FaInstagram className="hover:text-orange-500 cursor-pointer" />
          <FaTwitter className="hover:text-orange-500 cursor-pointer" />
          <FaBehance className="hover:text-orange-500 cursor-pointer" />
          <FaPinterestP className="hover:text-orange-500 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
