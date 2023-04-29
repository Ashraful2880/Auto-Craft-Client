import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import postedBy from "../../Assests/Image/posted.png";
import axios from "axios";
import CardLoading from "../Shared/Loading/CardLoading";

const SingleBlog = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState();

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.NEXT_PUBLIC_HOST_URL}/blog/${id}`)
        .then((resp) => {
          setBlog(resp?.data);
        });
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100">
      {blog ? (
        <div className="flex flex-col justify-center">
          <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full lg:pt-20 md:pt-10 pt-5">
            <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
              <div className="relative block group" data-aos="zoon-in">
                <div
                  className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none"
                  aria-hidden="true"
                ></div>
                <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                  <Image
                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
                    src={blog?.blogImage}
                    width="100"
                    height="100"
                    layout="responsive"
                    alt="Blog post"
                  />
                </figure>
              </div>
              <div data-aos="fade-down">
                <ul className="flex flex-wrap text-xs font-medium -m-1 mb-3">
                  <li className="m-1">
                    <p className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">
                      Technology
                    </p>
                  </li>
                  <li className="m-1">
                    <p className="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-150 ease-in-out">
                      Car
                    </p>
                  </li>
                </ul>
                <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                  <h4 className="hover:text-gray-600 transition duration-150 ease-in-out">
                    {blog?.title}
                  </h4>
                </h3>
                <p className="text-lg text-gray-400 flex-grow">
                  {blog?.description}
                </p>
                <div className="flex items-center mt-4">
                  <Image
                    className="h-10 w-10 rounded-full flex-shrink-0 mr-4"
                    src={postedBy}
                    width="100"
                    height="100"
                    alt="Author 04"
                  />
                  <div>
                    <h5 className="font-medium text-gray-900 transition duration-150 ease-in-out">
                      {blog?.posted_by}
                    </h5>
                    <span className="text-gray-500">
                      {blog?.published_date}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      ) : (
        <div className="container mx-auto pt-12">
          <CardLoading />
        </div>
      )}
    </div>
  );
};

export default SingleBlog;
