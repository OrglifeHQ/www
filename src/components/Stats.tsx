import React from "react";
import stats from "../fixtures/stats/data.json";
import { CountUp } from "./ui/countup";
import Link from "next/link";

const Stats: React.FC = () => {
  return (
    <section className="w-full bg-[url('https://images.unsplash.com/photo-1662473991701-c69c3b6bf6fb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww')] bg-no-repeat bg-cover bg-fixed h-full flex flex-col items-center max-md:p-4 py-24 text-white">
      <div className="w-full md:max-w-7/8 flex flex-col gap-8">
        <h2 className="uppercase text-2xl md:text-[2rem] font-['Clash_Display'] font-semibold">stats</h2>
        <div className="grid grid-cols-1 w-full sm:grid-cols-2 md:grid-cols-3">
          {/* Finished projects */}
          <div className="max-md:border-t md:border-y max-md:border-x md:border-l border-white w-full p-8 md:px-12">
            <h4 className="text-[2rem] md:text-[4rem] font-medium">
              <CountUp
                from={0}
                to={stats.finished_project}
                direction="up"
                duration={1}
              />
              +
            </h4>
            <p>Finished Projects</p>
          </div>

          {/* Team members */}
          <div className="border-y border-x border-white w-full p-8 md:px-12">
            <h4 className="text-[2rem] md:text-[4rem] font-medium">
              <CountUp
                from={0}
                to={stats.team_members}
                direction="up"
                duration={1}
              />
              +{" "}
            </h4>
            <p>Team Members</p>
          </div>

          {/* Happy customers */}
          <div className="max-md:border-x max-md:border-b md:border-r md:border-y border-white w-full p-8 md:px-12">
            <h4 className="text-[2rem] md:text-[4rem] font-medium">
              <CountUp
                from={0}
                to={stats.happy_customers}
                direction="up"
                duration={1}
              />
              +
            </h4>
            <p>Happy Customers</p>
          </div>

          {/* Loyal partners */}
          <div className="border-b max-md:border-x md:border-l border-white w-full p-8 md:px-12">
            <h4 className="text-[2rem] md:text-[4rem] font-medium">
              <CountUp
                from={0}
                to={stats.loyal_partners}
                direction="up"
                duration={1}
              />
              +{" "}
            </h4>
            <p>Loyal Partners</p>
          </div>

          {/* Coffee drinked */}
          <div className="border-b border-x border-white w-full p-8 md:px-12">
            <h4 className="text-[2rem] md:text-[4rem] font-medium">
              <CountUp
                from={0}
                to={stats.coffee_drinked}
                direction="up"
                duration={1}
              />
              +
            </h4>
            <p>Coffee Drinked</p>
          </div>

          {/* Contact */}
          <Link
            href={"/contact"}
            className="bg-white hover:bg-white/75 transition-all cursor-pointer flex-col text-black items-start justify-center w-full flex p-8"
          >
            <h4 className="font-medium text-[2rem] md:text-[2.75rem]">
              Contact us
            </h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height={44}
              fill="currentColor"
            >
              <path d="M5.63589 19.7784L4.22169 18.3644L15.657 6.92908L10.0712 6.92908V4.92908L19.0712 4.92908L19.0712 13.9291H17.0712L17.0712 8.34326L5.63589 19.7784Z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Stats;
