import React from "react";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import "./Hero.css";
import NumberCounter from "number-counter";

import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur blur-h"></div>
      {/* Left side */}
      <div className="left-h">
        <Header />
        {/* The best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "140px" : "172px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span> The best fitness club</span>
        </div>

        {/* Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your idea live up your
              life to fullest
            </span>
          </div>
        </div>
        {/* Figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="2" preFix="+" />
            </span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={850} delay="2" preFix="+" />{" "}
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={10} delay="2" preFix="+" />{" "}
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* Hero Button */}

        <div className="hero-btn">
          <button className="btn">Get started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>
      {/* Right side */}
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          className="heart-rate"
          initial={{ right: "-20px" }}
          whileInView={{ right: "10px" }}
          transition={transition}
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* Hero image */}

        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "120px" }}
          whileInView={{ right: "240px" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />

        {/* Calories */}

        <motion.div
          className="calories"
          initial={{ right: "520px" }}
          whileInView={{ right: "280px" }}
          transition={transition}
        >
          <img src={Calories} alt="" />
          <div>
            <span>Clories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
