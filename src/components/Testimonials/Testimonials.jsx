import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";

import { motion } from "framer-motion";

import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";

const Testimonials = () => {
  const [tSelected, setTSelected] = useState(0);
  const tLength = testimonialsData.length;

  const transition = { type: "spring", duration: 3 };

  return (
    <div className="testimonials" id="testimonials">
      <div className="left-t">
        <span>Testimonials </span>
        <span className="stroke-text">what they </span>
        <span>say abut us</span>
        <motion.span
          key={tSelected}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: 100 }}
          transition={{ ...transition, duration: 2 }}
        >
          {testimonialsData[tSelected].review}

          <motion.span>
            <span style={{ color: "var(--orange)" }}>
              {" "}
              {testimonialsData[tSelected].name}{" "}
            </span>{" "}
            - {testimonialsData[tSelected].status}
          </motion.span>
        </motion.span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          key={tSelected}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          src={testimonialsData[tSelected].image}
          alt=""
        />
        <div className="arrows">
          <img
            onClick={() => {
              tSelected === 0
                ? setTSelected(tLength - 1)
                : setTSelected(tSelected - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              tSelected === tLength - 1
                ? setTSelected(0)
                : setTSelected(tSelected + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
