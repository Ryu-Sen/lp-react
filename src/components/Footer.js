import React from "react";

import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div style={{ justifyContent: "center", alignItems: "center" }}> */}
      <p className="footer-brand">
        Sotheby&#39;s International Realty® and the Sotheby&#39;s International
        Realty Logo are service marks licensed to Sotheby&#39;s International
        Realty Affiliates LLC and used with permission. List Sotheby&#39;s
        International Realty fully supports the principles of the Fair Housing
        Act and the Equal Opportunity Act. Each franchise is independently owned
        and operated. Any services or products provided by independently owned
        and operated franchisees are not provided by, affiliated with or related
        to Sotheby&#39;s International Realty Affiliates LLC nor any of its
        affiliated companies. If your property is listed with a real estate
        broker, please disregard. It is not our intention to solicit the
        offerings of other real estate brokers.
      </p>
      {/* </div> */}
      {/* <div style={{ justifyContent: "center", alignItems: "center" }}> */}
      <img
        src={require("../assets/logo.png")}
        alt="logo"
        title="logo"
        className="footer-logo"
      />
      {/* </div> */}
    </footer>
  );
};

export default Footer;
