//import { Modal } from "hrnet_component_plugin_modal";

import React from "react";
import Form from "../form/Form";

import "hrnet_component_plugin_modal/dist/component/main.css";

const Body = () => {
  return (
    <div className="body">
      <Form />
      <div className="bgBody">
        <img className="logoBG" src="../images/logoBG.svg" alt="logo" />
        <img className="logoBG" src="../images/logoBG.svg" alt="logo" />
      </div>
    </div>
  );
};

export default Body;
