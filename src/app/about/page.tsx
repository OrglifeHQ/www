import AboutPage from "@/layers/about";
import { siteConfig } from "@/lib/config";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "About | " + siteConfig.company.name.split(" ")[0],
    keywords: [
        "About us",
        siteConfig.company.name,
        "About " + siteConfig.company.name.split(" ")[0],
    ],
    description: "Details about the company" + " " + siteConfig.company.name,
};

const About = () => {
    return <AboutPage />;
};

export default About;
