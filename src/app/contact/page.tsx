import React from "react";
import ContactPage from "@/layers/contact";
import { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
    title: "Contact | " + siteConfig.company.name.split(" ")[0],
    keywords: [
        "Contact us",
        siteConfig.company.name,
        "Contact " + siteConfig.company.name.split(" ")[0],
    ],
    description: "Contact details about the company" + siteConfig.company.name,
};

const Contact = () => {
    return <ContactPage />;
};

export default Contact;
