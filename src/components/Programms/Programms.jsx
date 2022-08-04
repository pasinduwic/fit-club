import React from "react";
import "./Programms.css";

import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programms = () => {
  return (
    <div className="programs">
      {/* Header */}
      <div className="programs-header" id="programs">
        <span className="stroke-text">Explore our </span>
        <span>Programs </span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programms;
