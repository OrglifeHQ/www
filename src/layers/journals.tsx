import Journal from "@/components/Journal";
import React from "react";

const JournalsPage: React.FC = () => {
    return (
        <section className="flex h-full w-full flex-col items-center px-4 py-24 pb-0">
            <div className="mb-16 flex w-full flex-col gap-16 md:max-w-7/8">
                {/* Header text */}
                <div className="flex w-full flex-col items-center gap-4">
                    <h1 className="font-[Clash_Display] text-[8vw] leading-[6vw] font-bold uppercase">
                        Journals
                    </h1>
                    <p>Find our journals</p>
                </div>
            </div>
            <Journal />
        </section>
    );
};

export default JournalsPage;
