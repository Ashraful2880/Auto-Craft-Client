import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { BsStar, BsStarFill } from "react-icons/bs";
import CardLoading from "../Shared/Loading/CardLoading";
import Rating from "react-rating";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Navigation, Pagination, Autoplay]);


const Testimonial = () => {
  const [userRatings, setUserRatings] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_HOST_URL}/testimonials`)
      .then((res) => {
        setUserRatings(res?.data);
      });
  }, []);

  return (
    <div className="testimonial-container lg:py-6 md:py-6 py-1 lg:mb-5 md:mb-5 mb-0">
      <div className="text-center lg:pt-6 md:pt-6 pt-2 lg:pb-10 md:pb-10 pb-5">
        <h2 className="text-xl text-center text-gray-300">Our Testimonials</h2>
        <h2 className="text-white lg:text-4xl md:text-4xl text-2xl font-bold font-[cursive]">
          What Client Say <span className="text-orange-500">About Us</span>
        </h2>
      </div>
      {userRatings?.length > 0 ? (
        <Swiper
          loop={true}
          autoplay={{ delay: 3000 }}
          slidesPerView={4}
          spaceBetween={0}
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
              slidesPerView: 4,
            },
          }}
          className="mySwiper container mx-auto"
        >
          {userRatings?.map((rating) => (
            <SwiperSlide key={rating?._id}>
              <div
                className="item mb-5 mx-auto"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <div className="view w-full front-view flex flex-col justify-center items-center">
                  <Image
                    src={rating?.image}
                    alt="userImage"
                    className="profile"
                    width={100}
                    height={100}
                  />
                  <h5 className="pt-4 uppercase text-white"> {rating?.name}</h5>
                  <p className="text-gray-300 mb-3 text-sm">
                    {rating?.profession}
                  </p>
                  <Rating
                    className="text-yellow-600"
                    readonly
                    emptySymbol={
                      <BsStar className="text-gray-400 text-xl mr-2" />
                    }
                    fullSymbol={
                      <BsStarFill className="text-[#FFB627] text-xl mr-2" />
                    }
                    initialRating={Number(rating?.rating)}
                  />
                </div>
                <div className="view back-view flex flex-col justify-center items-center">
                  <FaQuoteRight className="mb-5 text-orange-600" />
                  <p className="text-md text-gray-300"> {rating?.comment}</p>
                  <FaQuoteRight className="fas fa-quote-right mt-5 text-orange-600" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 w-full container mx-auto">
            {[...Array(6)].map((item, index) => (
              <div key={index + 1}>
                <CardLoading />
              </div>
            ))}
          </div>
        </>
      )}
      <FaQuoteLeft className="text-5xl text-orange-500 text-center mx-auto mb-5 mt-5" />
    </div>
  );
};

export default Testimonial;
