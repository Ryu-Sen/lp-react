import React from "react";
import * as classNames from "classnames";
import ScrollUpButton from "react-scroll-up-button";
import MetaTags from "react-meta-tags";

import { Header, Footer, ListCarousel, Team } from "../../components";

import "./Thomas.css";

const Thomas = () => {
  return (
    <div className="Thomas">
      <MetaTags>
        <meta
          name="description"
          content="This is the Thomas' LP, enjoy beautiful React single page website."
        />
        <meta
          property="og:image"
          content={require("../../assets/transition_image.jpg")}
        />
        <meta property="og:title" content="Thomas' LP" />
      </MetaTags>
      <Header />
      <div className="main">
        <ListCarousel />
        <div className={classNames("parallax", "city-height")}>
          <div className="mask"></div>
        </div>
        <div className={classNames("contact", "contact-position")}>
          <div style={{ padding: 20, fontSize: 20, fontWeight: "bold" }}>
            <p>+81 45 671 1195</p>
            <p>
              Morinaga Plaza Main Building 2F,
              <br />
              5-33-1 Shiba, Minato-ku, Tokyo, 108 - 0014
            </p>
          </div>
          <img
            src={require("../../assets/map.png")}
            alt="map"
            className={classNames("map-img", "map-size")}
          />
        </div>
        <div className={classNames("team", "team-position")}>
          <Team />
        </div>
      </div>
      <Footer />
      <ScrollUpButton />
    </div>
  );
};

export default Thomas;
