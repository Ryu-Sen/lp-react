import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ListCarousel from "../../components/ListCarousel";

import "./Thomas.css";

const Thomas = () => {
  return (
    <div className="Thomas">
      <Header />
      <div className="content">
        <ListCarousel />
        <div className="contact">
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
            className="map-img"
          />
        </div>
        <img
          src={require("../../assets/transition_image.jpg")}
          alt="transition"
          className="transition-img"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Thomas;
