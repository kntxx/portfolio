import React from "react";
import { TbBrandFacebook } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { myDetails } from "../constants/index.js";
import { TypeAnimation } from "react-type-animation";
import Image1 from "../assets/newava2.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
const Header = () => {
  return (
    <section
      className="section flex min-h-[70vh] lg:min-h-[85vh] items-center  "
      id="home"
    >
      <div className="container flex flex-col-reverse items-center gap-y-10  lg:flex-row mx-auto justify-between">
        <div className="font-neue  text-center  lg:text-left flex items-center justify-center">
          {myDetails.map((index) => (
            <div>
              <motion.p
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                className="text-[30px] md:text-[45px]  lg:text-[55px] "
              >
                Hello,
              </motion.p>
              <motion.h1
                key={index.id}
                variants={fadeIn("right", 0.7)}
                initial="hidden"
               whileInView={"show"}
                className="text-[30px] md:text-[45px] lg:text-[px] tracking-wide"
              >
                I am {index.name}
              </motion.h1>
              <div
                variants={fadeIn("right", 0.9)}
                initial="hidden"
               whileInView={"show"}
                className="font-light text-lightgray  tracking-wide font-neue text-[20px]  "
              >
                <motion.p
                  key={index.id}
                  variants={fadeIn("right", 1.1)}
                  initial="hidden"
                 whileInView={"show"}
                  className=" lg:text-[21px] text-[15px]"
                >
                  {index.describe}
                </motion.p>
                <motion.p
                  variants={fadeIn("right", 1.3)}
                  initial="hidden"
                 whileInView={"show"}
                  className="font-bold mt-3 text-[15px]  lg:text-[21px]"
                >
                  <TypeAnimation
                    sequence={[
                      "Front-End-Developer.",
                      2000,
                      "Front-End-Developer.",
                      2000,
                      "Front-End-Developer.",
                      2000,
                    ]}
                    speed={50}
                    wrapper="span"
                    repeat={Infinity}
                    v
                  />
                </motion.p>
                <motion.p
                  variants={fadeIn("right", 1.5)}
                  initial="hidden"
                 whileInView={"show"}
                  className="text-[15px]   lg:text-[21px] mt-3  "
                >
                  <a className="border-b-black border-b-2 font-roman text-black cursor-pointer  ">
                    Get in Touch
                  </a>
                </motion.p>
              </div>
              <motion.div
                variants={fadeIn("right", 1.7)}
                initial="hidden"
               whileInView={"show"}
                className="flex text-[20px] items-center justify-center lg:justify-start gap-x-6 mt-5"
              >
                <a
                  href="https://www.facebook.com/yourfacebookpage"
                  className=" transition-transform duration-300 hover:scale-150"
                  title="Visit our Facebook page"
                  target="_blank"
                >
                  <TbBrandFacebook className="cursor-pointer" size={23} />
                </a>

                <a
                  href="https://www.instagram.com/kentatixx18"
                  className=" transition-transform duration-300 hover:scale-150"
                  target="_blank"
                >
                  <SlSocialInstagram className="cursor-pointer" size={21} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kent-joseph-gesoro-69b399259/"
                  className=" transition-transform duration-300 hover:scale-150"
                  target="_blank"
                >
                  <PiLinkedinLogoLight className="cursor-pointer" size={24} />
                </a>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          variants={fadeIn("left", 1.8)}
          initial="hidden"
         whileInView={"show"}
          className=" max-w-[250px]  md:flex   lg:max-w-[450px]"
        >
          <img  className="" src={Image1} />
        </motion.div>
      </div>
    </section>
  );
};

export default Header;
