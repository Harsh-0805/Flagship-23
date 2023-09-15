import { motion } from "framer-motion";
import CountUp from "react-countup";
import "../index.css";
import ParticlesContainer from "./canvas/particleContainer";
import flagship from "../assets/Flagship.png";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
              className="text-[35px] leading-tight md:text-[60px] md:leading-[1.3] mb-4 font-semibold"
            >
              E-CELL <br /> VNIT <br />
              Flagship'
              <span className="bg-gradient-to-b from-[#0000ff] to-[#000000] bg-clip-text text-transparent text-[70px]">
                23
              </span>
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>
              This year Flagship'23 is happening on the 17th of September
            </span>
            <span>Venue: VNIT Auditorium from 5 pm</span>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp end={10000} duration={4} />{" "}
                <span className="text-[blue]">+</span>
              </span>
              <span className="secondaryText">Reach</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={5000} duration={4} />{" "}
                <span className="text-[blue]">+</span>
              </span>
              <span className="secondaryText">Footfall</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={50} /> <span className="text-[blue]">+</span>
              </span>
              <span className="secondaryText">Speakers</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            // animate={{
            //   // y: [0, -20, 0, 20, 0], // Define the y-coordinate animation values
            //   x: 0,
            //   opacity: 1,
            // }}
            // transition={{
            //   type: "ease-in",
            //   duration: 2, // Duration of one full wave cycle
            //   // repeat: Infinity, // Repeat the animation infinitely
            //   // ease: "linear", // Linear easing for a smooth wave motion
            // }}
            className="image-container z-[1]"
          >
            <img src={flagship} alt="houses" />
          </motion.div>
        </div>
        <ParticlesContainer />
      </div>
    </section>
  );
};

export default Hero;
