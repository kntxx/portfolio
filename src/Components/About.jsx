import React from "react";
import { newaboutpic } from "../assets";
import { aboutDetails } from "../constants";
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { BiLogoReact, BiLogoTailwindCss } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
const About = () => {
  return (
    <section
      className="section min-h-[70vh] lg:min-h-[90vh] flex items-center"
      id="about"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col mx-auto  lg:flex-row  justify-between items-center">
          <motion.img
            variants={fadeIn("right", 0.9)}
            initial="hidden"
            whileInView={"show"}
            className=" hidden lg:flex   lg:max-w-[380px]"
            src={newaboutpic}
          />

          {/* text */}
          <div className="   md:max-w-[500px]">
            {aboutDetails.map((index) => (
              <div className="font-neue text-center lg:text-left">
                <motion.h1
                  variants={fadeIn("left", 0.5)}
                  initial="hidden"
                  whileInView={"show"}
                  className="text-[30px] lg:text-[40px] font-meduim  mb-5"
                >
                  {index.title}
                </motion.h1>
                <div className="flex flex-col gap-y-[40px] tracking-wider">
                  <motion.p
                    variants={fadeIn("left", 0.6)}
                    initial="hidden"
                    whileInView={"show"}
                    className=" text-[13px]   lg:text-[18px] font-roman"
                  >
                    {index.describe}
                  </motion.p>
                  <motion.p
                    variants={fadeIn("left", 0.7)}
                    initial="hidden"
                    whileInView={"show"}
                    className=" text-[13px]   lg:text-[18px] font-roman"
                  >
                    {index.describe2}
                  </motion.p>
                </div>
                {/* name education  */}

                <motion.div
                  variants={fadeIn("left", 0.8)}
                  initial="hidden"
                  whileInView={"show"}
                  className="flex flex-col items-center mx-auto lg:mx-0  lg:flex-row   leading-8 mt-5 lg:justify-between max-w-[400px]"
                >
                  <div className="">
                    <h3 className="text-[15px] font-bold text-lightgray  lg:text-[18px]">
                      NAME
                    </h3>

                    <p className="text-[13px] lg:text-[15px] text-lightgray tracking-wide">
                      {index.name}
                    </p>
                  </div>
                  <div className="">
                    <h3 className="text-[15px] font-bold text-lightgray  lg:text-[18px]">
                      EMAIL
                    </h3>

                    <p className="text-[13px] lg:text-[15px] text-lightgray tracking-wide">
                      {index.email}
                    </p>
                  </div>
                </motion.div>

                {/* skills  */}
                <motion.div
                  variants={fadeIn("left", 0.9)}
                  initial="hidden"
                  whileInView={"show"}
                  className="mt-5 text-[15px] lg:text-[18px] flex justify-center lg:justify-start gap-x-2 items-center"
                >
                  <p className="">
                    Tech <span className="ml-5 mr-5">|</span>
                  </p>

                  <IoLogoHtml5 className="text-[20px] lg:text-[28px] transition-transform duration-200 hover:scale-150" />
                  <IoLogoCss3 className="text-[20px] lg:text-[28px] transition-transform duration-200 hover:scale-150" />
                  <IoLogoJavascript className="text-[20px] lg:text-[28px] transition-transform duration-200 hover:scale-150" />
                  <BiLogoReact className="text-[20px] lg:text-[30px] transition-transform duration-200 hover:scale-150" />
                  <BiLogoTailwindCss className="text-[20px] lg:text-[30px] transition-transform duration-200 hover:scale-150" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
