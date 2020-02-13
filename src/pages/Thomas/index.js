import React from "react";
import * as classNames from "classnames";
import ScrollUpButton from "react-scroll-up-button";

import { Header, Footer, ListCarousel, Team, Layout } from "../../components";

import "./Thomas.css";

const Thomas = () => {
  return (
    <Layout
      description="This is the Thomas' LP, enjoy beautiful React page website."
      title="Thomas LP"
      image={require("../../assets/transition_image.jpg")}
    >
      <div className="Thomas">
        <Header />
        <div className="main">
          <ListCarousel />
          <div className={classNames("parallax", "city-height")}>
            <div className="mask"></div>
          </div>
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
    </Layout>
  );
};

export default Thomas;
