import JournalsPage from "@/layers/journals";
import { siteConfig } from "@/lib/config";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Jornals | " + siteConfig.company.name.split(" ")[0],
    keywords: [
        "Jurnals",
        siteConfig.company.name,
        "Journals of " + siteConfig.company.name.split(" ")[0],
    ],
    description: "All journals of the company" + " " + siteConfig.company.name,
};

const Journals = () => {
    return <JournalsPage />;
};

export default Journals;
