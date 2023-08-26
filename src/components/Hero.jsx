import { motion } from "framer-motion";
import CountUp from "react-countup";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import { ComputersCanvas } from "./canvas";
import "../index.css";
import logo from "../assets/ecell-white-img.png";
import hero from "../assets/herobg.png";
import ParticlesContainer from "./canvas/particleContainer";

const Hero = () => {
  return (
    <div className="hero-wrapper md:items-center md:justify-center bg-[#25316d]/20">
      <div className="paddings innerWidth hero-container flexCenter z-[1]">
        <div className="flexColStart gap-[3rem]">
          <div className="relative z-[1]">
            <h1 className="font-semibold text-[5rem] leading-[4rem]">
              Flagship'<span className="text-[blue]">23</span>
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
                <span className="text-[blue]">+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className="flexColCenter">
              <span className="text-[2rem]">
                <CountUp end={2000} duration={4} />
                <span className="text-[blue]">+</span>
              </span>
              <span className="secondaryText">Premium Product</span>
            </div>
            <div className="flexColCenter stat">
              <span className="text-[2rem]">
                <CountUp end={28} />
                <span className="text-[blue]">+</span>
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
    // <div className="bg-[#131424]/60 h-full">
    //   {/*text*/}
    //   <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/30 to-black/10">
    //     <div className="text-center flex flex-col justify-center xl:pt-40">
    //       {/* title */}
    //       <h1 className="text-[35px] leading-tight md:text-[60px] md:leading-[1.3] mb-8 font-semibold;">
    //         Flagship'<span className="text-blue-800">23</span>
    //       </h1>
    //       {/* subtitle */}
    //       <p className="leading-[1.8] text-white/60 font-light max-w-sm mx-auto mb-10">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
    //         dolores at laboriosam fugiat velit omnis mollitia deleniti porro
    //         saepe sunt!
    //       </p>
    //     </div>
    //   </div>
    //   {/*Image*/}
    //   <div>image</div>
    // </div>
  );
};

export default Hero;
