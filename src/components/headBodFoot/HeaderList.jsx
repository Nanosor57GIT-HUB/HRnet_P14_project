import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "hrnet_component_plugin_modal/dist/component/Modal"


/**
 * @name Header
 * @description create header component with a logo and 2 links of navigation
 * @returns {JSX.Element}
 *
 */

const Header = () => {
  const [modalState, setModalState] = useState(false);

  function openModal() {
    setModalState(!modalState);
  }

  return (
    <div className="header-container">
      <div className="societe">
        <div>
          <img
            className="logoHealthWealth"
            src="../images/logo.png"
            alt="logo"
          />
          <span className="hrNet"> HRnet</span>
        </div>
        <h1>Health-Wealth</h1>
      </div>
      <div className="header-nav">
        <Link to="/" className="toggleModal nav-link" onClick={openModal}>
          Create Employee
        </Link>

        
      </div>
      <Modal toggle={modalState} action={openModal} />
    </div>
  );
};

export default Header;