import React from "react";

import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <img
        src={require("../assets/logo.png")}
        alt="logo"
        title="logo"
        className="header-logo"
      />
    </header>
  );
};

export default Header;
