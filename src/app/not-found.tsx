import React from "react";

export default function NotFound(): React.JSX.Element {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-2 text-center md:p-16">
            <div className="to-primary/50 mb-4 flex size-24 items-center justify-center rounded-full bg-gradient-to-b from-white/0 font-semibold">
                404
            </div>
            <h1 className="font-[Clash_Display] text-2xl font-medium md:text-[2rem]">
                Nothing to see here!
            </h1>
            <p className="opacity-75">
                We recommand you to go to pages listed in top navbar
                <br />
                or below in footer section.
            </p>
        </div>
    );
}
