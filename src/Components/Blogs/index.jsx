import React from "react";
import BlogSuggestion from "./BlogSuggestion.jsx";

const Blogs = () => {
  return (
    <div className="p-8 flex gap-8 flex-col items-center w-full">
      <div className="w-full md:max-w-3/5">
        <h1 className="text-[4rem] leading-[8rem] font-medium font-sans">
          Posts
        </h1>
        <p className="w-full mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore odio
          sed sint modi temporibus repre ariatur, explicabo
          delectus, cum sit, distinctio voluptatibus fuga! Eveniet, est dolorum
          quasi, modi iste corrupti ad quo ab ut necessitatibus obcaecati
          exercitationem quas eaque?
        </p>
      </div>
      <BlogSuggestion />
    </div>
  );
};

export default Blogs;
