import React from "react";
import { Card } from "antd";
import * as classNames from "classnames";

import "./styles.css";

const Event = () => (
  <div className={classNames("event", "event-size")}>
    <img
      data-aos="fade-left"
      data-aos-duration="1200"
      src={require("../assets/headoffice.jpg")}
      alt="office"
      className={classNames("event-img", "event-img-size")}
    />
    <div className={classNames("event-cards", "event-cards-size")}>
      <Card
        bodyStyle={{
          height: "100%"
        }}
        title="Seminar Events Schedule"
        bordered={false}
      >
        <div
          className={classNames("event-card")}
          style={{ fontSize: 20, fontWeight: "bold" }}
        >
          <div>
            <p>2020-04-23 (木) | 2:00 PM</p>
            <p>2020-04-24 (金) | 2:00 PM</p>
            <p>2020-04-27 (月) | 2:00 PM</p>
          </div>

          <div
            className={classNames("event-card-theme", "event-card-theme-size")}
          >
            <p>MAIN STEPS AND INTERESTS ABOUT REAL ESTATE.</p>
          </div>
        </div>
      </Card>
      <Card
        bodyStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        title="Presented By"
        bordered={false}
      >
        <div
          className={classNames("event-card", "event-card-size")}
          style={{ fontSize: 25, fontWeight: "bolder" }}
        >
          <div className="event-presentator">
            <img
              className="event-presentator-img"
              src={require("../assets/team/ryuu.png")}
              alt="Ryuu"
            />
            <p>SENDA</p>
            <p>Ryunosuke</p>
          </div>
        </div>
      </Card>
    </div>
  </div>
);

export default Event;
