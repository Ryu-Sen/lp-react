import React from "react";
import { Layout } from "antd";

import "./styles.css";

const { Header } = Layout;

const styles = {
  width: "100%",
  height: "auto",
  display: "flex",
  paddingLeft: 50,
  paddingRight: 50
};

const CustomHeader = () => {
  return (
    <Header style={{ ...styles }}>
      <a href="/">
        <img
          src={require("../assets/logo.png")}
          alt="logo"
          title="logo"
          className="header-logo"
        />
      </a>
    </Header>
  );
};

export default CustomHeader;
