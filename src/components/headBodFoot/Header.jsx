import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalConfirm from "../confirmInscription/ModalConfirm";


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
        

        <Link to="/employeesList" className="toggleModal nav-link">
          Employee List
        </Link>
      </div>
      <ModalConfirm toggle={modalState} action={openModal} />
    </div>
  );
};

export default Header;
