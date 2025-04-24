import ProjectsPage from "@/layers/projects";
import { siteConfig } from "@/lib/config";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Projects | " + siteConfig.company.name.split(" ")[0],
    keywords: [
        "Projects",
        siteConfig.company.name,
        "Projects of " + siteConfig.company.name.split(" ")[0],
    ],
    description: "All projects of the company" + siteConfig.company.name,
};

const Projects = () => {
    return <ProjectsPage />;
};

export default Projects;
