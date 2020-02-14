import React from "react";
import { Card } from "antd";
import * as classNames from "classnames";

import "./styles.css";

const Event = () => (
  <div className={classNames("event", "event-size")}>
    <img
      //     data-aos="flip-right"
      //   data-aos-duration="1500"
      src={require("../assets/headoffice.jpg")}
      alt="office"
      className={classNames("event-img", "event-img-size")}
    />
    {/* <Carousel style={{ width: "50%" }} autoplay effect="fade"> */}
    <Card
      className={classNames("event-card" /*, "event-card-size"*/)}
      style={{ fontSize: 20, fontWeight: "bold" }}
      title="Seminar Events Schedule"
      bordered={false}
    >
      <p>2020-04-23 (木) | 2:00PM</p>
      <p>2020-04-24 (金) | 2:00PM</p>
      <p>2020-04-27 (月) | 2:00PM</p>
    </Card>
    <Card title="Presented By" bordered={false}>
      <div className="event-presentator">
        <img src={require("../assets/team/ryuu.png")} alt="Ryuu" />
        <span>Senda</span>
        <span>Ryunosuke</span>
      </div>
    </Card>
  </div>
);

export default Event;
