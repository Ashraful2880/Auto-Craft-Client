import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaRegComment, FaRegUserCircle } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardLoading from "../Shared/Loading/CardLoading";
import { HiArrowNarrowRight } from "react-icons/hi";

SwiperCore.use([Navigation, Pagination, Autoplay]);



const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_HOST_URL}/blogs`)
      .then((res) => {
        setBlogs(res?.data);
      });
  }, []);

  return (
    <>
      <div className="container mx-auto lg:min-h-screen md:min-h-screen lg:pb-0 md:pb-0 pb-4 lg:px-0 md:px-0 px-1">
        {/* Blog Title */}
        <div className="text-center lg:pt-6 md:pt-6 pt-2 lg:pb-10 md:pb-10 pb-5">
          <h2 className="text-xl text-center text-gray-500">Recent Blogs</h2>
          <h2 className="lg:text-4xl md:text-4xl text-2xl font-bold font-[cursive]">
            Read Our Latest <span className="text-orange-500">Blogs</span>
          </h2>
        </div>
        {/* All Bogs */}
        {blogs?.length > 0 ? (
          <Swiper
            loop={true}
            autoplay={{ delay: 3000 }}
            grabCursor={true}
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              550: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 2,
              },
              1020: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper"
          >
            {blogs?.map((blog) => (
              <SwiperSlide
                className="border rounded overflow-hidden shadow-lg group cursor-pointer"
                key={blog?._id}
              >
                <Link href={`/blogs/${blog?._id}`}>
                  <div
                    data-aos="zoom-in"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    <Image
                      className="w-full lg:px-0 md:px-0 px-2"
                      src={blog?.blogImage}
                      alt="Blog Image"
                      width={100}
                      height={100}
                      layout="responsive"
                      quality={100}
                      loading="eager"
                    />
                    <div className="bg-transparent group-hover:bg-gray-900 transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-50 opacity-10"></div>
                  </div>
                  <div
                    className="lg:px-5 md:px-5 px-1 pb-5"
                    data-aos="flip-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                  >
                    <h4 className="text-xl font-bold my-5 text-gray-700">
                      {blog?.title}
                    </h4>
                    <p className="text-stone-500">
                      {blog?.description?.slice(0, 90)}
                    </p>
                    <div className="py-5">
                      <hr className="border" />
                      <div className="flex justify-around gap-x-4 pt-2 pb-2">
                        <div className="flex items-center gap-x-2 text-stone-500">
                          <FaRegUserCircle className="text-orange-600" />
                          <h4> {blog?.posted_by} </h4>
                        </div>
                        <div className="border-l-2 "></div>
                        <div className="flex items-center gap-x-2">
                          <FaCalendarAlt className="text-orange-600" />
                          <p className="text-stone-500">
                            {blog?.published_date}
                          </p>
                        </div>
                      </div>
                      <hr className="border" />
                    </div>
                    <Link href={`/blogs/${blog?._id}`}>
                      <div className="flex justify-between items-center">
                        <button className="relative inline-block text-lg group">
                          <span className="relative z-10 block text-white px-4 py-2 overflow-hidden leading-tight transition-colors duration-500 ease-out border-2 border-orange-600 hover:border-white group-hover:text-orange-600">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 bg-orange-600"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-500 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                            <span className="relative flex items-center gap-x-2">
                              <span>Read More</span>
                              <HiArrowNarrowRight />
                            </span>
                          </span>
                          <span className="absolute bottom-0 right-0 w-full h-12 -mb-2 -mr-2 transition-all duration-200 ease-linear bg-white group-hover:mb-0 group-hover:mr-0"></span>
                        </button>

                        <div className="flex text-stone-500 text-sm items-center gap-x-6">
                          <button className="flex items-center gap-x-1 hover:text-orange-600 transition duration-500 ease-out">
                            <h4 className="mr-2">Comments </h4>
                            <FaRegComment className="text-orange-600" />
                            <span className="text-sm">(32)</span>
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 w-full">
              {[...Array(6)]?.map((item, index) => (
                <div key={index + 1}>
                  <CardLoading />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Blogs;
