import React from "react";
import { TbBrandFacebook } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";
import { PiLinkedinLogoLight } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
const Footer = () => {
  return (
    <footer className="hidden lg:flex w-full">
      <div className="container mx-auto">
        <div className="py-4 flex justify-between">
          <motion.div
            variants={fadeIn("right", 1)}
            initial="hidden"
            whileInView={"show"}
            className="font-neue font-meduim text-"
          >
            <p>
              Made by <span className="font-meduim">Kent Gesoro</span> -
              CopyRight &#169; 2023
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 1.3)}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-row gap-x-2 items-center"
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
      </div>
    </footer>
  );
};

export default Footer;
