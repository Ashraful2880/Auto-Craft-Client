import Link from "next/link";
import React from "react";
import {
  FaEnvelopeOpen,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { useRouter } from "next/router";
import post from "../../../Assests/Image/Footer-Blog/111.png";
import post2 from "../../../Assests/Image/Footer-Blog/2222.png";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();
  const router = useRouter();
  return (
    <>
      {!router?.asPath.includes("/dashboard") && (
        <div className="footer-background relative">
          <footer className="container mx-auto">
            <div className="border-b border-b-gray-700 py-8">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-content-center place-items-center lg:gap-0 md:gap-0 gap-3 lg:py-5 py-3">
                <div className="flex flex-col items-center justify-center gap-x-3">
                  <div className="bg-orange-100 h-16 w-16 mb-4 flex justify-center items-center rounded-full">
                    <FaMapMarkerAlt className="text-orange-600 text-4xl" />
                  </div>
                  <h4 className="text-[26px] text-white font-semibold mb-3">
                    Find Us
                  </h4>
                  <p className="text-[17px] text-gray-300 lg:w-2/3 w-full text-center mx-auto">
                    Completely engage out-of-the-box solutions without
                    intermandated action items.
                  </p>
                  <h4 className="text-xl text-orange-500 mt-4">
                    HSS Road, Jhenaidh
                  </h4>
                </div>

                <div className="flex flex-col items-center justify-center gap-x-3">
                  <div className="bg-orange-100 h-16 w-16 mb-4 flex justify-center items-center rounded-full">
                    <FaPhone className="text-orange-600 text-4xl" />
                  </div>
                  <h4 className="text-[26px] text-white font-semibold mb-3">
                    Call Us
                  </h4>
                  <p className="text-[17px] text-gray-300 lg:w-2/3 w-full text-center mx-auto">
                    Completely engage out-of-the-box solutions without
                    intermandated action items.
                  </p>
                  <h4 className="text-xl text-orange-500 mt-4">+88 01974238487</h4>
                </div>

                <div className="flex flex-col items-center justify-center gap-x-3">
                  <div className="bg-orange-100 h-16 w-16 mb-4 flex justify-center items-center rounded-full">
                    <FaEnvelopeOpen className="text-orange-600 text-4xl" />
                  </div>
                  <h4 className="text-[26px] text-white font-semibold mb-3">
                    Mail Us
                  </h4>
                  <p className="text-[17px] text-gray-300 lg:w-2/3 w-full text-center mx-auto">
                    Completely engage out-of-the-box solutions without
                    intermandated action items.
                  </p>
                  <h4 className="text-xl text-orange-500 mt-4">
                    contact@autocraft.com
                  </h4>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:place-items-start md:place-items-start place-items-center place-content-center pb-8">
                <div>
                  <h1 className="text-white text-xl font-semibold lg:mb-8 mb-5">
                    About Company
                  </h1>
                  <ul className="text-gray-400">
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/">Inventory Grid</Link>
                    </li>
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/">Contact Us</Link>
                    </li>
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/">Our Service</Link>
                    </li>
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/"> Promotion</Link>
                    </li>
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/">Dealer List</Link>
                    </li>
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/">Rent Inventory</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-white text-xl font-semibold lg:mb-8 mb-5">
                    Vehicles Type
                  </h1>
                  <ul className="text-gray-400">
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/">Pickup</Link>
                    </li>
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/">Family MPV</Link>
                    </li>
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/">Sedan</Link>
                    </li>
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/"> SUVs</Link>
                    </li>
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/">Sport Coupe</Link>
                    </li>
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/">Convertible</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-white text-xl font-semibold lg:mb-8 mb-5">
                    Quick Links
                  </h1>
                  <ul className="text-gray-400">
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/">Ford Explorer</Link>
                    </li>
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/">Lamborghini</Link>
                    </li>
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/">FerrariF12</Link>
                    </li>
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/"> Mercedes-Benz</Link>
                    </li>
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/">BMW Sedan</Link>
                    </li>
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/">Tesla Roadstar</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-white text-xl font-semibold lg:mb-8 mb-5">
                    Services
                  </h1>
                  <ul className="text-gray-400">
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/">Sale Vehicle</Link>
                    </li>
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/">Rent Vehicle</Link>
                    </li>
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/">Air Conditioning</Link>
                    </li>
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/"> Electric Auto</Link>
                    </li>
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/">Tire & Auto Parts</Link>
                    </li>
                    <li className="my-3 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/">Break Service</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="text-white text-xl font-semibold lg:mb-8 mb-5 lg:text-left md:text-left text-center">
                    Recent Post
                  </h1>
                  <ul className="text-gray-400">
                    <li className="my-5 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/blogs" className="flex items-center gap-x-3">
                        <Image
                          src={post}
                          alt="Footer Blog Link"
                          className="w-24"
                        />
                        <div>
                          <h4 className="text-white hover:text-orange-600 transition duration-300 ease-in-out font-semibold mb-1">
                            How long does It take to order a rent car?
                          </h4>
                          <p>December 10, 2022</p>
                        </div>
                      </Link>
                    </li>
                    <li className="my-5 hover:text-orange-600 transition duration-300 ease-in-out">
                      <Link href="/blogs" className="flex items-center gap-x-3">
                        <Image
                          src={post2}
                          alt="Footer Blog Link"
                          className="w-24"
                        />
                        <div>
                          <h4 className="text-white hover:text-orange-600 transition duration-300 ease-in-out font-semibold mb-1">
                            How long does It take to order a rent car?
                          </h4>
                          <p>December 10, 2022</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center py-6 gap-x-2 border-b border-b-gray-700 border-t border-t-gray-700">
                <div className="w-10 h-10 text-indigo-500 hover:text-white bg-white hover:bg-indigo-500 border border-white hover:border-indigo-500 mx-1 rounded-full flex justify-center items-center transition duration-300 ease-in-out">
                  <Link href="https://www.facebook.com" target="blank">
                    <FaFacebook className="text-2xl" />
                  </Link>
                </div>
                <div className="w-10 h-10 text-[#2563eb] hover:text-white bg-white hover:bg-[#2563eb] border border-white hover:border-[#2563eb] mx-1 rounded-full flex justify-center items-center transition duration-300 ease-in-out">
                  <Link href="https://www.twitter.com" target="blank">
                    <FaTwitter className="text-2xl" />
                  </Link>
                </div>
                <div className="w-10 h-10 text-orange-600 hover:text-white bg-white hover:bg-orange-600 border border-white hover:border-orange-600 mx-1 rounded-full flex justify-center items-center transition duration-300 ease-in-out">
                  <Link href="https://www.twitter.com" target="blank">
                    <FaInstagram className="text-2xl" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:flex md:flex block justify-between items-center lg:px-0 md:px-0 px-2 lg:py-9 md:py-9 py-4">
              <p className="text-gray-400 lg:text-start md:text-start text-center hover:text-white transition duration-300 ease-in-out cursor-pointer">
                Copyright &copy; {year}, All Right Reserved
                <a
                  href="https://ashrafulislam.netlify.app/"
                  target="blank"
                  className="ml-1 text-orange-500"
                >
                  Ashraful Islam
                </a>
              </p>
              <div className="lg:pt-0 md:pt-0 pt-2">
                <ul className="flex gap-x-2 items-center lg:justify-start md:justify-start justify-center">
                  <li className="text-gray-400 hover:text-white transition duration-300 ease-in-out">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="border-l border-l-orange-500 px-2 text-gray-400 hover:text-white transition duration-300 ease-in-out">
                    <Link href="/">Terms</Link>
                  </li>
                  <li className="border-l border-l-orange-500 px-2 text-gray-400 hover:text-white transition duration-300 ease-in-out">
                    <Link href="/">Privacy</Link>
                  </li>
                  <li className="border-l border-l-orange-500 px-2 text-gray-400 hover:text-white transition duration-300 ease-in-out">
                    <Link href="/">Policy</Link>
                  </li>
                  <li className="border-l border-l-orange-500 px-2 text-gray-400 hover:text-white transition duration-300 ease-in-out">
                    <Link href="/">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Footer;
