import React from "react";
import { projectspic } from "../assets";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const Projects = () => {
  return (
    <section
      className="section flex items-center min-h-[70vh] lg:min-h-[85vh]"
      id="project"
    >
      <div className="container mx-auto relative">
        <div className="flex flex-col gap-y-[90px]">
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex items-center justify-center"
          >
            <h1 className="font-neue text-[30px] lg:text-[40px] font-meduim">
              Projects
            </h1>
          </motion.div>
          <div className="flex flex-col items-center gap-y-7 lg:flex-row gap-x-10">
            <motion.div
              variants={fadeIn("down", 0.7)}
              initial="hidden"
              whileInView={"show"}
              className="group relative max-w-[200px] md:max-w-[300px] lg:max-w-full overflow-hidden border border-lightgray/50 rounded-lg"
            >
              <div className=" cursor-pointer  group-hover:bg-black/70 w-full h-full absolute z-10 transition-all duration-300"></div>

              <img
                className="  group-hover:scale-125 transition-all duration-500 "
                src={projectspic}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("down", 0.9)}
              initial="hidden"
              whileInView={"show"}
              className="group relative max-w-[200px] md:max-w-[300px] lg:max-w-full overflow-hidden border border-black/50 rounded"
            >
              <div className=" cursor-pointer  group-hover:bg-black/70 w-full h-full absolute z-10 transition-all duration-300"></div>

              <img
                className="  group-hover:scale-125 transition-all duration-500"
                src={projectspic}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("down", 1)}
              initial="hidden"
              whileInView={"show"}
              className="group relative max-w-[200px] md:max-w-[300px] lg:max-w-full overflow-hidden border border-black/50 rounded"
            >
              <div className=" cursor-pointer  group-hover:bg-black/70 w-full h-full absolute z-10 transition-all duration-300"></div>

              <img
                className="  group-hover:scale-125 transition-all duration-500"
                src={projectspic}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
