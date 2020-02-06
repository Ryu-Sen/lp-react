import React from "react";

const Header = () => {
  return (
    <header /*className="header"*/>
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
