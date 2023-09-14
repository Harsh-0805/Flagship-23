import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Contact = () => {
  return (
    <div id="contact" className="h-full">
      <div className="container mx-auto py-32 px-5 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] ">
          <motion.h2
            variants={fadeIn("up", "spring", 0.5, 0.75)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-21"
          >
            Contact <span className="text-[blue]">Us</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", "spring", 0.5, 0.75)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={`${textVariant()} flex-1 flex flex-col gap-6 w-full mx-auto`}
          >
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input" />
              <input type="number" placeholder="number" className="input" />
            </div>
            <input type="email" placeholder="email" className="input" />
            <textarea placeholder="message" className="textarea"></textarea>
            <button
              className="btn rounded-full border border-white/50 max-w-[170px]
            px-8 transition-all duration-300 flex items-center justify-center
            overflow-hidden hover:border-accent-group hover:shadow-[inset_0_0_0.5rem_4em_blue] hover:translate-y-[-0.5rem] hover:text-[color:var(--hover-b)]"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 ">
                Submit
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
