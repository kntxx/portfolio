import React, { useState, useEffect } from "react";
import { logo } from "../assets";
import { Link } from "react-scroll";
import { navLinks } from "../constants";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`section bg-bgcol ${
        isSticky ? "fixed z-20  top-0 left-0 right-0 shadow-sm" : ""
      }  py-5 md:py-4`}
    >
      {/* all container */}
      <div className="container  mx-auto">
        {/* container  */}
        <div className="flex justify-between items-center">
          {/* logo */}
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            className=""
          >
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer"
            >
              <img className="w-[130px]" src={logo} />
            </Link>
          </motion.div>
          {/* navlink  */}
          <div className="hidden md:flex">
            <motion.ul
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              className="flex gap-x-10 font-neue font-light text-[17px]"
            >
              {navLinks.map((details) => (
                <Link
                key={details.id}
                  to={details.id}
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={800}
                  className="cursor-pointer  hover:text-black hover:border-b hover:border-black active:text-black active:border-b active:border-black  transition-all duration-1000 ease-in-out"
                >
                  <li key={details.id}>{details.title}</li>
                </Link>
              ))}
            </motion.ul>
          </div>
          {/*mobile menu icon  */}
          <motion.div
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            className=" md:hidden"
            onClick={() => setToggle((prev) => !prev)}
          >
            {toggle ? <AiOutlineClose /> : <CiMenuBurger />}
          </motion.div>
        </div>
        {/*mobile  menu navbar  */}
        <div className=" md:hidden ">
          <div
            className={` 
                absolute   
                top-20
                right-1           
                my-5      
                sidebar-left
                min-w-[90px]
                flex
                rounded-lg
                justify-center
              
                ${toggle ? "flex" : "hidden"}
                bg-white bg-opacity-30`}
          >
            <ul className="flex flex-col items-center gap-10 md:hidden">
              {navLinks.map((details) => (
                <Link
                key={details.id}
                  to={details.id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  className="cursor-pointer font-neue font-roman border-b border-black p-4"
                >
                  <li
                    key={details.id}
                    className=" hover:text-black hover:border-b hover:border-black transition-all duration-300 ease-in-out"
                  >
                    {details.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
