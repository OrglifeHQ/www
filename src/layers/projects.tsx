import Gallery from "@/components/Gallery";
import React from "react";

const ProjectsPage: React.FC = () => {
    return (
        <section className="flex h-full w-full flex-col items-center max-md:px-4 py-24">
            <div className="flex w-full flex-col gap-16 md:max-w-7/8">
                {/* Header text */}
                <div className="flex w-full flex-col items-center gap-4">
                    <h1 className="font-[Clash_Display] text-[8vw] leading-[6vw] font-bold uppercase">
                        PROJECTS
                    </h1>
                    <p>Crafting dreams for gain reality</p>
                </div>
            </div>
            <Gallery />
        </section>
    );
};

export default ProjectsPage;
