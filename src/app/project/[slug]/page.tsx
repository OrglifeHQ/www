import React from "react";
import Project, { IProject } from "@/layers/project";
import projects from "@/fixtures/gallery/data.json";

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project: IProject | undefined = projects.find((p) => p.slug === slug);

  return <Project project={project as IProject} />;
};

export default ProjectPage;
