import React from "react";
import journals from "../fixtures/journals/data.json";
import Link from "next/link";

const Journal: React.FC = () => {
  return (
    <section className="w-full bg-[url('https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJhY2tncm91bmQlMjBkYXJrfGVufDB8fDB8fHww')] bg-no-repeat bg-cover bg-fixed h-full flex flex-col items-center py-24 text-white">
      <div className="w-full flex flex-col items-center">
        <div className="w-full px-4 md:max-w-7/8">
          <h2 className="uppercase text-2xl md:text-[2rem] font-['Clash_Display'] font-semibold">journals</h2>
        </div>
        <div className="py-8 px-[3.125%] md:px-[6.25%] flex overflow-auto no-scrollbar gap-4 md:gap-8 w-full text-white">
          {/* Journal cards */}
          {journals.map((journal, index) => {
            return (
              <div
                key={index}
                className="relative group gap-24 overflow-hidden p-8 bg-black flex w-full max-md:min-w-7/8 md:min-w-1/4 flex-col items-end"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 transition-transform rotate-y-90 group-hover:rotate-y-180 opacity-0 group-hover:opacity-100 duration-500 bg-gradient-to-b from-white/10 to-purple-900 z-0" />

                {/* Content */}
                <div className="flex items-start flex-col w-full">
                  <div className="relative font-medium flex items-center justify-center md:border md:bg-black group-hover:border-0 border-white/50 h-10 md:px-8">
                    {journal.category_name}
                  </div>
                  <h4 className="relative font-medium md:text-[1.25rem] mt-4 md:mt-8 text-white">
                    {journal.title}
                  </h4>
                </div>
                <Link
                  className="relative font-medium rounded-full p-2 border-white group-hover:bg-white duration-250 transition-all text-white group-hover:text-black flex items-center justify-center"
                  href={`/journal/${journal.slug}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    height={48}
                    fill="currentColor"
                  >
                    <path d="M14.5895 16.0032L5.98291 7.39664L7.39712 5.98242L16.0037 14.589V7.00324H18.0037V18.0032H7.00373V16.0032H14.5895Z"></path>
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journal;
