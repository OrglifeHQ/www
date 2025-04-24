import React from "react";
import journals from "@/fixtures/journals/data.json";
import Journal, { IJournal } from "@/layers/journal";
import { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const slug = (await params).slug;

    // fetch project information
    const journal: IJournal | undefined = journals.find((p) => p.slug === slug);
    if (!journal) {
        return {
            title: "Journal not found",
            description: "Journal not found",
        };
    }

    return {
        title: journal.title,
        description: journal.description + " " + journal.content.join(" "),
        keywords: [
            journal.title,
            journal.category_name,
            journal.title + " " + siteConfig.company.name,
        ],
    };
}

export async function generateStaticParams() {
    return journals.map((journal) => ({
        slug: journal.slug.toString(),
    }));
}

const JournalPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const journal: IJournal | undefined = journals.find((j) => j.slug === slug);

    return <Journal journal={journal as IJournal} />;
};

export default JournalPage;
