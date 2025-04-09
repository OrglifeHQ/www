import React from "react";
import Blog from "./Blog.jsx";
import blogs from "../../fixtures/blogs/overview.json";

const Blogs = () => {
  return (
    <div className="p-8 flex flex-col w-full">
      <h1 className="text-[4rem] leading-[4.5rem] font-medium md:text-[6rem] font-sans">
        Posts
      </h1>
      <p className="mb-8">Find out some of our blogs below</p>
      <div className="grid gap-8 max-xl:grid-cols-1 xl:grid-cols-3">
        {blogs.map((blog, index) => {
          return (
            <div key={index}>
              <Blog
                title={blog.title}
                slug={blog.slug}
                description={blog.description}
                date={blog.date}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
