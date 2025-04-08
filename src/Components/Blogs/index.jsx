import React from "react";
import Blog from "./Blog.jsx";

const blogsMap = new Array(3).fill({
  title: "A few words about us",
  description: "Lorem ipsum dolor sit amet  suscipit sapiente esse temporibus quae, nihil voluptates, harum illum laboriosam?",
  date: "08 - 12 - 2025",
  slug: 1
});

const Blogs = () => {
  return (
    <div className="px-8 flex flex-col w-full">
      <h1 className="text-[6rem] font-sans font-normal">Posts</h1>
      <div className="grid gap-8 max-xl:grid-cols-1 xl:grid-cols-3">
        {blogsMap.map((blog, index) => {
          return (
            <div key={index}>
              <Blog title={blog.title} slug={blog.slug} description={blog.description} date={blog.date} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
