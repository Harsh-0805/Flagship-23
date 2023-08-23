import { motion } from "framer-motion";
import CountUp from "react-countup";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import "../index.css";
import logo from "../assets/ecell-white-img.png";
import hero from "../assets/herobg.png";
import ParticlesContainer from "./canvas/particleContainer";

const Hero = () => {
  return (
    <div className="hero-wrapper bg-[#131110]">
      <div className="paddings innerWidth hero-container flexCenter z-[1]">
        <div className="flexColStart gap-[3rem]">
          <div className="relative z-[1]">
            <h1 className="font-semibold text-[3.8rem] leading-[4rem]">
              Discover <br /> Most Suitable <br /> Property
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find variety of properties that suites you very well
            </span>
            <span className="secondaryText">
              forget all difficultie in finding a residence for you
            </span>
          </div>
          <div className="flexCenter justify-between w-full">
            <div className="flexColCenter ">
              <span className="text-[2rem]">
                <CountUp end={2000} duration={4} />
                <span className="text-[orange]">+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className="flexColCenter">
              <span className="text-[2rem]">
                <CountUp end={2000} duration={4} />
                <span className="text-[orange]">+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className="flexColCenter stat">
              <span className="text-[2rem]">
                <CountUp end={28} />
                <span className="text-[orange]">+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>

        <div className="flexCenter justify-center hero-right z-[1]">
          <div className="image-container">
            <img src={hero} alt="" />
          </div>
        </div>
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Hero;
