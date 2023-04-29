import React from "react";
import slide1 from "../../Assests/Image/Galary/galary1.png";
import slide2 from "../../Assests/Image/Galary/galary2.png";
import slide4 from "../../Assests/Image/Galary/galary4.png";
import slide6 from "../../Assests/Image/Galary/galary6.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const Galary = () => {
  const slides = [
    {
      id: 1,
      src: slide1,
    },
    {
      id: 2,
      src: slide2,
    },
    {
      id: 3,
      src: slide1,
    },
    {
      id: 1,
      src: slide4,
    },
    {
      id: 2,
      src: slide2,
    },
    {
      id: 3,
      src: slide6,
    },
    {
      id: 1,
      src: slide1,
    },
    {
      id: 2,
      src: slide2,
    },
    {
      id: 3,
      src: slide4,
    },
  ];
  return (
    <div className="galary-background lg:pb-10 md:pb-10 pb-0">
      <div className="container mx-auto lg:py-10 md:py-10 py-5">
      <div className="text-center lg:pt-6 md:pt-6 pt-2 lg:pb-10 md:pb-10 pb-5">
          <h2 className="text-xl text-center text-gray-300">All Car Galary</h2>
          <h2 className="text-white lg:text-4xl md:text-4xl text-2xl font-bold font-[cursive]">
            See Our <span className="text-orange-500">Latest Galary</span>
          </h2>
        </div>

        <Swiper
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={15}
          slidesPerView={1}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            550: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
            1020: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper lg:mb-8 md:mb-8 mb-2"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index + 1}>
              <div
                className="h-full flex flex-col items-center justify-center lg:px-0 md:px-0 px-2"
                key={slide?.id}
                data-aos="zoom-in"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <Image
                  src={slide.src}
                  alt="Galary Image"
                  className="h-full object-cover object-center lg:border-8 md:borer-8 border-0 rounded-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Galary;
