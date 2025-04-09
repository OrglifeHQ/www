import React from "react";
import Blog from "./Blog";
import blogs from "../../fixtures/blogs/overview.json";

const BlogSuggestion = () => {
  return (
    <div className="grid gap-8 w-full md:w-4/5 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
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
  );
};

export default BlogSuggestion;
