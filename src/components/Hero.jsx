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
    // <section className={`relative w-full h-screen mx-auto`}>
    //   <div
    //     className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
    //   >
    //     <div className="flex flex-col justify-center items-center mt-5">
    //       <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
    //       <div className="w-1 sm:h-80 h-40 violet-gradient" />
    //     </div>

    //     <div>
    //       <h1 className={`${styles.heroHeadText} text-white`}>
    //         Hi, I'm <span className="text-[#915EFF]">Harsh</span>
    //       </h1>
    //       <p className={`${styles.heroSubText} mt-2 text-white-100`}>
    //         I develop 3D visuals, user <br className="sm:block hidden" />
    //         interfaces and web applications
    //       </p>
    //     </div>
    //   </div>

    //   <ComputersCanvas />

    //   <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
    //     <a href="#about">
    //       <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
    //         <motion.div
    //           animate={{
    //             y: [0, 24, 0],
    //           }}
    //           transition={{
    //             duration: 1.5,
    //             repeat: Infinity,
    //             repeatType: "loop",
    //           }}
    //           className="w-3 h-3 rounded-full bg-secondary mb-1"
    //         />
    //       </div>
    //     </a>
    //   </div>
    // </section>
    <section className="hero-wrapper bg-[#131110]">
      <div>
        <ParticlesContainer />
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
