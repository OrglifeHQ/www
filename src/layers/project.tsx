import React from "react";

export interface IProject {
  name: string;
  slug: string;
  details: {
    title: string;
    content: string[];
  };
  image: string;
}

const ProjectPage: React.FC<{ project: IProject }> = ({ project }) => {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1637946175559-22c4fe13fc54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFyayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
          alt="Background"
          className="h-full w-full object-cover opacity-10"
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto grid md:max-w-7/8 grid-cols-1 gap-8 max-md:px-4 py-24 lg:grid-cols-2">
        {/* Left Images (Below Text on Mobile) */}
        <div className="flex flex-1 flex-col gap-8">
          <img
            src={project?.image}
            alt="Glossy Paper"
            className="w-full shadow-lg"
          />
        </div>

        {/* Right Content (Text First on Mobile) */}
        <div className="flex flex-1 flex-col gap-4">
          <h1 className="text-[3rem] font-semibold">
            {project?.details.title}
          </h1>
          {project?.details.content.map((para, index) => (
            <p key={index} className="/75">
              {para}
            </p>
          ))}

          {/* Info Grid */}
          <div className="mt-8">
            <div className="p-4">
              <h5 className="block font-medium text-white/50">DATE</h5>
              <span className="text-base">12 February 2024</span>
            </div>
            <div className="p-4">
              <h5 className="block font-medium text-white/50">CATEGORY</h5>
              <span className="text-base">Branding</span>
            </div>
            <div className="p-4">
              <h5 className="block font-medium text-white/50">SERVICES</h5>
              <span className="text-base">Logo, Business Card, Website</span>
            </div>
            <div className="p-4">
              <h5 className="block font-medium text-white/50">URL</h5>
              <span className="text-base">Themeforest.Net</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPage;
