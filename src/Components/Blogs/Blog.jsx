import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = ({ title, description, date, slug }) => {
  const navigate = useNavigate();

  function handleOpenBlog() {
    navigate(`/blog/${slug}`);
  }

  return (
    <div
      className="relative h-[70vh] w-full bg-[#E6D7D7] group"
      id="image_container"
    >
      <div
        onClick={handleOpenBlog}
        id="content_container"
        className="absolute w-full bottom-0 bg-orange-400 max-md:p-8 group-hover:p-4 flex flex-col gap-4 cursor-pointer h-full md:h-0 group-hover:h-full overflow-hidden transition-all duration-250 ease-in-out"
      >
        <p className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {date}
        </p>
        <h2 className="text-[1.5rem] font-medium md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {title}
        </h2>
        <p className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {description}
        </p>
        <span className="cursor-pointer mt-4 hover:underline underline-offset-4">
          Read more
        </span>
      </div>
    </div>
  );
};

export default Blog;
