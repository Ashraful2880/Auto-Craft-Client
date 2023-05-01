import React from "react";
import Image from "next/image";
import Link from "next/link";
import slide1 from "../../Assests/Image/Slider/slider-3.jpg";
import slide2 from "../../Assests/Image/Slider/slider-2.jpg";
import slide3 from "../../Assests/Image/Slider/slider.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import { HiArrowNarrowRight } from "react-icons/hi";
SwiperCore.use([Pagination, Autoplay]);

const Bannar = () => {
  const slides = [
    {
      id: 1,
      src: slide1,
      heading: "Find Your Dreamy",
      heading2: "Sports Car",
      subHeading:
        "Nullam et interdum odio. Etiam laoreet ex id gravida volutpat. Vestibulum pulvinar nisl quis lobortis bibendum.",
    },
    {
      id: 2,
      src: slide2,
      heading: "Get The Awesome",
      heading2: "Super Car",
      subHeading:
        "Nullam et interdum odio. Etiam laoreet ex id gravida volutpat. Vestibulum pulvinar nisl quis lobortis bibendum.",
    },
    {
      id: 3,
      src: slide3,
      heading: "Take a Comfortable",
      heading2: "Family Car",
      subHeading:
        "Nullam et interdum odio. Etiam laoreet ex id gravida volutpat. Vestibulum pulvinar nisl quis lobortis bibendum.",
    },
  ];
  return (
    <div>
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        className="lg:h-[95vh] md:h-[65vh] h-[50vh] lg:-mt-0 md:-mt-0 -mt-1"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="h-full flex flex-col items-center justify-center">
              <Image
                src={slide.src}
                alt={slide.heading}
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute lg:top-[50%] -translate-y-[50%] lg:left-[200px] md:left-[180px] left-[50px] text-left">
                <div>
                  <h1 className="lg:text-7xl md:text-6xl text-4xl font-bold text-white">
                    {slide?.heading}
                  </h1>
                  <h1 className="lg:my-3 md:my-3 lg:text-5xl md:text-4xl text-3xl font-bold text-orange-400 font-[cursive]">
                    {slide?.heading2}
                  </h1>
                </div>
                <p className="lg:text-[19px] md:text-[19px] text-md text-gray-300 lg:mt-8 md:mt-8 mt-4 font-normal tracking-wider">
                  {slide?.subHeading.slice(0, 62)}
                </p>
                <p className="lg:text-[19px] md:text-[19px] text-md text-gray-300 mt-1 font-normal tracking-wider">
                  {slide?.subHeading.slice(63, 124)}
                </p>
                <Link
                  href="/cars"
                  className="lg:mt-5 md:mt-4 mt-0 inline-block"
                >
                  <button className="relative inline-block lg:text-lg md:text-lg text-sm group lg:mt-8 mt-6">
                    <span className="relative z-10 block text-white lg:px-6 md:px-6 px-4 lg:py-3 py-2.5 py-2.5 overflow-hidden font-semibold leading-tight transition-colors duration-300 ease-out border-2 border-orange-600 hover:border-white rounded-lg group-hover:text-orange-600">
                      <span className="absolute inset-0 w-full h-full px-5 py-3 bg-orange-600"></span>
                      <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
                      <span className="relative flex items-center gap-x-2">
                        <span>Book Now</span>
                        <HiArrowNarrowRight />
                      </span>
                    </span>
                    <span
                      className="absolute bottom-0 right-0 w-full h-12 -mb-2 -mr-2 transition-all duration-200 ease-linear bg-white rounded-lg group-hover:mb-0 group-hover:mr-0 lg:block md:block hidden"
                      data-rounded="rounded-lg"
                    ></span>
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Bannar;
