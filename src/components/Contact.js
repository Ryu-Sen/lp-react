import React from "react";
import * as classNames from "classnames";

import "./styles.css";

const Contact = () => (
  <div className={classNames("contact", "contact-position")}>
    <div
      data-aos="fade-right"
      data-aos-duration="1500"
      style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}
    >
      <p>+81 45 671 1195</p>
      <p>
        Morinaga Plaza Main Building 2F,
        <br />
        5-33-1 Shiba, Minato-ku, Tokyo, 108 - 0014
      </p>
    </div>
    <img
      data-aos="flip-right"
      data-aos-duration="1500"
      src={require("../assets/map.png")}
      alt="map"
      className={classNames("map-img", "map-size")}
    />
  </div>
);

export default Contact;
