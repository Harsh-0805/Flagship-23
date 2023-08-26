import { motion } from "framer-motion";
import CountUp from "react-countup";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { ComputersCanvas } from "./canvas";
import "../index.css";
import hero from "../assets/herobg.png";
import ParticlesContainer from "./canvas/particleContainer";

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
              Flagship'<span className="text-[blue]">23</span>
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Find a variety of properties that suit you very easilty</span>
            <span>Forget all difficulties in finding a residence for you</span>
            <span>Forget all difficulties in finding a residence for you</span>
            <span>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />{" "}
                <span className="text-[blue]">+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />{" "}
                <span className="text-[blue]">+</span>
              </span>
              <span className="secondaryText">Happy Customer</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span className="text-[blue]">+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
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
            className="image-container z-[1]"
          >
            <img src={hero} alt="houses" />
          </motion.div>
        </div>
        <ParticlesContainer />
      </div>
    </section>
  );
};

export default Hero;
