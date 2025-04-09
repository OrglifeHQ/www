import React from "react";
import ContactForm from "../Work/ContactForm";

const Contact = () => {
  return (
    <>
      <section className="max-md:flex-col flex p-8 md:p-16 gap-8 w-full">
        <div className="flex flex-col justify-center gap-8 w-full">
          <h1 className="text-[2rem] md:text-[6rem] font-medium">Contact</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur
            <br /> adipisicing elit. Voluptates nisi non minus vel. Quam
            corrupti alias itaque commodi aperiam <br />
            error aspernatur, odio animi aliquid beatae?
          </p>
          <div className="flex flex-col gap-4 mt-24 items-start">
            <span className="bg-black h-1 mb-4 w-36"></span>
            <span className="flex gap-4 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                fill="currentColor"
              >
                <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
              </svg>
              <p>(+91) 00000 00000</p>/<p>(+91) 00000 00000</p>
            </span>
            <span className="flex gap-4 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width={24}
              >
                <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
              </svg>
              marketing@orglife.co.in
            </span>
          </div>
        </div>
        <div className="w-full">
          <ContactForm />
        </div>
      </section>
      <section className="max-md:flex-col flex p-8 md:p-16 flex-col gap-8 items-center w-full">
        <h2 className="text-[1.5rem] font-medium md:text-[2rem]">Find us on a map</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0288650507173!2d72.51137927603713!3d23.059403314951407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9ca97a58f649%3A0x94c0aa5e0eda406e!2sTrinity!5e0!3m2!1sen!2sin!4v1722555187324!5m2!1sen!2sin"
          className="w-full h-dvh"
          frameborder="0"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
