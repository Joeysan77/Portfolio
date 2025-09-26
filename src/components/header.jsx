import { useState, useEffect } from "react";
import { FaUser, FaMoon, FaBars } from "react-icons/fa";
import {Logo} from './logo.jsx'
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`z-10 fixed top-0 left-0 p-2 w-full flex justify-center items-center backdrop-blur-md transition-p duration-[.3s] ${
        scrolled
          ? "shadow-sm shadow-[rgb(0,0,0,.25)] p-2"
          : "shadow-none p-3"
      } `}
    >
    {/* <div className="p-2 rounded-full border-2 border-solid border-[#0583f2]">
        <FaUser className="text-[#0583F2] text-2xl " />
      </div> */}
      <div className="absolute right-0 mr-3 flex">
        <FaMoon className="text-xl text-black mr-5" />
        <FaBars className="text-xl text-black" />
      </div>
      <Logo/>
    </div>
  );
}