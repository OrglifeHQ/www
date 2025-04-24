import React from "react";
import Project, { IProject } from "@/layers/project";
import projects from "@/fixtures/gallery/data.json";
import { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const slug = (await params).slug;

    // fetch project information
    const project: IProject | undefined = projects.find((p) => p.slug === slug);
    if (!project) {
        return {
            title: "Project not found",
            description: "Project not found",
        };
    }

    return {
        title: project.details.title,
        description: project.details.content.join(" "),
        keywords: [
            project.details.title,
            project.name,
            project.name + " " + siteConfig.company.name,
        ],
    };
}

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
