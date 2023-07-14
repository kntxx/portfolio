import React, { useRef, useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
const Contact = () => {
  const form = useRef();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (showMessage) {
      const timeoutId = setTimeout(() => {
        setShowMessage(false);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [showMessage]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ei9n1mr",
        "template_qkvek19",
        form.current,
        "Bykfim08ZlZ2XXd_C"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");

          setShowMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className=" min-h-[70vh] lg:min-h-[70vh] flex items-center lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center md:text-left md:items-start md:flex-row ">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-cente mt-10"
          >
            <div className="font-neue">
              <h4 className="text-[30px] lg:text-[45px] font-meduim ">
                Contact Me
              </h4>
              <h2 className="mt-5 max-w-[480px] font-roman text-lightgray text-[19px] lg:text-[23px] tracking-wide ">
                I'd love to hear from you! feel free to reach out with any
                questions or suggestions.
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.9)}
            initial="hidden"
            whileInView={"show"}
            ref={form}
            onSubmit={sendEmail}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border-black rounded-2xl flex flex-col  gap-y-6 pb-24 p-6 items-start"
          >
            <CSSTransition
              in={showMessage}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <div className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-center font-neue text-[17px] font-bold text-lightgray">
                I have received your message. Thank you!
              </div>
            </CSSTransition>

            <input
              id="name"
              name="to_name"
              className="bg-transparent font-neue font-thin border-b border-black max-w-[300px] py-3 outline-none w-full placeholder:text-lightgray transition-all"
              placeholder="Your Name"
              type="text"
              required
            />

            <input
              id="email"
              name="from_name"
              className="bg-transparent font-neue font-thin border-b border-black max-w-[300px] py-3 outline-none w-full placeholder:text-lightgray  transition-all"
              placeholder="Your Email"
              type="email"
              required
            />
            <textarea
              name="message"
              id="message"
              placeholder="Message "
              required
              className="bg-transparent font-neue font-thin resize-none mb-12 border-b border-black py-12 outline-none w-full placeholder:text-lightgray  transition-all"
            ></textarea>
            <button
              type="submit"
              value="Send"
              className="w-full font-neue font-roman cursor-pointer tracking-wide text-[16px] flex justify-center py-2 px-4 border border-black/40 rounded-md text-lightgray hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              Submit
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
