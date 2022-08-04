import React, { useState } from "react";
import "../Header/Header.css";
import { Link } from "react-scroll";

import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [manuOpend, setMenuOpend] = useState(false);

  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      {!manuOpend && mobile ? (
        <div
          className="manu"
          style={{
            backgroundColor: "var(--appColor)",
            padding: "8px",
            borderRadius: "5px"
          }}
          onClick={() => setMenuOpend(true)}
        >
          <img src={Bars} alt="" style={{ width: "30px", height: "30px" }} />
        </div>
      ) : (
        <ul className="header-manu">
          <li>
            {" "}
            <Link
              onClick={() => setMenuOpend(false)}
              to="home"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpend(false)}
              to="programs"
              span={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpend(false)}
              to="reasons"
              span={true}
              smooth={true}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpend(false)}
              to="plans"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpend(false)}
              to="testimonials"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
