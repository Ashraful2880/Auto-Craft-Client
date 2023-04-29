import "@/styles/globals.css";
import ScrollToTop from "react-scroll-to-top";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "@/Components/Shared/Header/Navbar";
import TopHeader from "@/Components/Shared/Header/TopHeader";
import Footer from "@/Components/Shared/Footer/Footer";

const options = {
  position: positions.TOP_RIGHT,
  timeout: 4000,
  offset: "180px",
  transition: transitions.SCALE,
};

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  // AOS.init({ duration: 1000 });
  return (
    <>
      <ScrollToTop smooth />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
