import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";

import WhiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plan-container" id="plans">
      <div className="blur blur-p-1"></div>
      <div className="blur blur-p-2"></div>
      {/* Header */}
      <div className="plan-header">
        <span className="stroke-text">reday to start </span>
        <span>your journey </span>
        <span className="stroke-text">with us now</span>
      </div>
      {/* Plans */}
      <div className="plans">
        {plansData.map((plan, index) => (
          <div className="plan" key={index}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, index) => (
                <div className="feature">
                  <img src={WhiteTick} alt="" />
                  <span key={index}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benifits -></span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
