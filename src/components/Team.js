import React from "react";
import * as classNames from "classnames";

import team from "../utils/team";

import "./styles.css";

const Team = () => {
  return team.map(member => (
    <div className={classNames("team-card", "team-card-space")}>
      <img
        className="team-card-photo"
        src={member.photo}
        alt={member.firstname}
      />
      <span>{member.lastname}</span>
      <span>{member.firstname}</span>
    </div>
  ));
};

export default Team;
