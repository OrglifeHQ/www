import React from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const Contact: React.FC = () => {
  return (
    <>
      <section
        className="flex flex-col items-center bg-cover bg-center max-md:px-4 py-24"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1637946175559-22c4fe13fc54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFyayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D)`,
        }}
      >
        <h1 className="text-center font-[Clash_Display] text-[8vw] leading-[6vw] font-bold">
          CONTACT
        </h1>
        <p className="mt-4 text-center">Reach Out, Let’s Collaborate</p>
        <div className="mt-16 flex w-full gap-8 max-md:flex-col md:max-w-7/8">
          {/* Left Side */}
          <div className="flex w-full flex-col justify-between gap-8">
            <div className="flex flex-col gap-4">
              {/* Location */}
              <div className="mb-8 flex flex-col gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={20}
                >
                  <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path>
                </svg>
                <p>
                  123 Imaginary Ave, Unit 404, Fictional Town, XY
                  <br /> Z12 3AB Fantasyland
                </p>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={20}
                >
                  <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
                </svg>
                <p>+9 876-543-2101</p>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width={20}
                >
                  <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                </svg>
                <p>hello@Montek-template.io</p>
              </div>
              <span className="block w-24 mt-2 h-0.5 bg-white"></span>
            </div>
            <div className="flex flex-wrap gap-8 font-medium">
              {["Dribbble", "Behance", "Facebook", "Instagram"].map(
                (platform) => (
                  <Link
                    key={platform}
                    href="#"
                    className="underline-offset-4 hover:underline"
                  >
                    {platform}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Right Side */}
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
