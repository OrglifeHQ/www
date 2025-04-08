import React from "react";
import Blog from "./Blog.jsx";

const postMap = {};

const Blogs = () => {
  return (
    <div className="px-8">
      <h1 className="text-[6rem] font-sans font-normal">Posts</h1>
      <div className="grid gap-8 grid-cols-3 col-span-3">
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};

export default Blogs;
