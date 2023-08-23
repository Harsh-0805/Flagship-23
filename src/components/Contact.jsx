import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { BsArrowRight } from "react-icons/bs";
// import { fadeIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className="h-full bg-[#131424]/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] ">
          <motion.h2
            variants={fadeIn("up", "spring", 0.2, 1.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-21"
          >
            Let's <span className="text-blue-800">Connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", "spring", 0.4, 1.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input" />
              <input type="email" placeholder="email" className="input" />
            </div>
            <input type="text" placeholder="subject" className="input" />
            <textarea placeholder="message" className="textarea"></textarea>
            <button
              className="btn rounded-full border border-white/50 max-w-[170px]
            px-8 transition-all duration-300 flex items-center justify-center
            overflow-hidden hover:border-accent-group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
