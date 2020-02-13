import React from "react";
import * as classNames from "classnames";
import ScrollUpButton from "react-scroll-up-button";

import {
  Header,
  Footer,
  ListCarousel,
  Team,
  Layout,
  Contact
} from "../../components";

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
          <Contact name="contact" />
          <div name="team" className={classNames("team", "team-position")}>
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
