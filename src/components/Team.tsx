"use client";

import team from "@/fixtures/team/data.json";
import React from "react";

const Team: React.FC = () => {
  // Track the currently hovered card's id (or null if none)
  const [hoveredCardId, setHoveredCardId] = React.useState<string | null>(null);

  return (
    <section className="mb-24 flex flex-col items-center max-md:px-4">
      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:max-w-7/8 md:grid-cols-3">
        {team.map((member) => (
          <div
            key={member.id}
            onMouseEnter={() => setHoveredCardId(member.id)}
            onMouseLeave={() => setHoveredCardId(null)}
            className={`group relative flex flex-col overflow-hidden filter transition-all duration-300 ${
              hoveredCardId && hoveredCardId !== member.id
                ? "opacity-35 blur-sm"
                : "blur-0"
            }`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover"
            />
            <div className="flex w-full flex-col gap-0.5 bg-black p-4 transition-all duration-300 md:absolute md:right-0 md:-bottom-[100%] md:left-0 md:group-hover:bottom-0">
              <h3 className="text-2xl font-medium">{member.name}</h3>
              <p className="text-white/75">{member.role}</p>
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height={24}
                >
                  <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
