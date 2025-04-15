import React from "react";
import journals from "@/fixtures/journals/data.json";
import Journal, { IJournal } from "@/layers/journal";

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
