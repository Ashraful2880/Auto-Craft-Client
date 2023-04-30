import React, { useEffect, useRef, useState } from "react";
import deal from "../../Assests/Image/Deal.png";
import Image from "next/image";

const DealOfTheDay = () => {
  const [timerDays, setTimerDays] = useState ("0000");
  const [timerHours, setTimerHours] = useState ("00");
  const [timerMinutes, setTimerMinutes] = useState ("00");
  const [timerSeconds, setTimerSeconds] = useState ("00");
  const interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("December 31, 2024").getTime();
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days.toString().padStart(2, "0"));
        setTimerHours(hours.toString().padStart(2, "0"));
        setTimerMinutes(minutes.toString().padStart(2, "0"));
        setTimerSeconds(seconds.toString().padStart(2, "0"));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="bg-shape">
      <div className="container mx-auto py-10">
        <div className="lg:flex md:flex block justify-center items-center gap-x-4">
          <div
            className="w-full"
            data-aos="flip-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold leading-tight uppercase lg:text-start md:text-start text-center">
              DEAL OF THE DAY
            </h1>
            <h1 className="lg:text-2xl md:text-2xl text-lg font-bold leading-tight text-orange-600 uppercase lg:text-start md:text-start text-center mt-2">
              HOT DEAL ! SALE UP TO 30% OFF
            </h1>
            <div className="lg:mt-12 mt-5 lg:px-0 md:px-0 px-4 lg:w-2/3 w-full">
              <div className="flex lg:gap-x-4 md:gap-x-4 gap-x-2 items-center">
                <div className="w-full px-5 py-3 border rounded-md text-center shadow-md border-b-4 border-b-orange-600">
                  <p className="text-4xl font-bold text-orange-600">
                    {timerDays}
                  </p>
                  <p className="mt-1 font-semibold">Days</p>
                </div>
                <div className="w-full px-5 py-3 border rounded-md text-center shadow-md border-b-4 border-b-orange-600">
                  <p className="text-4xl font-bold text-orange-600">
                    {timerHours}
                  </p>
                  <p className="mt-1 font-semibold">Hrs</p>
                </div>
                <div className="w-full px-5 py-3 border rounded-md text-center shadow-md border-b-4 border-b-orange-600">
                  <p className="text-4xl font-bold text-orange-600">
                    {timerMinutes}
                  </p>
                  <p className="mt-1 font-semibold">Mins</p>
                </div>
                <div className="w-full px-5 py-3 border rounded-md text-center shadow-md border-b-4 border-b-orange-600">
                  <p className="text-4xl font-bold text-orange-600">
                    {timerSeconds}
                  </p>
                  <p className="mt-1 font-semibold">Secs</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full lg:mt-0 md:mt-0 mt-5 overflow-hidden"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Image
              src={deal}
              alt="Deal Picture"
              className="mx-auto bounce-animation2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfTheDay;
