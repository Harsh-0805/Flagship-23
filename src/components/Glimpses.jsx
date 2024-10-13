import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import glimp1 from "../assets/Flagship_2.mov"; // MOV file
import glimp2 from "../assets/IMG-20230913-WA0001.jpg";
import glimp3 from "../assets/IMG-20230913-WA0002.jpg";
import glimp4 from "../assets/IMG-20230913-WA0003.jpg";
import glimp5 from "../assets/IMG-20230913-WA0004.jpg";
import glimp6 from "../assets/IMG-20230913-WA0005.jpg";
import glimp7 from "../assets/IMG-20230913-WA0006.jpg";
import glimp8 from "../assets/IMG-20230913-WA0007.jpg";

const Glimpses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  // Add a flag to indicate whether it's a video or image
  const media = [
    { src: glimp1, type: "video" }, // Video entry
  ];

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "000000",
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === media.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? media.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="glimpses" className="carousel my-8 pb-8 bg-[#131424]/30 p-2">
      <motion.div className={textVariant()}>
        <div className="items-center text-center">
          <h2 className={styles.sectionHeadText}>AFTERMOVIE FLAGSHIP '24</h2>
        </div>
      </motion.div>
      <div className="carousel-images py-4">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit="exit"
            variants={slideVariants}
            transition={{ duration: 1 }}
          >
            {/* Check if the current media is a video or an image */}
            {media[currentIndex].type === "video" ? (
              <video controls className="object-contain">
                <source src={media[currentIndex].src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={media[currentIndex].src}
                alt={`Glimpse ${currentIndex + 1}`}
                className="object-contain"
              />
            )}
          </motion.div>
        </AnimatePresence>
        <div className="slide_direction">
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="left"
            onClick={handlePrevious}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
            </svg>
          </motion.div>
          <motion.div
            variants={slidersVariants}
            whileHover="hover"
            className="right"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20"
              viewBox="0 96 960 960"
              width="20"
            >
              <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Glimpses;
