import React, { useRef } from "react";
import "./Email.css";
import emailjs from "@emailjs/browser";

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kh1wysp",
        "template_jaa6f7e",
        form.current,
        "fqH2o29q6wSBsd0Rr"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">Ready to </span>
          <span>Level up </span>
        </div>
        <div>
          <span>Your body </span>
          <span className="stroke-text">with us? </span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user-email"
            placeholder="Enter Your Email"
          />
          <button className="btn btn-j">Join Us Now</button>
        </form>
      </div>
    </div>
  );
};

export default Email;
