import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import * as classNames from "classnames";

import team from "../utils/team";

import "./styles.css";

const Team = () => {
  const [modal, setModal] = useState(false);
  const [member, setMember] = useState(null);

  const open = () => {
    setModal(true);
  };

  const close = () => {
    setModal(false);
    setMember(null);
  };

  useEffect(() => {
    member ? open() : close();
  });

  return (
    <>
      {member && (
        <Modal
          title={`${member.lastname} ${member.firstname}`}
          visible={modal}
          onCancel={close}
          footer={null}
          style={{
            textAlign: "center"
          }}
        >
          <img
            style={{
              width: "60%",
              paddingBottom: 10
            }}
            src={member.photo}
            alt={member.firstname}
          />

          <p style={{ textAlign: "justify" }}>{member.description}</p>
        </Modal>
      )}
      {team.map(mate => (
        <div
          data-aos="fade-up"
          onClick={() => setMember(mate)}
          className={classNames("team-card", "team-card-space")}
        >
          <img
            className="team-card-photo"
            src={mate.photo}
            alt={mate.firstname}
          />
          <span>{mate.lastname}</span>
          <span>{mate.firstname}</span>
        </div>
      ))}
    </>
  );
};

export default Team;
