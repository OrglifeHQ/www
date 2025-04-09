import React from "react";
import { useParams } from "react-router-dom";
import data from "../../fixtures/blogs/data.json";

const SingleBlog = () => {
  const { slug } = useParams();
  const blog = data.find((b) => b.slug === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <>
      {/* Image container */}
      <section
        className="text-white bg-cover bg-center bg-no-repeat bg-fixed h-[50vh] md:h-dvh w-full flex flex-col justify-center px-8 md:px-24"
        style={{ backgroundImage: `url(${blog.cover_image})` }}
        id="image_container"
      >
        <p>Design</p>
        <h1 className="text-[4rem] md:text-[6rem] leading-[4rem] md:leading-[8rem]">
          Color scheme
        </h1>
      </section>

      {/* This code does not imlement parallex */}
      {/* <section
        className="bg-cover bg-center bg-no-repeat h-dvh w-full flex flex-col justify-center px-8 md:px-24"
        style={{ backgroundImage: `url('https://th.bing.com/th/id/OIP.baxvOflhrN0DIud6v_jDCgHaE8?rs=1&pid=ImgDetMain')` }}
        id="image_container"
      >
        <p>Design</p>
        <h1 className="text-[6rem] leading-[8rem]">Color scheme</h1>
      </section> */}

      {/* Content container */}
      <section
        id="content_container"
        className="flex flex-col items-center gap-y-16 p-8 md:p-16 w-full"
      >
        <div className="bg gap-8 flex flex-col w-full md:max-w-3/5">
          <p id="blog_date">{blog.author + " on " + blog.date}</p>
          <h2
            id="blog_date"
            className="font-medium md:text-[2rem] text-[1.5rem]"
          >
            {blog.title}
          </h2>
          {blog.description.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
        <div className="w-full md:max-w-4/5">
          <img src={blog.image} className="w-full h-full" alt={blog.title} />
        </div>
      </section>

      {/* Quote section */}
      <section className="p-8 lg:h-dvh justify-center flex-col items-center md:p-16 w-full flex">
        <div className="w-full md:max-w-3/5 flex flex-col gap-8">
          <h2 className="font-medium md:text-[2rem] text-[1.5rem]">
            Lorem ipsum dolor sit adipisicing elit. Culpa, sunt.
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            delectus voluptatum et tempore cumque harum! Et expedita dicta
            facilis sunt at ex sit hic dolores? Reiciendis nisi nihil commodi,
            consequatur accusamus vel doloribus saepe aperiam laboriosam
            molestias maxime ipsum sed soluta est quos quod, sint deserunt!
            Accusantium dicta at tempore?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            delectus voluptatum et tempore cumque harum! Et expedita dicta
            facilis sunt at ex sit hic dolores? Reiciendis nisi nihil commodi,
            consequatur accusamus vel doloribus saepe aperiam laboriosam
            molestias maxime ipsum sed soluta est quos quod, sint deserunt!
            Accusantium dicta at tempore?
          </p>
          <div className="bg-orange-400 max-md:flex-col mt-8 md:mt-16 gap-8 w-full p-8 flex">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                height={32}
              >
                <path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"></path>
              </svg>
            </span>
            <div className="flex gap-8 flex-col">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, nobis aut, saepe aliquid velit impedit repudiandae
                dolores cupiditate ipsam sint error minus eius, perspiciatis
                voluptas voluptatum architecto earum. Optio tempore assumenda
                quam! Reprehenderit sint saepe quisquam fugit nesciunt nam atque
                ullam harum. Veniam quidem accusantium ex excepturi dicta error
                voluptatum!
              </p>
              <p className="font-bold">
                {blog.author}
                <br />
                <span className="font-normal">Elite author</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image gallary */}
      <section className="g-[#E6D7D7] p-8 md:p-16 max-md:flex-col justify-center md:h-dvh w-full flex gap-8">
        <div className="flex flex-col gap-8 h-full">
          <img
            className="flex-1 object-cover"
            src={blog.image_gallery[0]}
            alt=""
          />
          <img
            className="flex-1 object-cover"
            src={blog.image_gallery[0]}
            alt=""
          />
        </div>
        <div className="flex h-full md:w-1/2">
          <img className="object-cover" src={blog.image_gallery[0]} alt="" />
        </div>
      </section>

      {/* Challenge container */}
      <section className="g-[#E6D7D7] min-h-dvh justify-center p-8 md:p-16 items-center w-full flex flex-col">
        <div className="w-full md:max-w-3/5 flex flex-col gap-8">
          <h2 className="font-medium md:text-[2rem] text-[1.5rem]">
            Challenge
          </h2>
          {new Array(3).fill(0).map((_, index) => {
            return (
              <p key={index}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque pariatur soluta eos temporibus. Optio sed repellat
                nihil, nemo earum excepturi asperiores. Eveniet aperiam non,
                nihil quidem cupiditate cum officia totam commodi quae! Libero
                mollitia tenetur debitis molestiae cum velit ut quas nesciunt
                asperiores? Nam at nemo possimus architecto laboriosam vitae!
              </p>
            );
          })}
          <span className="mt-24 w-full h-[1px] bg-black/75"></span>
          <span className="flex gap-4">
            <p className="font-bold">Tags:</p> Tag one, Tag two, tag three
          </span>
        </div>
      </section>
    </>
  );
};

export default SingleBlog;
