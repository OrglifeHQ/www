import React from "react";

export interface IJournal {
    category_name: string;
    title: string;
    description: string;
    slug: string;
    content: string[];
    image: string;
}

const JournalPage: React.FC<{ journal: IJournal }> = ({ journal }) => {
    return (
        <section
            className="bg-cover bg-center py-8 pb-16 text-white max-md:px-4"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1637946175559-22c4fe13fc54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFyayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')",
            }}
        >
            <div className="mx-auto flex gap-8 max-md:flex-col-reverse md:max-w-7/8 md:flex-row-reverse">
                {/* Left section */}
                <div className="flex-1 space-y-4">
                    <h1 className="text-[2rem] leading-tight font-medium md:text-[3rem]">
                        {journal?.title}
                    </h1>
                    {journal?.content.map((para, index) => (
                        <p key={index} className="text-base text-white/75">
                            {para}
                        </p>
                    ))}
                </div>

                <div className="flex-1 space-y-8">
                    <img src={journal?.image} alt="" className="w-full" />
                </div>
            </div>
        </section>
    );
};

export default JournalPage;
