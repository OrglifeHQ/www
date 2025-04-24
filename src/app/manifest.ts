import { siteConfig } from "@/lib/config";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteConfig.company.name,
        short_name: siteConfig.company.name.split(" ")[0],
        description: "Find us on www.orglife.co.in",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#F8941D",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
