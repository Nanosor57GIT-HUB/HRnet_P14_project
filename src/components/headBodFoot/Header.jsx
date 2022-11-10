import React from "react";
import Modal from "../inscription/Modal";
import Modal2 from "../employee/Modal2";
import { useState } from "react";


const Header = () => {
 const [modalState, setModalState] = useState(false);
  const [modalState2, setModalState2] = useState(false);

  function openModal() {
    setModalState(!modalState);
  }

   function openModal2() {
     setModalState2(!modalState2);
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
        <button
          type="button"
          className="toggleModal nav-link"
          onClick={openModal}
        >
          Create Employee
        </button>

        <button
          type="button"
          className="toggleModal nav-link"
          onClick={openModal2}
        >
          Employee List
        </button>
      </div>
      <Modal toggle={modalState} action={openModal} />
      <Modal2 toggle2={modalState2} action2={openModal2} />
    </div>
  );
};

export default Header;
