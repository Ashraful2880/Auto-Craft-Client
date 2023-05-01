import About from "@/Components/About/About";
import Achievment from "@/Components/Achievment/Achievment";
import Bannar from "@/Components/Bannar/Bannar";
import Blogs from "@/Components/Blogs/Blogs";
import Branches from "@/Components/Branches/Branches";
import Cars from "@/Components/Cars/Cars";
import DealOfTheDay from "@/Components/DealOfTheDay/DealOfTheDay";
import Discount from "@/Components/Discount/Discount";
import Galary from "@/Components/Galary/Galary";
import Service from "@/Components/Service/Service";
import Testimonial from "@/Components/Testimonial/Testimonial";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const Home = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <main>
      <Bannar />
      <Cars />
      <About />
      <Galary />
      <Discount />
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <Achievment counterOn={counterOn} />
      </ScrollTrigger>
      <DealOfTheDay />
      <Testimonial />
      <Service />
      <Branches />
      <Blogs />
    </main>
  );
};
export default Home;
