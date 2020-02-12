import React from "react";

import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <a href="/">
        <img
          src={require("../assets/logo.png")}
          alt="logo"
          title="logo"
          className="header-logo"
        />
      </a>
    </header>
  );
};

export default Header;
