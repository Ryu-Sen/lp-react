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
      </div>
      <Footer />
    </div>
  );
};

export default Thomas;
