import React from "react";
import Modal from "../inscription/Modal";

const Body = () => {
  return (
    <div>
      <div className="bgBody">
        <img className="logo" src="../images/logo.svg" alt="logo" />
        <Modal />
      </div>
    </div>
  );
};

export default Body;
